"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Card {
  name: string;
  profession: string;
  imgUrl: string;
  id: number;
  message: string;
}

const cards: Card[] = [
  {
    id: 0,
    name: "client name",
    profession: "profession",
    imgUrl: "./testimonial-1.webp",
    message:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
  },
  {
    id: 1,
    name: "client name",
    profession: "profession",
    imgUrl: "./testimonial-2.webp",
    message:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
  },
  {
    id: 2,
    name: "client name",
    profession: "profession",
    imgUrl: "./testimonial-3.webp",
    message:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
  },
  {
    id: 3,
    name: "client name",
    profession: "profession",
    imgUrl: "./testimonial-4.webp",
    message:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
  },
  {
    id: 4,
    name: "client name",
    profession: "profession",
    imgUrl: "./testimonial-1.webp",
    message:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
  },
  {
    id: 5,
    name: "client name",
    profession: "profession",
    imgUrl: "./testimonial-2.webp",
    message:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
  },
  {
    id: 6,
    name: "client name",
    profession: "profession",
    imgUrl: "./testimonial-3.webp",
    message:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
  },
  {
    id: 7,
    name: "client name",
    profession: "profession",
    imgUrl: "./testimonial-4.webp",
    message:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
  },
];

const OverviewInfiniteSlider = () => {
  return (
    <div className="max-w-[100vw] select-none">
      <div className="w-[80vw] max-w-[1200px]">
        <Swiper
          loop={true}
          speed={1000}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1124: {
              slidesPerView: 2.1,
              spaceBetween: 50,
            },
          }}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[Pagination, Keyboard]}
          a11y={{
            enabled: true,
            prevSlideMessage: "previous slide",
            nextSlideMessage: "next slide",
            paginationBulletMessage: "going to {{index}} slide",
            slideLabelMessage: "slide number {{index}} of {{slidesLength}}",
            containerMessage: "overview slider",
          }}
        >
          {cards.map((card) => {
            return (
              <SwiperSlide key={card.id}>
                <div
                  className={`w-[100%] flex items-center justify-center select-none`}
                >
                  <div className="w-full max-w-[500px] flex flex-col gap-4 px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <img
                          src={card.imgUrl}
                          alt={`the image of ${card.name}`}
                          className="w-[80px] aspect-square md:w-[100px]"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[calc(1.275rem_+_.3vw)] md:text-[1.5rem] lg:text-[2rem] capitalize text-[#33211D] font-roboto">
                          {card.name}
                        </h4>
                        <h5 className="text-[#555555] md:text-[1rem] lg:text-[1.3rem] font-montserrat capitalize text-shadow-2xs">
                          {card.profession}
                        </h5>
                      </div>
                    </div>
                    <p className="font-montserrat md:text-[1.2rem] text-[#555555] text-shadow-2xs">
                      {card.message}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default OverviewInfiniteSlider;
