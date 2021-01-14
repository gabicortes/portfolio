import React, { useState, Fragment } from "react";
import "./Projects.css";
import bitacoraYogui from "./bitacora-yogui.png";
import houseOfDonuts from "./house-of-donuts.png";
import {
  TiArrowRightThick,
  TiArrowLeftThick,
  TiArrowBack,
} from "react-icons/ti";
import { arraySliderHouseOfDonuts } from "./arraySliderHouseOfDonuts.js";
import { arraySliderBitacora } from "./arraySliderBitacora.js";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const sliderDataHouseOfDonuts = arraySliderHouseOfDonuts;

const sliderDataBitacora = arraySliderBitacora;

export function Projects() {
  const [classProjectBitacoraCarousel, setClassProjectBitacora] = useState(
    "carousel-project-hidden"
  );

  const [houseOfDonutsClass, setHouseOfDonutsClass] = useState(
    "projectContainer"
  );
  const [imageBitacoraClass, setImageBitacoraClass] = useState("imageProjects");

  const [imageHouseOfDonutsClass, setImageHouseOfDonutsClass] = useState(
    "imageProjects"
  );

  const [classProjectHouseOfDonuts, setClassProjectHouseOfDonuts] = useState(
    "carousel-project-hidden"
  );
  const [bitacoraProjectClass, setBitacoraProjectClass] = useState(
    "projectContainer"
  );

  const [current, setCurrent] = useState(0);

  const length = sliderDataBitacora.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderDataBitacora) || sliderDataBitacora.length <= 0) {
    return null;
  }

  function handleClickToOpenBitacora() {
    setHouseOfDonutsClass("houseOfDonutsHideWhileBitacoraOpen");
    setImageBitacoraClass("imageCircleProjectSmall");
    setTimeout(() => {
      setClassProjectBitacora("carousel-project-show");
    }, 800);
  }

  function handleClickButtonBack() {
    setImageBitacoraClass("imageProjects");
    setHouseOfDonutsClass("projectContainer");
    setClassProjectBitacora("carousel-project-hidden");
    setClassProjectHouseOfDonuts("carousel-project-hidden");
    setImageHouseOfDonutsClass("imageProjects");
    setBitacoraProjectClass("projectContainer");
  }

  function handleClickToOpenHouseOfDonuts() {
    setBitacoraProjectClass("bitacoraHideWhileHouseOpen");
    setImageHouseOfDonutsClass("imageCircleProjectSmall");
    setTimeout(() => {
      setClassProjectHouseOfDonuts("carousel-project-show");
    }, 800);
  }

  let buttonGoBack = (
    <div className="buttonBackShow" onClick={handleClickButtonBack}>
      <TiArrowBack className="iconButtonBack" />
      <div className="textButtonBack">Go back</div>
    </div>
  );

  return (
    <div className="projectsSectionWrapper">
      <div className="vectorProjectsSection" />
      <ScrollAnimation
        animateIn="animate__slideInRight"
        animatePreScroll={false}
        animateOnce={true}
        className="textTitlePresentation animate__animated
        animate__animate__slideInRight"
      >
        <div className="titleProjectsSection">Projects.</div>
      </ScrollAnimation>

      <div className="projectsWrapper">
        <ScrollAnimation
          duration={2}
          animateIn="animate__zoomIn"
          animatePreScroll={false}
          animateOnce={true}
          className="animate__animated animate__animate__zoomIn"
        >
          <div className={`${bitacoraProjectClass} bitacoraYogui`}>
            <a className="hyperlinkToBitacoraYogui">
              <img
                className={`imageBitacora ${imageBitacoraClass}`}
                src={bitacoraYogui}
                onClick={handleClickToOpenBitacora}
              />
              <div className="clickHereButton clickHereButtonBitacoraYogui">
                Click here!
              </div>
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          duration={2}
          animateIn="animate__zoomIn"
          animatePreScroll={false}
          animateOnce={true}
          className="animate__animated animate__animate__zoomIn"
        >
          <div className={`${houseOfDonutsClass} houseOfDonuts`}>
            <a className="hyperlinkToHouseOfDonuts">
              <img
                className={`${imageHouseOfDonutsClass} imageHouseOfDonuts`}
                src={houseOfDonuts}
                onClick={handleClickToOpenHouseOfDonuts}
              />
              <div className="clickHereButton clickHereButtonHouseOfDonuts">
                Click here!
              </div>
            </a>
          </div>
        </ScrollAnimation>

        <div className={`${classProjectHouseOfDonuts} carouselProject`}>
          {sliderDataHouseOfDonuts.map((slide, index) => {
            return (
              index === current && (
                <Fragment>
                  <div>{buttonGoBack}</div>
                  <div className="slideBoxIncludingButtons">
                    <div className="arrowContainer">
                      <TiArrowLeftThick
                        className="left-arrow"
                        onClick={prevSlide}
                      />
                    </div>

                    <div className="slidesWrapper">
                      <div className="imageSlideWrapper">
                        <img className="slideActive" src={slide.image} />
                      </div>

                      <div className="rigth-section-slide">
                        <div className="titleSlide">{slide.title}</div>
                        <div className="descriptionProjectSlide">
                          {slide.description}
                        </div>
                        {slide.option && (
                          <a
                            className="hyperlinkToProjectWebsite"
                            style={{ textDecoration: "none" }}
                            href={slide.href}
                            target="_blank"
                          >
                            {slide.option}
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="arrowContainer">
                      <TiArrowRightThick
                        className="right-arrow"
                        onClick={nextSlide}
                      />
                    </div>
                  </div>
                </Fragment>
              )
            );
          })}
        </div>
        <div className={`${classProjectBitacoraCarousel} carouselProject`}>
          {sliderDataBitacora.map((slide, index) => {
            return (
              index === current && (
                <Fragment>
                  <div>{buttonGoBack}</div>
                  <div className="slideBoxIncludingButtons">
                    <div className="arrowContainer">
                      <TiArrowLeftThick
                        className="left-arrow"
                        onClick={prevSlide}
                      />
                    </div>
                    <div className="slidesWrapper">
                      <div className="imageSlideWrapper">
                        <img className="slideActive" src={slide.image} />
                      </div>
                      <div className="rigth-section-slide">
                        <div className="titleSlide">{slide.title}</div>
                        <div className="descriptionProjectSlide">
                          {slide.description}
                        </div>
                        {slide.option && (
                          <a
                            className="hyperlinkToProjectWebsite"
                            style={{ textDecoration: "none" }}
                            href={slide.href}
                            target="_blank"
                          >
                            {slide.option}
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="arrowContainer">
                      <TiArrowRightThick
                        className="right-arrow"
                        onClick={nextSlide}
                      />
                    </div>
                  </div>
                </Fragment>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
