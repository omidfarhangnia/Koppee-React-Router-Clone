import OverviewInfiniteSlider from "./OverviewInfiniteSlider";

export default function Overview() {
  return (
    <section className="section__mainStyle">
      <div className="flex flex-col items-center justify-center gap-[1rem]">
        <div className="flex flex-col items-center justify-center gap-[.3rem]">
          <span className="section__divider"></span>
          <h2 className="section__h2">testimonial</h2>
          <h3 className="section__h3">our clients say</h3>
        </div>
        <div className="max-w-[100vw] select-none">
          <OverviewInfiniteSlider />
        </div>
      </div>
    </section>
  );
}