import { Link, useLocation, useMatches } from "react-router";

export default function Breadcrumbs() {
    const matches = useMatches();
    const crumbs = matches.filter((match) => Boolean((match.handle as { breadcrumb?: string | undefined })?.breadcrumb));
    const location = useLocation();

    return (
        <section className="@container">
            <div className="px-[15px] pt-[120px] pb-[20px] relative bg-[url(/bg.webp)] bg-cover flex justify-center items-center">
                <div className="absolute bottom-[-6px] left-0 w-full bg-repeat-x z-10 bg-[url(/overlay-bottom.webp)] h-[20px]"></div>
                <div className="bg-[rgb(55,37,30,.9)] absolute top-0 left-0 w-full h-full z-0"></div>
                <div className="text-white z-10 py-[calc(3rem_+_55px)]">
                    <h2 className="uppercase font-roboto text-[calc(1.475rem_+_2.7vw)] @6xl:text-[calc(1.475rem_+_2.7vw)] font-semibold">{(crumbs[crumbs.length - 1].handle as { breadcrumb: string })?.breadcrumb}</h2>
                    <nav aria-label="Breadcrumb">
                        <ol className="flex items-center justify-center gap-[10px] capitalize font-montserrat font-light  @6xl:text-[20px] select-none">
                            {crumbs.map((crumb, index) => {
                                const isCurrentPage = location.pathname === crumb.pathname;

                                return (
                                    <li key={crumb.pathname}>
                                        {isCurrentPage ? (
                                            <span aria-current={isCurrentPage ? "page" : undefined}
                                                className={isCurrentPage ? "border-b-2 border-b-[#DA9F5B]" : ""}>
                                                {(crumb.handle as { breadcrumb?: string }).breadcrumb}
                                            </span>
                                        ) : (
                                            <Link aria-current={isCurrentPage ? "page" : undefined}
                                                to={crumb.pathname} className={isCurrentPage ? "border-b-2 border-b-[#DA9F5B]" : ""}>
                                                {(crumb.handle as { breadcrumb?: string }).breadcrumb}
                                            </Link>
                                        )}
                                        {index !== crumbs.length - 1 && <span aria-hidden="true" className="ml-[10px]">/</span>}
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
    )
}