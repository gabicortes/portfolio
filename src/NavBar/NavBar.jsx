import React, { useState } from "react";
import "./NavBar.css";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import classNames from "classnames";
import { TiThMenu } from "react-icons/ti";

export function NavBar(props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [showBurgerMenu, setShowBurgerMenu] = useState("burgerWrapperHidden");

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

  useScrollPosition((position) => {
    if (position.currPos.y < -650) {
      setShowBurgerMenu("burgerWrapper");
    } else {
      setShowBurgerMenu("burgerWrapperHidden");
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

  let menu = (
    <div className="burgerMenu">
      <div className="buttonBurgerNavBar" onClick={handleFirstButtonClick}>
        {props.firstButton}
      </div>
      <div className="buttonBurgerNavBar" onClick={handleSecondButtonClick}>
        {props.secondButton}
      </div>
      <div className="buttonBurgerNavBar" onClick={handleThirdButtonClick}>
        {props.thirdButton}
      </div>
      <div className="buttonBurgerNavBar" onClick={handleFourthButtonClick}>
        {props.fourthButton}
      </div>
      <div className="buttonBurgerNavBar" onClick={handleFifthButtonClick}>
        {props.fifthButton}
      </div>
    </div>
  );

  const menuWrapperClassname = menuIsOpen
    ? "openMenuWrapper"
    : "closedMenuWrapper";

  function triggerHamburgerMenu() {
    setMenuIsOpen((prevValue) => !prevValue);
  }

  return (
    <div className="buttonsNavBarWrapper">
      <div className="buttonIndividualWrapper">
        <div
          onClick={handleFirstButtonClick}
          className={`firstButton ${buttonClassnames}`}
        >
          {props.firstButton}
        </div>
        <div className="buttonNavBarOnHover buttonNavBarOnHover1">
          About Me.
        </div>
      </div>
      <div className="buttonIndividualWrapper">
        <div
          onClick={handleSecondButtonClick}
          className={`secondButton ${buttonClassnames}`}
        >
          {props.secondButton}
        </div>
        <div className="buttonNavBarOnHover buttonNavBarOnHover2">
          Programming skills.
        </div>
      </div>
      <div className="buttonIndividualWrapper">
        <div
          onClick={handleThirdButtonClick}
          className={`thirdButton ${buttonClassnames}`}
        >
          {props.thirdButton}
        </div>
        <div className="buttonNavBarOnHover buttonNavBarOnHover3">
          Technologies.
        </div>
      </div>
      <div className="buttonIndividualWrapper">
        <div
          onClick={handleFourthButtonClick}
          className={`fourthButton ${buttonClassnames}`}
        >
          {props.fourthButton}
        </div>
        <div className="buttonNavBarOnHover buttonNavBarOnHover4">
          Projects.
        </div>
      </div>
      <div className="buttonIndividualWrapper">
        <div
          onClick={handleFifthButtonClick}
          className={`fifthButton ${buttonClassnames}`}
        >
          {props.fifthButton}
        </div>
        <div className="buttonNavBarOnHover buttonNavBarOnHover5">
          Contact me.
        </div>
      </div>
      <div className={showBurgerMenu}>
        <TiThMenu className="burgerMenuVector" onClick={triggerHamburgerMenu} />
        <div className={menuWrapperClassname}>{menu}</div>
      </div>
    </div>
  );
}
