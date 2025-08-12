import { useEffect, useRef, useState } from "react";
import { Form, useActionData, useNavigation } from "react-router";

const visionItems = [
  {
    id: "v1",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    id: "v2",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    id: "v3",
    text: "Lorem ipsum dolor sit amet",
  },
];

const operatingHours = {
  openingTime: 8, // 8:00
  closingTime: 18, // 18:00
  isInOperatingHours: function (hour: string) {
    const currentHour = Number(hour);
    return (
      currentHour >= this.openingTime && currentHour < this.closingTime - 1
    );
  },
};

function getYearMonthDay(date: Date) {
  return {
    year: date.getFullYear(),
    month: (date.getMonth() + 1).toString().padStart(2, "0"),
    day: date.getDate().toString().padStart(2, "0"),
  };
}

export default function Booking({
  isReservationPage,
}: {
  isReservationPage: boolean;
}) {
  const [currentDate, setCurrentDate] = useState("");
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

  useEffect(() => {
    const today = new Date();

    const {
      year: todayYear,
      month: todayMonth,
      day: todayDay,
    } = getYearMonthDay(today);
    setCurrentDate(`${todayYear}-${todayMonth}-${todayDay}T`);

    const time = today.toTimeString().split(" ")[0];
    const hour = time.slice(0, 2);
    const minute = time.slice(3, 5);

    if (operatingHours.isInOperatingHours(hour)) {
      if (Number(minute) <= 30) {
        setCurrentDate(`${todayYear}-${todayMonth}-${todayDay}T${hour}:45`);
      } else {
        setCurrentDate(
          `${todayYear}-${todayMonth}-${todayDay}T${Number(hour) + 1}:15`
        );
      }
    } else {
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);

      const {
        year: tomorrowYear,
        month: tomorrowMonth,
        day: tomorrowDay,
      } = getYearMonthDay(tomorrow);
      setCurrentDate(`${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}T08:00`);
    }
  }, []);

  return (
    <section className="section__mainStyle p-0 bg-[url('/bg.jpg')] [&>div]:max-w-full bg-cover bg-center relative">
      <div className="bg-[#37251e] opacity-90 absolute top-0 left-0 w-full h-full z-0"></div>
      {!isReservationPage && (
        <>
          <div className="absolute top-[-2px] left-0 w-full bg-repeat-x z-20 bg-[url(/overlay-top.png)] h-[20px]"></div>
          <div className="absolute bottom-[-6px] left-0 w-full bg-repeat-x z-20 bg-[url(/overlay-bottom.png)] h-[20px]"></div>
        </>
      )}
      <div className="z-10 text-[#ffffff] grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <div className="py-24 px-8 md:max-w-[750px]">
          <h2 className="text-[calc(1.575rem_+_3.9vw)] lg:text-[4.5rem] text-[#DA9F5B] font-bold font-roboto">
            30% OFF
          </h2>
          <h3 className="mb-4 font-bold text-[calc(1.375rem_+_1.5vw)]">
            For Online Reservation
          </h3>
          <p className="mb-8 font-montserrat text-[#ededed] font-light md:text-[20px]">
            Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut
            sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam.
            Ea et erat ut sed diam sea
          </p>
          <ul className="flex flex-col gap-[.8rem] list-none">
            {visionItems.map((visionItem) => {
              return (
                <li
                  key={visionItem.id}
                  className="text-[1.25rem] md:text-[1.5rem] font-roboto marker:content-['✔'] marker:text-[#DA9F5B] pl-3 ml-3"
                >
                  {visionItem.text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="py-24 px-8 bg-[#33211dcc]">
          <h3 className="mb-4 font-bold text-[calc(1.375rem_+_1.5vw)] capitalize text-center">
            Book Your Table
          </h3>
          <Form
            ref={formRef}
            action={isReservationPage ? "/reservation" : "/?index"}
            method="post"
            className="flex flex-col gap-4 md:gap-8 py-2"
          >
            {!isReservationPage && (
              <input type="hidden" value={"booking"} name="actionType" />
            )}
            <div>
              <label htmlFor="booking-name" className="sr-only">
                name
              </label>
              <input
                required
                className="px-6 py-3 border-[#DA9F5B] border-solid placeholder:text-[#7e7e7e] text-[18px] md:text-[20px] lg:text-[24px] placeholder:capitalize focus-within:outline-none focus-within:shadow-[0px_0px_1px_2px_#c27215] transition-all border-1 w-full"
                type="text"
                name="name"
                id="booking-name"
                placeholder="name"
              />
            </div>
            <div>
              <label htmlFor="booking-email" className="sr-only">
                email
              </label>
              <input
                required
                className="px-6 py-3 border-[#DA9F5B] border-solid placeholder:text-[#7e7e7e] text-[18px] md:text-[20px] lg:text-[24px] placeholder:capitalize focus-within:outline-none focus-within:shadow-[0px_0px_1px_2px_#c27215] transition-all border-1 w-full"
                type="email"
                name="email"
                id="booking-email"
                placeholder="email"
              />
            </div>
            <div>
              <label htmlFor="booking-date" className="sr-only">
                date
              </label>
              <input
                required
                min={currentDate}
                defaultValue={currentDate}
                className="px-6 py-3 border-[#DA9F5B] border-solid placeholder:text-[#7e7e7e] text-[18px] md:text-[20px] lg:text-[24px] placeholder:capitalize focus-within:outline-none focus-within:shadow-[0px_0px_1px_2px_#c27215] transition-all border-1 w-full"
                type="datetime-local"
                name="date"
                id="booking-date"
                placeholder="date"
              />
            </div>
            <div>
              <label htmlFor="booking-people" className="sr-only">
                number of people
              </label>
              <input
                required
                className="px-6 py-3 border-[#DA9F5B] border-solid placeholder:text-[#7e7e7e] text-[18px] md:text-[20px] lg:text-[24px] placeholder:capitalize focus-within:outline-none focus-within:shadow-[0px_0px_1px_2px_#c27215] transition-all border-1 w-full"
                type="number"
                name="people"
                id="booking-people"
                placeholder="Number of People"
                min={1}
                max={50}
              />
            </div>
            <button
              disabled={isSubmitting}
              className="px-6 py-3 bg-[#DA9F5B] hover:bg-[#b58550] transition-all text-[#212529] disabled:hover:bg-[#DA9F5B] cursor-pointer disabled:cursor-default disabled:opacity-60 capitalize font-semibold font-montserrat text-[18px] md:text-[22px] lg:text-[24px] w-full focus-within:outline-none"
              type="submit"
            >
              {isSubmitting ? "submitting" : "book now"}
            </button>
          </Form>
          <p
            className={`mt-4 h-[20px] capitalize text-center ${
              actionData?.success ? "text-green-300" : "text-red-400"
            }`}
          >
            {actionData?.message}
          </p>
        </div>
      </div>
    </section>
  );
}

type BookingDividerType =
  | {
      type: "image";
      url: string;
      alt: string;
    }
  | {
      type: "colorBox";
      color: string;
    };

interface BookingDividerImageType {
  side: "top" | "bottom";
  boxes: BookingDividerType[];
}

const BookingDividerImage: BookingDividerImageType[] = [
  // top divider
  {
    side: "top",
    boxes: [
      { type: "image", url: "./menu-1.jpg", alt: "menu image 1" },
      { type: "colorBox", color: "bg-[#583b27]" },
      { type: "colorBox", color: "bg-[#150a05]" },
      { type: "image", url: "./carousel-1.jpg", alt: "carousel image 1" },
      { type: "image", url: "./service-2.jpg", alt: "service image 2" },
      { type: "colorBox", color: "bg-[#7b5e2f]" },
    ],
  },
  // top divider
  {
    side: "bottom",
    boxes: [
      { type: "image", url: "./menu-2.jpg", alt: "menu image 2" },
      { type: "colorBox", color: "bg-[#5a3219]" },
      { type: "colorBox", color: "bg-[#1d130e]" },
      { type: "image", url: "./carousel-2.jpg", alt: "carousel image 2" },
      { type: "image", url: "./service-1.jpg", alt: "service image 1" },
      { type: "colorBox", color: "bg-[#423333]" },
    ],
  },
];

export function BookingDivider({ side }: { side: "top" | "bottom" }) {
  const dividerData = BookingDividerImage.find(
    (divider) => divider.side === side
  );

  if (!dividerData) {
    console.log("divider not found");
    return null;
  }

  return (
    <div className={`${side === "top" ? "pt-20" : "pb-20"} bg-[#FFFBF2]`}>
      <div className="relative">
        <div className="bg-[#00000078] w-full h-full absolute top-0 left-0"></div>
        <div className="flex flex-wrap">
          {dividerData.boxes.map((box, index) => {
            if (box.type === "image") {
              return (
                <div key={index} className="w-[50%] h-[200px]">
                  <img
                    src={box.url}
                    alt={box.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            } else {
              return <div key={index} className={`${box.color} w-[50%]`}></div>;
            }
          })}
        </div>
      </div>
    </div>
  );
}
