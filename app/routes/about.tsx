import AboutUs from "~/components/AboutUs";
import Breadcrumbs from "~/components/Breadcrumbs";

export const handle = {
    breadcrumb: "about us"
}

export default function About() {
    return (
        <>
            <Breadcrumbs />
            <AboutUs />
        </>
    );
}
