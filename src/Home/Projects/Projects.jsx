import React, { useState, Fragment } from "react";
import "./Projects.css";
import bitacoraYogui from "./bitacora-yogui.jpg";
import houseOfDonuts from "./house-of-donuts.jpg";
import {
  TiArrowRightThick,
  TiArrowLeftThick,
  TiArrowBack,
} from "react-icons/ti";
import bitacoraResponsiveImg from "./bitacoraResponsive.png";
import imageSlideOne from "./imageCMandYoga.png";
import gifAPI from "./bitacoraAPI.gif";
import photoSlideOne from "./portadaHouse.png";
import GIFhouseOfDonuts from "./houseOfDonuts.gif";
import imageHouseOfDonutsResponsive from "./responsiveHouseOfDonuts.png";

const sliderDataBitacora = [
  {
    image: imageSlideOne,
    title: "Bitacora Yogui",
    description:
      " It is an Argentinian company which offers two different services: Ashtanga Yoga classes & Community Manager advice. The website's purpose is showing Martina's work and how she manages to make a great combination of both.",
    option: "Visit Website",
    href: "https://bitacorayogui.com.ar",
  },
  {
    image: bitacoraResponsiveImg,
    title: "Responsive Design",
    description:
      "Same functionality both on smartphone, tablet or laptop. Design adapted to be responsive. The company will not invest in iOS or Android App because doesn't need it.",
    option: "",
    href: "",
  },
  {
    image: gifAPI,
    title: "Technologies used",
    description:
      "Designed on a modern minimalism style. Multiple page website programmed using HTML5, CSS3, Javascript, React & Node. Instagram API embedeed as a purpose of keeping updated the website. Firebase hosting. Cloudflare DNS.",
    option: "Find Repository",
    href: "https://github.com/gabicortes/bitacora-yogui",
  },
];

const sliderDataHouseOfDonuts = [
  {
    image: photoSlideOne,
    title: "House of Donuts",
    description:
      "A one-year-old company located in the center of one of the Buenos Aires traditional neighbourhood: Quilmes. Founders' idea is showing their products and, as a future development add a cart to allow the online sale.",
    option: "Visit website",
    href: "https://houseofdonuts.com.ar",
  },
  {
    image: imageHouseOfDonutsResponsive,
    title: "Responsive Design",
    description:
      "Complex design. User-friendly interface. The most usable device for this kind of customers is the smartphone so the app is completely adapted to have the same functionalities as on a computer but in a simpler way",
    option: "",
    href: "",
  },
  {
    image: GIFhouseOfDonuts,
    title: "Techonologies Used",
    description:
      "Single-page website developed using React Js. Instagram API and MapBox API are embedeed and allow the user be closer to their customers helping them finding the way to the shop or keeping updated the website with the latest news posted on Instagram.",
    option: "Find Repository",
    href: "https://github.com/gabicortes/HouseOfDonuts",
  },
];

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
    setClassProjectBitacora("carousel-project-show");
    setHouseOfDonutsClass("houseOfDonutsHideWhileBitacoraOpen");
    setImageBitacoraClass("imageCircleProjectSmall");
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
    setImageHouseOfDonutsClass("imageCircleProjectSmall");
    setClassProjectHouseOfDonuts("carousel-project-show");
    setBitacoraProjectClass("bitacoraHideWhileHouseOpen");
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
      <div className="titleProjectsSection">Projects.</div>

      <div className="projectsWrapper">
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
        <div className={`${classProjectHouseOfDonuts} carouselProject`}>
          {sliderDataHouseOfDonuts.map((slide, index) => {
            return (
              index === current && (
                <Fragment>
                  <div>{buttonGoBack}</div>
                  <div className="slideBox">
                    <img className="slideActive" src={slide.image} />
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
                  <div className="arrowsBoxSlide">
                    <TiArrowLeftThick
                      className="left-arrow"
                      onClick={prevSlide}
                    />
                    <TiArrowRightThick
                      className="right-arrow"
                      onClick={nextSlide}
                    />
                  </div>
                </Fragment>
              )
            );
          })}
        </div>
        <div className={`${classProjectBitacoraCarousel} carrouselBitacora`}>
          {sliderDataBitacora.map((slide, index) => {
            return (
              index === current && (
                <Fragment>
                  <div>{buttonGoBack}</div>
                  <div className="slideBox">
                    <img className="slideActive" src={slide.image} />
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
                  <div className="arrowsBoxSlide">
                    <TiArrowLeftThick
                      className="left-arrow"
                      onClick={prevSlide}
                    />
                    <TiArrowRightThick
                      className="right-arrow"
                      onClick={nextSlide}
                    />
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
