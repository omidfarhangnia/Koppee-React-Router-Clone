import AboutUs from "~/components/AboutUs";
import Offering from "~/components/Offering";
import Services from "~/components/Services";
import Slider from "~/components/Slider";
import type { Route } from "../+types/root";
import { sql } from "@vercel/postgres";
import MenuAndPricing from "~/components/MenuAndPricing";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;

  try {
    await sql`INSERT INTO UserEmail(email) VALUES(${email})`
    return { success: true, message: "Email updated successfully" };
  } catch (err) {
    return { success: false, message: "Failed to update email" }
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
    </>
  );
}
