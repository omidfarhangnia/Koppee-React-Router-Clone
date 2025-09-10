import React, { useEffect, useRef, useState } from "react";

const initialResponseMessage = {
  message: "",
  success: false,
};

export default function OfferingForm() {
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState(
    initialResponseMessage
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (responseMessage.message !== "") {
      timeoutRef.current = setTimeout(() => {
        setResponseMessage(initialResponseMessage);
      }, 4000);
    }

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [responseMessage]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setResponseMessage({ message: "", success: false });

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/?index", {
        method: "POST",
        body: formData,
      });

      console.log("**************Response************** >>");
      console.log(response);
      console.log("<< **************Response**************");

      if (response.ok) {
        setResponseMessage({
          success: true,
          message: "you got 50% offer see you soon",
        });
        setEmail("");
      }
    } catch (error) {
      setResponseMessage({
        success: false,
        message: "something went wrong please try again",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center h-14">
        <input type="hidden" value={"newsletter"} name="actionType" />
        <label htmlFor="offering-email" className="sr-only">
          name
        </label>
        <input
          required
          value={email}
          id="offering-email"
          onChange={(e) => {
            setEmail(e.target.value);
            setResponseMessage({ message: "", success: false });
          }}
          className="w-[60%] bg-[#ffffff] px-[20px] h-full text-[#212529] focus-within:outline-none placeholder:text-[#505050] font-montserrat"
          placeholder="Your Email"
          type="email"
          name="email"
        />
        <button
          disabled={isSubmitting}
          className="bg-[#DA9F5B] w-[40%] cursor-pointer text-[14px] disabled:cursor-default disabled:opacity-80 text-[#212529] h-full capitalize font-montserrat font-semibold focus-within:outline-none"
          type="submit"
        >
          {isSubmitting ? "Submitting..." : "Sign Up"}
        </button>
      </form>
      <p
        className={`mt-4 text-[18px] h-[20px] capitalize ${
          responseMessage?.success ? "text-green-300" : "text-red-400"
        }`}
      >
        {responseMessage.message}
      </p>
    </>
  );
}
