import { useEffect, useState } from "react";

interface Drink {
    name: string;
    description: string;
    // price unit is dollar
    price: number;
    id: string;
    image: string;
    imageAlt: string;
}

interface DrinksGroup {
    groupName: string;
    drinks: Drink[]
}

const initialDrinks: DrinksGroup[] = [
    {
        groupName: "Hot Coffee",
        drinks: [
            {
                id: "0",
                name: "Black Coffee",
                description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
                image: "/menu-1.webp",
                imageAlt: "a cup of Black Coffee on the table",
                price: 5
            },
            {
                id: "1",
                name: "Chocolate Coffee",
                description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
                image: "/menu-2.webp",
                imageAlt: "a cup of Chocolate Coffee on the table",
                price: 7
            },
            {
                id: "2",
                name: "Coffee With Milk",
                description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
                image: "/menu-3.webp",
                imageAlt: "a cup of Coffee With Milk on the table",
                price: 9
            }
        ]
    },
    {
        groupName: "Cold Coffee",
        drinks: [
            {
                id: "3",
                name: "Black Coffee",
                description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
                image: "/menu-1.webp",
                imageAlt: "a cup of Black Coffee on the table",
                price: 5
            },
            {
                id: "4",
                name: "Chocolate Coffee",
                description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
                image: "/menu-2.webp",
                imageAlt: "a cup of Chocolate Coffee on the table",
                price: 7
            },
            {
                id: "5",
                name: "Coffee With Milk",
                description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
                image: "/menu-3.webp",
                imageAlt: "a cup of Coffee With Milk on the table",
                price: 9
            }
        ]
    }
]

export default function MenuAndPricing() {
    const [drinks, setDrinks] = useState<DrinksGroup[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fakeApiCall = setTimeout(() => {
            setDrinks(initialDrinks);
            setLoading(false);
        }, 2000);

        return () => clearTimeout(fakeApiCall)
    }, [])

    return (
        <section className="section__mainStyle">
            <div className="flex flex-col items-center justify-center gap-[1rem]">
                <div className="flex flex-col items-center justify-center gap-[.3rem]">
                    <span className="section__divider"></span>
                    <h2 className="section__h2">menu & pricing</h2>
                    <h3 className="section__h3">Competitive Pricing</h3>
                </div>
                <div className="flex flex-wrap gap-16 justify-evenly items-start w-full">
                    {loading ?
                        <>
                            {Array.from({ length: 2 }).map((_, index) => <DrinkSkeleton key={index} />)}
                        </> :
                        <>
                            {drinks.map((group) => (
                                <DrinksGroup group={group} key={group.groupName} />
                            ))}
                        </>}
                </div>
            </div>
        </section>
    )
}


function DrinksGroup({ group }: { group: DrinksGroup }) {
    return (
        <div className="w-full lg:w-5/12 px-4">
            <h3 className="mt-4 font-semibold text-[calc(1.375rem_+_1.5vw)] md:text-[2.5rem] font-roboto text-[#33211D] mb-12 w-[90%] mx-auto">{group.groupName}</h3>
            <div className="flex flex-col gap-12">
                {group.drinks.map((drink) => (
                    <Drink drink={drink} key={drink.id} />
                ))}
            </div>
        </div>
    )
}

function Drink({ drink }: { drink: Drink }) {
    return (
        <div className="flex items-center justify-center gap-8">
            <div className="relative w-1/4 min-w-[90px] max-w-[110px] aspect-square">
                <img src={drink.image} className="rounded-full" alt={drink.imageAlt} />
                <span className="absolute w-[40px] md:w-[45px] aspect-square rounded-full text-center text-[1.1rem] md:text-[1.25rem] font-roboto content-center bg-[#DA9F5B] text-[#33211D] right-[-5px] top-[-5px]">${drink.price}</span>
            </div>
            <div>
                <h4 className="text-[#33211D] font-roboto mb-2 text-[calc(1.275rem_+_.3vw)] font-semibold md:text-[1.5rem]">{drink.name}</h4>
                <p className="text-[#555555] font-montserrat leading-[1.5rem] md:text-[1.4rem]">{drink.description}</p>
            </div>
        </div>
    )
}

function DrinkSkeleton() {
    return (
        <div className="w-full lg:w-5/12 px-4">
            <h3 className="mt-4 h-[50px] bg-[#68453d] animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite] w-[30vw] max-w-[300px] mb-12"></h3>
            <div className="flex flex-col gap-12">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="flex items-center gap-12 lg:w-[40vw] bg-[#7e4c4176] p-8 w-[90vw] lg:max-w-[500px] animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                        <div className="w-[20%] aspect-square bg-[#7e4c41]"></div>
                        <div className="w-[70%] h-full">
                            <div className="w-[30%] h-[40px] md:h-[50px] mb-[2rem] bg-[#7e4c41]"></div>
                            <div className="flex flex-wrap gap-4">
                                <div className="w-[30%] h-[16px] bg-[#7e4c41]"></div>
                                <div className="w-[20%] h-[16px] bg-[#7e4c41]"></div>
                                <div className="w-[10%] h-[16px] bg-[#7e4c41]"></div>
                                <div className="w-[40%] h-[16px] bg-[#7e4c41]"></div>
                                <div className="w-[20%] h-[16px] bg-[#7e4c41]"></div>
                                <div className="w-[55%] h-[16px] bg-[#7e4c41]"></div>
                                <div className="w-[20%] h-[16px] bg-[#7e4c41]"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}