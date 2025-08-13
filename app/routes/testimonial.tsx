import Breadcrumbs from "~/components/Breadcrumbs";
import Overview from "~/components/Overview";

export const handle = {
  breadcrumb: "testimonial"
}

export default function Testimonial() {
  return (
    <>
      <Breadcrumbs />
      <Overview />
    </>
  );
}
