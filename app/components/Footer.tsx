import { Form, Link } from "react-router";
import { FaXTwitter, FaMeta, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="@container">
            <div className="px-[15px] pt-[120px] pb-[20px] relative bg-[url(/bg.jpg)] bg-cover bg-[#887564] bg-blend-multiply flex justify-center items-center">
                <div className="absolute top-[-2px] left-0 w-full bg-repeat-x z-10 bg-[url(/overlay-top.png)] h-[20px]"></div>
                <div className="bg-[#43403ea6] absolute top-0 left-0 w-full h-full z-0"></div>
                <div className="relative z-10 max-w-[1350px]">
                    <div className="text-white flex flex-col @4xl:flex-row @4xl:justify-around gap-[40px] @4xl:gap-[20px]">
                        <section className="@4xl:w-[25%]">
                            <h3 className="uppercase mb-[1.5rem] text-[calc(1.275rem_+_.3vw)] font-semibold font-roboto tracking-[2px]">GET IN TOUCH</h3>
                            <address className="flex flex-col gap-[20px]">
                                <span className="flex items-center gap-[5px] font-montserrat not-italic font-medium"><FiMapPin size={18} /> 123 Street, New York, USA</span>
                                <a href="tel:+01234567890" className="flex items-center gap-[5px] font-montserrat not-italic font-medium"><BsFillTelephoneFill size={18} /> +012 345 67890</a>
                                <a href="mailto:info@example.com" className="flex items-center gap-[5px] font-montserrat not-italic font-medium"><MdOutlineMail size={18} /> info@example.com</a>
                            </address>
                        </section>
                        <section className="@4xl:w-[22%]">
                            <h3 className="uppercase mb-[1.5rem] text-[calc(1.275rem_+_.3vw)] font-semibold font-roboto tracking-[2px]">Follow Us</h3>
                            <p className="font-montserrat font-medium mb-[20px]">Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                            <nav>
                                <ul className="flex gap-[10px]">
                                    <li>
                                        <Link to="/" aria-label="Follow us on x" className="w-11 aspect-square flex items-center justify-center border-[.5px] transition-all hover:rounded-[10px]">
                                            <FaXTwitter size={28} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" aria-label="Follow us on meta" className="w-11 aspect-square flex items-center justify-center border-[.5px] transition-all hover:rounded-[10px]">
                                            <FaMeta size={28} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" aria-label="Follow us on linkedin" className="w-11 aspect-square flex items-center justify-center border-[.5px] transition-all hover:rounded-[10px]">
                                            <FaLinkedin size={28} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" aria-label="Follow us on instagram" className="w-11 aspect-square flex items-center justify-center border-[.5px] transition-all hover:rounded-[10px]">
                                            <FaInstagram size={28} />
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                        <section className="@4xl:w-[20%]">
                            <h3 className="uppercase mb-[1rem] text-[calc(1.275rem_+_.3vw)] font-semibold font-roboto tracking-[2px]">Open Hours</h3>
                            <dl className="font-montserrat">
                                <dt className="font-medium text-[18px] mb-[6px] mt-[10px]">Monday - Friday</dt>
                                <dd>8.00 AM - 8.00 PM</dd>
                                <dt className="font-medium text-[18px] mb-[6px] mt-[10px]">Saturday - Sunday</dt>
                                <dd>2.00 PM - 8.00 PM</dd>
                            </dl>
                        </section>
                        <section className="mt-[20px] @4xl:mt-0 @4xl:w-[30%]">
                            <h3 className="uppercase mb-[1rem] text-[calc(1.275rem_+_.3vw)] font-semibold font-roboto tracking-[2px]">Newsletter</h3>
                            <p className="font-montserrat font-medium mb-[20px]">Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                            <Form className="flex items-center h-14" method="post">
                                <input className="w-[70%] bg-[#ffffff] px-[20px] h-full text-[18px] text-black focus-within:outline-none placeholder-[#505050]" placeholder="Your Email" type="email" name="email" />
                                <input className="bg-[#DA9F5B] text-black w-[30%] text-[20px] h-full capitalize" type="submit" value="sign up" />
                            </Form>
                        </section>
                    </div>
                    <div className="text-white mt-[70px] flex flex-col font-semilight gap-[9px] text-center font-montserrat capitalize border-t-[1px] border-t-[#b7b7b7] py-[15px]">
                        <p>Copyright © <span className="text-[#DA9F5B] font-bold">Domain</span>. All Rights Reserved.</p>
                        <p>Designed by <span className="text-[#DA9F5B] font-bold">HTML Codex</span> Distributed by <span className="text-[#DA9F5B]">ThemeWagon</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}