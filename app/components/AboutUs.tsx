const visionItems = [
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
];

export default function AboutUs() {
  return (
    <section className="section__mainStyle">
      <div className="flex flex-col items-center justify-center gap-[1rem]">
        <div className="flex flex-col items-center justify-center gap-[.3rem]">
          <span className="section__divider"></span>
          <h2 className="section__h2">about us</h2>
          <h3 className="section__h3">Serving Since 1950</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem] md:gap-0">
          <div className="p-[20px] flex flex-col gap-[10px] md:gap-[1rem] items-start">
            <h4 className="font-semibold text-[calc(1.375rem_+_1.5vw)] font-roboto">
              Our Story
            </h4>
            <p className="text-[1.25rem] text-[#33211D] capitalize leading-[25px]">
              Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet
              sed vero dolor sea
            </p>
            <p className="font-montserrat text-justify text-[#555555]">
              Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
              nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet
              no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit
              ut. Labor diam sed ipsum et eirmod
            </p>
            <Button
              text="learn more"
              textColor="text-[#ffffff]"
              bgColor="bg-[#1B110F]"
              borderColor="border-[#984200]"
              hoverBorderColor="hover:border-[#0a0706]"
            />
          </div>
          <div className="h-[400px]">
            <img
              src="/about.webp"
              alt="Roasted coffee beans next to a cup of coffee"
              className="h-full object-contain w-full"
              height={400}
              width={400}
            />
          </div>
          <div className="p-[20px] flex flex-col gap-[10px] md:gap-[1rem] items-start">
            <h4 className="font-semibold text-[calc(1.375rem_+_1.5vw)] font-roboto">
              Our Vision
            </h4>
            <p className="font-montserrat text-justify text-[#555555]">
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <ul className="flex flex-col gap-[.8rem] list-none">
              {visionItems.map((vision, index) => {
                return (
                  <li
                    key={index}
                    className="text-[1.25rem] font-roboto marker:content-['✔'] marker:text-[#DA9F5B] pl-1 ml-3"
                  >
                    {vision}
                  </li>
                );
              })}
            </ul>
            <Button
              text="learn more"
              textColor="text-[#1B110F]"
              bgColor="bg-[#DA9F5B]"
              borderColor="border-[#DA9F5B]"
              hoverBorderColor="hover:border-[#984200]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Button({
  text = "learn more",
  textColor,
  bgColor,
  borderColor,
  hoverBorderColor,
}: {
  text: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  hoverBorderColor: string;
}) {
  const buttonClass = `
        cursor-pointer px-6 py-2 border-2 border-solid font-semibold 
        text-shadow-md mt-4 font-montserrat transition-all
        ${textColor} ${bgColor} ${borderColor} ${hoverBorderColor}
    `;

  return <button className={buttonClass.trim()}>{text}</button>;
}
