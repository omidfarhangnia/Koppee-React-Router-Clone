import Breadcrumbs from "~/components/Breadcrumbs";
import Booking, { BookingDivider } from "~/components/Booking";

export const handle = {
  breadcrumb: "reservation"
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
