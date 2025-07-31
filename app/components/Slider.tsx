import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

interface Slides {
  header: {
    part1: string,
    part2: string,
    part3: string
  }
  imgUrl: string,
  id: number
}

const testSlides: Slides[] = [
  { id: 0, imgUrl: "/carousel-1.jpg", header: { part1: "we have been serving", part2: "coffee", part3: "since 1950" } },
  { id: 1, imgUrl: "/carousel-2.jpg", header: { part1: "we have been serving", part2: "coffee", part3: "since 1950" } },
  { id: 2, imgUrl: "/carousel-1.jpg", header: { part1: "we have been serving", part2: "coffee", part3: "since 1950" } },
  { id: 3, imgUrl: "/carousel-2.jpg", header: { part1: "we have been serving", part2: "coffee", part3: "since 1950" } },
]

export default function Slider() {
  const [slides, setSlides] = useState<Slides[]>([]);
  const [loading, setLoading] = useState(true);
  // now i will pause slider when my mouse is in section area
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // for just testing my loader 
    const fakeApiCall = setTimeout(() => {
      setSlides(testSlides)
      setLoading(false)
    }, 2000);

    return () => clearTimeout(fakeApiCall)
  }, [])

  const handleNext = () => {
    setCurrentIndex((i) => (i + 1) % slides.length)
  }

  const handlePrev = () => {
    setCurrentIndex((i) => (i - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(handleNext, 8000);
      return () => clearTimeout(timer)
    }
  }, [currentIndex, isPaused])

  if (loading) {
    return (
      <section className="bg-linear-to-br pt-[5vh] to-[#541C0B] from-[#64392D] relative w-full h-[80vh] md:h-[90vh] max-h-[800px]">
        <div className="w-full h-full flex gap-[5%] flex-col items-center justify-center">
          <div className="w-[40%] h-[5%] rounded-full bg-[#fffffff5] animate-pulse"></div>
          <div className="w-[50%] h-[20%] rounded-full bg-[#fffffff5] animate-pulse"></div>
          <div className="w-[40%] h-[2%] rounded-full bg-[#fffffff5] animate-pulse"></div>
        </div>
        <button className="w-[10%] max-w-[50px] aspect-square rounded-[15px] bg-[#fffffff5] absolute right-[5%] top-[calc(50%_+_20px)] animate-pulse"></button>
        <button className="w-[10%] max-w-[50px] aspect-square rounded-[15px] bg-[#fffffff5] absolute left-[5%] top-[calc(50%_+_20px)] animate-pulse"></button>
        <div className="w-[30%] h-[20px] rounded-[15px] bg-[#fffffff5] absolute left-[35%] bottom-[5%] animate-pulse"></div>
      </section>
    )
  }

  return (
    <section
      className="h-[80vh] md:h-[90vh] @container relative overflow-hidden focus:outline-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => { setIsPaused(false) }}
    >
      <div className="transition-all duration-[.75s] flex w-full h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => {
          return (
            <div key={index}
              style={{ backgroundImage: `url(${slide.imgUrl})`, backgroundColor: "#69250ec4", backgroundBlendMode: "exclusion" }}
              className={`w-full flex flex-shrink-0 flex-col items-center justify-center bg-cover bg-center pt-[100px] md:pt-[10vh]`}>
              <span className="text-[#DA9F5B] font-medium text-[calc(1rem_+_1vw)] capitalize font-roboto md:text-[2rem]">
                {slide.header.part1}
              </span>
              <span className="font-roboto text-[calc(1.5rem_+_8.5vw)] uppercase text-[#ffffff] font-bold md:text-[8rem]">
                {slide.header.part2}
              </span>
              <span className="font-roboto text-[calc(1rem_+_1vw)] uppercase text-[#ffffff] font-bold md:text-[2rem]">
                * {slide.header.part3} *
              </span>
            </div>
          )
        })}
      </div>
      <button className="absolute right-[10px] focus-within:outline-none md:right-[60px] top-[55%] md:top-[52%] bg-[rgba(255,255,255,0.6)] hover:bg-[#ffffff] transition-all p-[10px] md:p-[15px] rounded-full" aria-label="next slide" onClick={handleNext}>
        <FaAngleRight size={20} />
      </button>
      <button className="absolute left-[10px] focus-within:outline-none md:left-[60px] top-[55%] md:top-[52%] bg-[rgba(255,255,255,0.6)] hover:bg-[#ffffff] transition-all p-[10px] md:p-[15px] rounded-full" aria-label="prev slide" onClick={handlePrev}>
        <FaAngleLeft size={20} />
      </button>
      <div className="absolute bottom-[30px] md:bottom-[50px] flex justify-center items-center w-full text-white font-roboto text-[18px] md:text-[20px]">
        <div className="flex justify-center items-center gap-[10px] px-[30px] py-[5px] rounded-full bg-[rgba(255,255,255,0.3)]">
          <span>{currentIndex + 1}</span>
          <span className="text-[#eabf8d]">/</span>
          <span>{slides.length}</span>
        </div>
      </div>
      <div className="absolute bottom-[-6px] left-0 w-full bg-repeat-x z-20 bg-[url(/overlay-bottom.png)] h-[20px]"></div>
    </section >
  )
}