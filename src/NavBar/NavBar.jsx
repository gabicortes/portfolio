import React, { useState } from "react";
import "./NavBar.css";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export function NavBar(props) {
  const [navBarButtonClass, setNavBarButtonClass] = useState(
    "navBarButtonHide"
  );

  const scrollToRef = (ref) =>
    window.scrollTo({
      left: 0,
      top: ref.current.offsetTop,
      behavior: "smooth",
    });

  useScrollPosition((position) => {
    if (position.currPos.y < -650) {
      setNavBarButtonClass("buttonNavBarShow");
    } else {
      setNavBarButtonClass("navBarButtonHide");
    }
  });

  function handleFirstButtonClick() {
    scrollToRef(props.firstButtonSectionRef);
  }
  function handleSecondButtonClick() {
    scrollToRef(props.secondButtonSectionRef);
  }

  function handleThirdButtonClick() {
    scrollToRef(props.thirdButtonSectionRef);
  }

  function handleFourthButtonClick() {
    scrollToRef(props.fourthButtonSectionRef);
  }

  return (
    <div className="buttonsNavBarWrapper">
      <div className="buttonIndividualWrapper">
        <div onClick={handleFirstButtonClick} className={navBarButtonClass}>
          {props.firstButton}
        </div>
        <div className="buttonNavBarOnHover">About Me.</div>
      </div>
      <div className="buttonIndividualWrapper">
        <div onClick={handleSecondButtonClick} className={navBarButtonClass}>
          {props.secondButton}
        </div>
        <div className="buttonNavBarOnHover">Programming Skills.</div>
      </div>
      <div className="buttonIndividualWrapper">
        <div onClick={handleThirdButtonClick} className={navBarButtonClass}>
          {props.thirdButton}
        </div>
        <div className="buttonNavBarOnHover">Projects.</div>
      </div>
      <div className="buttonIndividualWrapper">
        <div onClick={handleFourthButtonClick} className={navBarButtonClass}>
          {props.fourthButton}
        </div>
        <div className="buttonNavBarOnHover">Contact me.</div>
      </div>
    </div>
  );
}
