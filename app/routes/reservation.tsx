import Breadcrumbs from "~/components/Breadcrumbs";
import Booking, { BookingDivider } from "~/components/Booking";
import type { Route } from "../+types/root";
import { sql } from "@vercel/postgres";

export const handle = {
  breadcrumb: "reservation",
};

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const date = formData.get("date") as string;
  const people = Number(formData.get("people")) as number;

  if (
    typeof name !== "string" ||
    name.length < 2 ||
    typeof email !== "string" ||
    !email.includes("@") ||
    typeof date !== "string" ||
    isNaN(new Date(date).getTime()) ||
    isNaN(people) ||
    people < 1 ||
    people > 50
  ) {
    return { success: false, message: "invalid data provided." };
  }

  try {
    await sql`INSERT INTO RESERVATIONS(customer_name, customer_email, reservation_datetime, number_of_people)
                VALUES(${name}, ${email}, ${date}, ${people})
      `;
    return {
      success: true,
      message: "your reservation completed see you soon.",
    };
  } catch (err: any) {
    console.log(err);
    if (err?.code === "23505") {
      return { success: false, message: "your table booked before." };
    }

    return {
      success: false,
      message: "something went wrong please try again.",
    };
  }
}

export default function Reservation() {
  return (
    <>
      <Breadcrumbs />
      <BookingDivider side={"top"} />
      <Booking isReservationPage={true} />
      <BookingDivider side={"bottom"} />
    </>
  );
}
