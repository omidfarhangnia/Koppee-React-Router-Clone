import Breadcrumbs from "~/components/Breadcrumbs";
import ContactForm from "~/components/Contact-form";
import type { Route } from "../+types/root";
import { sql } from "@vercel/postgres";

export const handle = {
  breadcrumb: "contact",
};

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (
    typeof name !== "string" ||
    name.length < 2 ||
    typeof email !== "string" ||
    !email.includes("@") ||
    typeof subject !== "string" ||
    subject.length < 2 ||
    typeof message !== "string" ||
    message.length < 5
  ) {
    return { success: false, message: "invalid data provided." };
  }

  try {
    await sql`INSERT INTO CONTACTUS(author_name, author_email, message_subject, message_text)
                VALUES(${name}, ${email}, ${subject}, ${message})`;

    return {
      success: true,
      message: "your message recieved thank you.",
    };
  } catch (err) {
    console.log(err);

    return {
      success: false,
      message: "something went wrong please try again.",
    };
  }
}

export default function Contact() {
  return (
    <>
      <Breadcrumbs />
      <ContactForm />
    </>
  );
}
