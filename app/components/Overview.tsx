import React, { useState, useRef, useEffect } from "react";

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
    imgUrl: "./testimonial-1.jpg",
    message:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
  },
  {
    id: 1,
    name: "client name",
    profession: "profession",
    imgUrl: "./testimonial-2.jpg",
    message:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
  },
  {
    id: 2,
    name: "client name",
    profession: "profession",
    imgUrl: "./testimonial-3.jpg",
    message:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
  },
  {
    id: 3,
    name: "client name",
    profession: "profession",
    imgUrl: "./testimonial-4.jpg",
    message:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
  },
];

interface JumbStatus {
  isGoingToJump: boolean;
  jumpSide: "left" | "right" | "";
}

interface MouseLocation {
  down: { clientX: number | undefined };
  up: { clientX: number | undefined };
}

const initialMouseLocation: MouseLocation = {
  down: { clientX: undefined },
  up: { clientX: undefined },
};

function OverviewInfiniteSlider() {
  const [currentCard, setCurrentCard] = useState(cards.length);
  const isMovingRef = useRef(false);
  // now its [...cards, ...cards, ...cards]
  const cardsContainer = cards.concat(cards, cards);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const mouseLocationRef = useRef(initialMouseLocation);

  useEffect(() => {
    const isNotTouchDevice = navigator.maxTouchPoints === 0;
    setIsTouchDevice(!isNotTouchDevice);
  }, [navigator.maxTouchPoints]);

  function handleMoveWithTouch(e: React.PointerEvent) {
    // stop multiplay moves
    if (isMovingRef.current) return;
    isMovingRef.current = true;

    // move left
    if (e.movementX > 0) {
      moveLeft();
    }
    // go right
    else if (e.movementX < 0) {
      moveRight();
    }
  }

  function handleMoveWithoutTouch(
    e: React.PointerEvent,
    status: "down" | "up"
  ) {
    if (status === "down") {
      // we just clicked and now the mouse is moving
      mouseLocationRef.current.down.clientX = e.clientX;
    } else {
      // now the moving is ended and we should see animation
      mouseLocationRef.current.up.clientX = e.clientX;

      const downClientX = mouseLocationRef.current.down.clientX;
      const upClientX = mouseLocationRef.current.up.clientX;

      // just for sure
      if (downClientX === undefined || upClientX === undefined) return;

      console.log(isMovingRef.current);
      // stop multiplay moves
      if (isMovingRef.current) return;
      isMovingRef.current = true;

      if (downClientX > upClientX) {
        // move right
        moveRight();
      } else if (downClientX < upClientX) {
        // move left
        moveLeft();
      }

      // clearing location object
      mouseLocationRef.current.down.clientX = undefined;
      mouseLocationRef.current.up.clientX = undefined;
    }
  }

  function moveRight() {
    const jumpStatus: JumbStatus = {
      isGoingToJump: false,
      jumpSide: "",
    };

    setCurrentCard((x) => x + 1);

    // [...cards , ...cards, (we are here and we are going to right), ...cards]
    //  [...cards, (after ending animation we jump here), ...cards, ...cards]
    if (currentCard === cards.length * 2 - 1) {
      jumpStatus.isGoingToJump = true;
      jumpStatus.jumpSide = "right";
    }

    jump(jumpStatus);
  }

  function moveLeft() {
    const jumpStatus: JumbStatus = {
      isGoingToJump: false,
      jumpSide: "",
    };

    setCurrentCard((x) => x - 1);

    // [...cards, (we are here and we are going to left) , ...cards, ...cards]
    //  [...cards, ...cards, (after ending animation we jump here), ...cards]
    if (currentCard === cards.length) {
      jumpStatus.isGoingToJump = true;
      jumpStatus.jumpSide = "left";
    }

    jump(jumpStatus);
  }

  function jump(jumpStatus: JumbStatus) {
    setTimeout(() => {
      if (jumpStatus.isGoingToJump) {
        if (jumpStatus.jumpSide === "left") {
          setCurrentCard((x) => x + cards.length);
        } else if (jumpStatus.jumpSide === "right") {
          setCurrentCard((x) => x - cards.length);
        }
      }

      isMovingRef.current = false;
    }, 600);
  }

  return (
    <div
      onPointerMove={(e) => {
        if (isTouchDevice) handleMoveWithTouch(e);
      }}
      onPointerDown={(e) => {
        if (!isTouchDevice) {
          handleMoveWithoutTouch(e, "down");
        }
      }}
      onPointerUp={(e) => {
        if (!isTouchDevice) {
          handleMoveWithoutTouch(e, "up");
        }
      }}
      onPointerLeave={(e) => {
        if (
          !isTouchDevice &&
          mouseLocationRef.current.down.clientX !== undefined
        ) {
          handleMoveWithoutTouch(e, "up");
        }
      }}
      className="overflow-hidden cursor-grab active:cursor-grabbing"
    >
      <div
        className={`flex flex-row w-full flex-nowrap ${
          isMovingRef.current && "duration-[.5s] transition-all"
        }`}
        style={{ transform: `translateX(-${currentCard * 100}%)` }}
      >
        {cardsContainer.map((card, index) => {
          return (
            <div
              key={index}
              className={`shrink-0 w-[100%] flex items-center justify-center select-none`}
            >
              <div className="w-full md:w-[60%] max-w-[500px] flex flex-col gap-4 px-6 py-4">
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      src={card.imgUrl}
                      alt={`the image of ${card.name}`}
                      className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[calc(1.275rem_+_.3vw)] md:text-[2rem] capitalize text-[#33211D] font-roboto">
                      {card.name}
                    </h4>
                    <h5 className="italic text-[#555555] md:text-[1.3rem] font-montserrat capitalize text-shadow-2xs">
                      {card.profession}
                    </h5>
                  </div>
                </div>
                <p className="font-montserrat md:text-[1.2rem] text-[#555555] text-shadow-2xs">
                  {card.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-[10px] mt-4 md:mt-8">
        {cards.map((_, index) => {
          const isSelected = currentCard % 4 === index;
          return (
            <span
              onPointerDown={(e) => {
                // we dont want to run onPointerDown or onPointerUp
                e.stopPropagation();
                setCurrentCard(index + 4);

                // for stoping unpredictable bug
                setTimeout(() => {
                  isMovingRef.current = false;
                }, 600);
              }}
              key={index}
              className={`transition-all h-[20px] md:h-[30px] cursor-pointer ${
                isSelected
                  ? "bg-[#33211D] w-[30px] md:w-[60px]"
                  : "bg-[#DA9F5B] w-[20px] md:w-[30px]"
              } inline-block rounded-full`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
