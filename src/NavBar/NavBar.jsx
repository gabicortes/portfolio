import React, { useState } from "react";
import "./NavBar.css";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import classNames from "classnames";

export function NavBar(props) {
  const [hideButtonNavBar, setHideButtonNavBar] = useState(true);

  const scrollToRef = (ref) =>
    window.scrollTo({
      left: 0,
      top: ref.current.offsetTop,
      behavior: "smooth",
    });

  useScrollPosition((position) => {
    if (position.currPos.y < -650) {
      setHideButtonNavBar(false);
    } else {
      setHideButtonNavBar(true);
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

    function handleFifthButtonClick() {
      scrollToRef(props.fifthButtonSectionRef);
    }

  const buttonClassnames = classNames(
    "buttonNavBar",
    hideButtonNavBar && "navBarButtonHide"
  );

  return (
    <div className="buttonsNavBarWrapper">
      <div className="buttonIndividualWrapper">
        <div onClick={handleFirstButtonClick} className={buttonClassnames}>
          {props.firstButton}
        </div>
        <div className="buttonNavBarOnHover">About Me.</div>
      </div>
      <div className="buttonIndividualWrapper">
        <div onClick={handleSecondButtonClick} className={buttonClassnames}>
          {props.secondButton}
        </div>
        <div className="buttonNavBarOnHover">Programming skills.</div>
      </div>
      <div className="buttonIndividualWrapper">
        <div onClick={handleThirdButtonClick} className={buttonClassnames}>
          {props.thirdButton}
        </div>
        <div className="buttonNavBarOnHover">Technologies.</div>
      </div>
      <div className="buttonIndividualWrapper">
        <div onClick={handleFourthButtonClick} className={buttonClassnames}>
          {props.fourthButton}
        </div>
        <div className="buttonNavBarOnHover">Projects.</div>
      </div>
      <div className="buttonIndividualWrapper">
        <div onClick={handleFifthButtonClick} className={buttonClassnames}>
          {props.fifthButton}
        </div>
        <div className="buttonNavBarOnHover">Contact me.</div>
      </div>
    </div>
  );
}
