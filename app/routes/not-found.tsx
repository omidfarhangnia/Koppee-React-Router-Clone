import { Link } from "react-router";

export default function Page() {
    return (
        <div className="w-full h-[100svh] relative @container">
            <div className="w-[150%] h-[150%] bg-[url(/menu-1.jpg)] bg-cover fixed top-[-35%] right-[-30%] blur-[6px]" ></div>
            <div className="w-full h-full fixed top-0 left-0 bg-[#000000c2]"></div>
            <div className="w-full h-full top-0 left-0 fixed flex flex-col font-montserrat items-center justify-center">
                <h4 className="text-[clamp(24px,7vw,80px)] text-[#ffffff]">404</h4>
                <h1 className="text-[clamp(30px,7vw,60px)] text-[#ffffff] font-semibold @4xl:tracking-[2px] mb-[10px] text-center @4xl:mb-0 @4xl:mt-[-20px]">Page not found</h1>
                <p className="text-[clamp(16px,3vw,22px)] w-[75%] text-[#d5d5d5] text-center">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-[30px] flex flex-wrap items-center justify-center gap-[30px] text-[clamp(16px,3vw,24px)] @4xl:gap-[calc(30px_+_3vw)]">
                    <Link to="/" className="capitalize font-bold text-[#212529] bg-[#DA9F5B] px-[25px] py-[20px] rounded-[10px] hover:text-[#ffffff] transition-all">go back home</Link>
                    <Link to="/contact" className="capitalize font-bold bg-[#212529] text-[#DA9F5B] px-[25px] py-[20px] rounded-[10px] hover:text-[#ffffff] transition-all flex">contact support →</Link>
                </div>
            </div>
        </div>
    )
}