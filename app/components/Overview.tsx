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
        <div className="max-w-[100vw]">
          <OverviewInfiniteSlider />
        </div>
      </div>
    </section>
  );
}

const cards = [
  { name: "one", style: "bg-green-300" },
  { name: "two", style: "bg-red-300" },
  { name: "three", style: "bg-blue-300" },
  { name: "four", style: "bg-pink-300" },
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
    }, 750);
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
      className="bg-blue-500 overflow-hidden cursor-grab active:cursor-grabbing select-none"
    >
      <div
        className={`flex flex-row w-full flex-nowrap ${
          isMovingRef.current && "duration-[.75s] transition-all"
        }`}
        style={{ transform: `translateX(-${currentCard * 100}%)` }}
      >
        {cardsContainer.map((card, index) => {
          return (
            <div
              key={index}
              className={`${card.style} shrink-0 w-[100%] h-[200px]`}
            >
              {card.name} === {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}
