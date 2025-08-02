import Breadcrumbs from "~/components/Breadcrumbs";
import Services from "~/components/Services";

export const handle = {
    breadcrumb: "service"
}

export default function Service() {
  return (
    <>
      <Breadcrumbs />
      <Services />
    </>
  );
}
