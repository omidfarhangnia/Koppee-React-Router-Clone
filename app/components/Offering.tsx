import OfferingForm from "./Offering-form";

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
                <OfferingForm />
            </div>
        </section>
    )
}