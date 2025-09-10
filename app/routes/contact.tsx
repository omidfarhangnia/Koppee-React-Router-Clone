import Breadcrumbs from "~/components/Breadcrumbs";
import ContactForm from "~/components/Contact-form";
import type { Route } from "../+types/root";
import { sql } from "@vercel/postgres";

export const handle = {
  breadcrumb: "contact",
};

function checkContactMessageValidation(
  name: any,
  email: any,
  subject: any,
  message: any
): { ok: boolean; result: { success: boolean; message: string } } {
  if (typeof name !== "string" || name === null)
    return {
      ok: false,
      result: {
        success: false,
        message: "Invalid name.",
      },
    };

  if (name.length < 2)
    return {
      ok: false,
      result: {
        success: false,
        message: "name must be at least 2 characters.",
      },
    };

  if (typeof email !== "string")
    return {
      ok: false,
      result: {
        success: false,
        message: "Invalid email address",
      },
    };

  if (!email.includes("@"))
    return {
      ok: false,
      result: {
        success: false,
        message: "email address must includes @ character.",
      },
    };

  if (typeof subject !== "string")
    return {
      ok: false,
      result: {
        success: false,
        message: "Invalid subject.",
      },
    };

  if (subject.length < 10)
    return {
      ok: false,
      result: {
        success: false,
        message: "subject must be at least 10 characters.",
      },
    };

  if (typeof message !== "string")
    return {
      ok: false,
      result: {
        success: false,
        message: "Invalid message.",
      },
    };

  if (message.length < 30 || message.length > 500)
    return {
      ok: false,
      result: {
        success: false,
        message: "the message length must be between 30 to 500",
      },
    };

  return {
    ok: true,
    result: { success: true, message: "validation completed succesfully" },
  };
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  const reservationValidation = checkContactMessageValidation(
    name,
    email,
    subject,
    message
  );
  if (!reservationValidation.ok) {
    return reservationValidation.result;
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
