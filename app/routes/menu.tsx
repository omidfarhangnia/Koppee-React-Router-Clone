import Breadcrumbs from "~/components/Breadcrumbs";
import MenuAndPricing from "~/components/MenuAndPricing";

export const handle = {
  breadcrumb: "menu"
}

export default function Menu() {
  return (
    <>
      <Breadcrumbs />
      <MenuAndPricing />
    </>
  );
}
