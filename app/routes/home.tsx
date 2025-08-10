import AboutUs from "~/components/AboutUs";
import Offering from "~/components/Offering";
import Services from "~/components/Services";
import Slider from "~/components/Slider";
import type { Route } from "../+types/root";
import { sql } from "@vercel/postgres";
import MenuAndPricing from "~/components/MenuAndPricing";
import Booking from "~/components/Booking";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const actionType = formData.get("actionType");
  if (actionType === "newsletter") {
    const email = formData.get("email") as string;

    if (typeof email !== "string" || !email.includes("@")) {
      return { success: false, message: "invalid email format" };
    }

    try {
      await sql`INSERT INTO UserEmail(email) VALUES(${email})`;
      return { success: true, message: "you got 50% offer see you soon" };
    } catch (err: any) {
      if (err?.code === "23505") {
        return { success: false, message: "This email is already subscribed." };
      }
      console.log(err);
      return { success: false, message: "something went wrong please try again" };
    }
  }

  if (actionType === "booking") {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const date = formData.get("date") as string;
    const people = Number(formData.get("people")) as number;

    if (
      typeof name !== "string" || name.length < 2 ||
      typeof email !== "string" || !email.includes("@") ||
      typeof date !== "string" || isNaN(new Date(date).getTime()) ||
      isNaN(people) || people < 1 || people > 50
    ) {
      return { success: false, message: "invalid data provided." }
    }

    try {
      await sql`INSERT INTO RESERVATIONS(customer_name, customer_email, reservation_datetime, number_of_people)
                VALUES(${name}, ${email}, ${date}, ${people})
      `;
      return { success: true, message: "your reservation completed see you soon." }
    } catch (err: any) {
      console.log(err)
      if (err?.code === "23505") {
        return { success: false, message: "your table booked before." }
      }

      return { success: false, message: "something went wrong please try again." }
    }
  }

  return { success: false, message: "unkown or missing action" }
}

export default function Home() {
  return (
    <>
      <Slider />
      <AboutUs />
      <Services />
      <Offering />
      <MenuAndPricing />
      <Booking isReservationPage={false} />
    </>
  );
}
