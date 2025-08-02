import AboutUs from "~/components/AboutUs";
import Offering from "~/components/Offering";
import Services from "~/components/Services";
import Slider from "~/components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <AboutUs />
      <Services />
      <Offering />
    </>
  );
}
