import { FaTruck, FaCoffee, FaTable } from "react-icons/fa";
import { RiMedalLine } from "react-icons/ri";
import { useEffect, useState, type ReactElement } from "react"

interface Service {
    header: string;
    parg: string;
    logo: ReactElement;
    img: string;
    imgAlt: string;
    id: number
}

const initialServices: Service[] = [
    {
        header: "Fastest Door Delivery",
        parg: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
        logo: <FaTruck size={24} />,
        img: "/service-1.webp",
        imgAlt: "someone is Pouring coffee in a big cup",
        id: 0
    },
    {
        header: "Fresh Coffee Beans",
        parg: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
        logo: <FaCoffee size={24} />,
        img: "/service-2.webp",
        imgAlt: "coffee beans every where",
        id: 1
    },
    {
        header: "Best Quality Coffee",
        parg: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
        logo: <RiMedalLine size={24} />,
        img: "/service-3.webp",
        imgAlt: "Making a latte",
        id: 2
    },
    {
        header: "Online Table Booking",
        parg: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
        logo: <FaTable size={24} />,
        img: "/service-4.webp",
        imgAlt: "a small table in a cafe",
        id: 3
    }
]

export default function Services() {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fakeApiCall = setTimeout(() => {
            setServices(initialServices);
            setLoading(false);
        }, 2000);

        return () => clearTimeout(fakeApiCall)
    }, [])

    if (loading) {
        return <ServicesSkeleton />
    }

    return (
        <section className="section__mainStyle">
            <div className="flex flex-col items-center justify-center gap-[1rem]">
                <div className="flex flex-col items-center justify-center gap-[.3rem]">
                    <span className="section__divider"></span>
                    <h2 className="section__h2">our services</h2>
                    <h3 className="section__h3">Fresh & Organic Beans</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-6">
                    {services.map((service) => <ServiceCard service={service} key={service.id}/>)}
                </div>
            </div>
        </section>
    )
}

function ServiceCard({ service }: { service: Service }) {
    return (
        <div className="flex flex-col items-center gap-5">
            <div className="overflow-hidden rounded-[10px] border-2 border-[#da9f5b]"><img src={service.img} alt={service.imgAlt} /></div>
            <div className="flex items-center justify-start gap-4 w-[80%] max-w-[400px]">
                <span className="w-12 rounded-full flex items-center justify-center aspect-square text-[#33211D] bg-[#da9f5bd8]">{service.logo}</span>
                <h4 className="text-[calc(1.275rem_+_.3vw)] font-roboto font-semibold md:text-[1.5rem] text-[#33211D]">{service.header}</h4>
            </div>
            <p className="font-montserrat leading-6 text-[#555555] w-[80%] max-w-[400px]">{service.parg}</p>
        </div>
    )
}

function ServicesSkeleton() {
    return (
        <section className="section__mainStyle">
            <div className="flex flex-col items-center justify-center gap-[1rem]">
                <div className="flex flex-col items-center justify-center gap-[.3rem]">
                    <span className="section__divider"></span>
                    <h2 className="section__h2">our services</h2>
                    <h3 className="section__h3">Fresh & Organic Beans</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-6">
                    <div className="w-[250px] md:w-[300px] lg:w-[400px] aspect-square  bg-[#64392D] rounded-[15px] animate-[pulse_5s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
                    <div className="w-[250px] md:w-[300px] lg:w-[400px] aspect-square  bg-[#64392D] rounded-[15px] animate-[pulse_5s_.5s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
                    <div className="w-[250px] md:w-[300px] lg:w-[400px] aspect-square  bg-[#64392D] rounded-[15px] animate-[pulse_5s_1s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
                    <div className="w-[250px] md:w-[300px] lg:w-[400px] aspect-square  bg-[#64392D] rounded-[15px] animate-[pulse_5s_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
                </div>
            </div>
        </section>
    )
}