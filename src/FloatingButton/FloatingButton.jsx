import React, { useState } from "react";
import "./FloatingButton.css";
import { TiArrowUpThick } from "react-icons/ti";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export function FloatingButton() {
  const [floatingButtonClass, setFloatingButtonClass] = useState(
    "floatingButtonHide"
  );

  function handleClick() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }

  useScrollPosition((position) => {
    if (position.currPos.y < -650) {
      setFloatingButtonClass("floatingButtonShow");
    } else {
      setFloatingButtonClass("floatingButtonHide");
    }
  });

  return (
    <div onClick={handleClick}>
      <TiArrowUpThick className={floatingButtonClass} />
    </div>
  );
}
