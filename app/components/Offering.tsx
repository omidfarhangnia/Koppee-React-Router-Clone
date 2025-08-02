import { Form } from "react-router";


export default function Offering() {

    return (
        <section className="py-[6rem] flex items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center relative">
            <div className="bg-[#37251e] opacity-90 absolute top-0 left-0 w-full h-full z-0"></div>
            <div className="absolute top-[-2px] left-0 w-full bg-repeat-x z-20 bg-[url(/overlay-top.png)] h-[20px]"></div>
            <div className="absolute bottom-[-6px] left-0 w-full bg-repeat-x z-20 bg-[url(/overlay-bottom.png)] h-[20px]"></div>
            <div className="z-20 text-center text-[#ffffff] font-roboto">
                <h2 className="text-[calc(1.575rem_+_3.9vw)] lg:text-[4.5rem] text-[#DA9F5B] font-bold">50% OFF</h2>
                <h3 className="mb-4 font-bold text-[calc(1.375rem_+_1.5vw)]">Sunday Special Offer</h3>
                <p className="mb-8 text-[calc(1.275rem_+_.3vw)]">Only for Sunday from 1st Jan to 30th Jan 2045</p>
                <Form className="flex items-center h-14" method="post">
                    <input className="w-[70%] bg-[#ffffff] px-[20px] h-full text-[#212529] focus-within:outline-none placeholder:text-[#505050] font-montserrat" placeholder="Your Email" type="email" name="email" />
                    <input className="bg-[#DA9F5B] text-[#212529] w-[30%] h-full capitalize font-montserrat font-semibold" type="submit" value="sign up" />
                </Form>
                <div className="bg-white">
                </div>
            </div>
        </section>
    )
}