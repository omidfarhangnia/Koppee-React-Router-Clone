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

    try {
      await sql`INSERT INTO UserEmail(email) VALUES(${email})`
      return { success: true, message: "Email updated successfully" };
    } catch (err) {
      return { success: false, message: "Failed to update email" }
    }
  } else if (actionType === "booking") {
    console.log("hello there")
  }
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
