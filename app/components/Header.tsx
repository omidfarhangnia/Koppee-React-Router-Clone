import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

const navLinks = [
  { href: "/", text: "home" },
  { href: "/about", text: "about" },
  { href: "/service", text: "service" },
  { href: "/menu", text: "menu" },
  {
    text: "pages",
    children: [
      { href: "/reservation", text: "reservation" },
      { href: "/testimonial", text: "testimonial" },
    ],
  },
  { href: "/contact", text: "contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropDownRef = useRef<HTMLLIElement>(null);
  const dropDownBtn = useRef<HTMLButtonElement>(null);

  const handleDropdownToggle = (text: string) => {
    setOpenDropdown(openDropdown === text ? null : text);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        // the first condition is for stop setIsMobileMenuOpen(false); in clicking burger menu
        // the second condition is for checking that dropDownBtn is not open because if its open we want to close dropdown not all menu
        if (!(event.target as HTMLElement)?.getAttribute("aria-label")?.includes("Toggle") && !(dropDownBtn.current?.getAttribute("aria-expanded") === "true")) {
          setIsMobileMenuOpen(false);
        }
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location])

  return (
    <header className="bg-[#33211D] lg:bg-transparent @container absolute top-0 left-0 w-full z-20">
      <div className="flex flex-wrap justify-between mx-auto items-center py-4 px-4 @4xl:px-[4rem] max-w-[1350px]">
        <h1 className="uppercase text-white text-[calc(1.475rem_+_2.7vw)] font-bold font-roboto">
          <Link to="/">koppee</Link>
        </h1>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col justify-center cursor-pointer items-center gap-[8px] @4xl:hidden w-[46px] h-[46px] rounded-[3px] border-solid border-[#ffffff30] hover:border-[#ffffffca] transition-colors border-[1px]"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span aria-label="Toggle--span" className="w-[70%] h-[2px] bg-[#ffffffca]"></span>
          <span aria-label="Toggle--span" className="w-[70%] h-[2px] bg-[#ffffffca]"></span>
          <span aria-label="Toggle--span" className="w-[70%] h-[2px] bg-[#ffffffca]"></span>
        </button>

        <nav className={`grid w-full transition-all duration-300 ease-in-out @4xl:w-auto @4xl:grid-rows-[1fr] ${isMobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <ul className="overflow-hidden @4xl:overflow-visible @6xl:text-[18px] flex flex-col gap-4 @4xl:py-0 @4xl:flex-row @4xl:items-center @4xl:gap-[2rem] tracking-[1px] font-montserrat capitalize font-semibold text-white">
            {navLinks.map((link, index) => {
              const isDropdown = !!link.children;
              const isDropdownActive = openDropdown === link.text;

              if (isDropdown) {
                return (
                  <li key={link.text} className="relative px-8 @4xl:px-0" ref={dropDownRef}>
                    <button
                      ref={dropDownBtn}
                      onClick={() => handleDropdownToggle(link.text)}
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={isDropdownActive}
                      className="capitalize border-none cursor-pointer w-full text-left focus-within:border-none"
                    >
                      {link.text}
                    </button>
                    <nav className={`grid transition-all @4xl:absolute @4xl:left-[.5rem] @4xl:top-[calc(100%_+_.3rem)] @6xl:left-[.8rem] @6xl:top-[calc(100%_+_.5rem)] @4xl:bg-[#5b4c45] duration-300 ease-in-out bg-[#33211D] @4xl:rounded-b-md @4xl:rounded-tr-md @4xl:shadow-lg ${isDropdownActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <ul className="overflow-hidden border-l-2 border-l-[#ffffff30] ml-2 flex flex-col gap-4 @4xl:border-none @4xl:w-40">
                        {link.children?.map((childLink, childIndex) => (
                          <li key={childLink.href}>
                            <Link
                              to={childLink.href}
                              className={`inline-block mx-[1rem] ${childLink.href === location.pathname ? "text-[#DA9F5B]" : ""} ${childIndex === 0 ? "mt-[1rem]" : ""} ${childIndex === link.children.length - 1 ? "mb-[1rem]" : ""}`}
                            >
                              {childLink.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </li>
                );
              }

              return (
                <li key={link.href} className="px-8 @4xl:px-0">
                  <Link
                    to={link.href as string}
                    className={`inline-block w-full ${link.href === location.pathname ? "text-[#DA9F5B]" : ""} ${index === 0 ? "mt-[2rem] @4xl:mt-0" : ""} ${index === navLinks.length - 1 ? "mb-[2rem] @4xl:mb-0" : ""}`}
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}