import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useEffect, useRef } from "react";
import { Form, useActionData, useNavigation } from "react-router";
import type { GetInTouchData } from "./Footer";

type CommunicationChannels = Omit<
  GetInTouchData & { title: string },
  "className"
>;
const communicationChannels: CommunicationChannels[] = [
  {
    id: "communicationChannels1",
    icon: <FaLocationDot color="#DA9F5B" size={35} />,
    title: "address",
    label: "123 street, new york, USA",
    href: "https://maps.app.goo.gl/fwexgDxU8VmSYdB38",
    target: "_blank",
  },
  {
    id: "communicationChannels2",
    icon: <FaPhoneAlt color="#DA9F5B" size={35} />,
    title: "phone",
    label: "+012 345 6789",
    href: "tel:+01234567890",
    target: "_self",
  },
  {
    id: "communicationChannels3",
    icon: <MdOutlineMailOutline color="#DA9F5B" size={35} />,
    title: "email",
    label: "info@example.com",
    href: "mailto:info@example.com",
    target: "_self",
  },
];

export default function ContactForm() {
  // controlling submitting state
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // controlling action messages
  const actionData = useActionData();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (actionData?.success && !isSubmitting) {
      formRef.current?.reset();
    }
  }, [actionData, isSubmitting]);

  return (
    <section className="section__mainStyle">
      <div className="flex flex-col w-full items-center justify-center gap-[1rem]">
        <div className="flex flex-col items-center justify-center gap-[.3rem]">
          <span className="section__divider"></span>
          <h2 className="section__h2">contact us</h2>
          <h3 className="section__h3">feel free to contact</h3>
        </div>
        <div className="w-full flex flex-wrap gap-8 my-8 items-center justify-center">
          {communicationChannels.map((channel) => {
            return (
              <a
                key={channel.id}
                href={channel.href}
                target={channel.target}
                className="w-full md:w-[30%] flex-col items-center justify-center gap-2 flex"
              >
                <span>{channel.icon}</span>
                <span className="font-bold text-[calc(1.275rem_+_.3vw)] lg:text-[1.5rem] capitalize text-[#33211D] font-roboto">
                  {channel.title}
                </span>
                <span className="font-montserrat text-[#555555]">
                  {channel.label}
                </span>
              </a>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 w-full">
          <iframe
            title="location of axe point in canada"
            className="w-full md:w-[45%]"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3020.589680821986!2d-73.960301!3d40.793034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ3JzM0LjkiTiA3M8KwNTcnMzcuMSJX!5e0!3m2!1sfa!2sth!4v1757532879576!5m2!1sfa!2sth"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
          <div className="w-full md:w-[45%]">
            <Form
              ref={formRef}
              method="post"
              action="/contact"
              className="flex flex-col gap-4 p-4 font-montserrat"
            >
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  name
                </label>
                <input
                  required
                  className="w-full px-6 py-3 placeholder:text-[#495057] placeholder:capitalize border-1 border-[#ced4da] focus-within:outline-none focus-within:border-[#000000]"
                  placeholder="your name"
                  type="text"
                  id="contact-name"
                  name="name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  email
                </label>
                <input
                  required
                  className="w-full px-6 py-3 placeholder:text-[#495057] placeholder:capitalize border-1 border-[#ced4da] focus-within:outline-none focus-within:border-[#000000]"
                  placeholder="your email"
                  type="email"
                  id="contact-email"
                  name="email"
                />
              </div>
              <div>
                <label htmlFor="contact-subject" className="sr-only">
                  subject
                </label>
                <input
                  required
                  className="w-full px-6 py-3 placeholder:text-[#495057] placeholder:capitalize border-1 border-[#ced4da] focus-within:outline-none focus-within:border-[#000000]"
                  placeholder="subject"
                  type="text"
                  id="contact-subject"
                  name="subject"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  message
                </label>
                <textarea
                  minLength={20}
                  maxLength={500}
                  required
                  className="w-full px-6 py-3 resize-none min-h-[150px] placeholder:text-[#495057] placeholder:capitalize border-1 border-[#ced4da] focus-within:outline-none focus-within:border-[#000000]"
                  placeholder="message"
                  id="contact-message"
                  name="message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#DA9F5B] w-full py-4 cursor-pointer text-shadow-2xs disabled:cursor-default disabled:opacity-80 text-[#212529] h-full capitalize font-montserrat font-semibold focus-within:outline-none"
              >
                {isSubmitting ? "sending..." : "send message"}
              </button>
            </Form>
            <p
              className={`mt-4 h-[20px] capitalize text-center ${
                actionData?.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {actionData?.message}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
