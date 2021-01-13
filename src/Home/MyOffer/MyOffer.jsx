import React from "react";
import "./MyOffer.css";
import { HiLightBulb } from "react-icons/hi";
import { MdImportantDevices } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

export function MyOffer() {
  return (
    <div className="myOfferWrapper">
      <div className="clipPathVectorMyOfferSection1" />{" "}
      <ScrollAnimation
        animateIn="animate__slideInRight"
        animatePreScroll={false}
        animateOnce={true}
        className="animate__animated animate__animate__slideInRight "
      >
        <div className="wrapperTitle">Programming skills.</div>
      </ScrollAnimation>
      <div className="wrapperCirclesUXUI">
        <ScrollAnimation
          duration={2}
          animateIn="animate__zoomIn"
          animatePreScroll={false}
          animateOnce={true}
          className="animate__animated animate__animate__zoomIn"
        >
          <div className="circleWrapper">
            <HiLightBulb className="vectorIcon" />
            <div className="titleVectorIcon">Out-of-the-box Design</div>
            <div className="textVectorIcon">
              I love making great User-friendly Apps using creative resources.
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          duration={2}
          animateIn="animate__zoomIn"
          animatePreScroll={false}
          animateOnce={true}
          className="animate__animated animate__animate__zoomIn"
        >
          <div className="circleWrapper">
            <MdImportantDevices className="vectorIcon" />
            <div className="titleVectorIcon">Responsive</div>
            <div className="textVectorIcon">
              All the websites I create are available to be displayed in every
              device.
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          duration={2}
          animateIn="animate__zoomIn"
          animatePreScroll={false}
          animateOnce={true}
          className="animate__animated animate__animate__zoomIn"
        >
          <div className="circleWrapper">
            <HiCode className="vectorIcon" />
            <div className="titleVectorIcon">Scalable Coding</div>
            <div className="textVectorIcon">
              High quality coding that allows efficient reusability.
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
