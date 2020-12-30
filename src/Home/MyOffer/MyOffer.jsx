import React from "react";
import "./MyOffer.css";
import { HiLightBulb } from "react-icons/hi";
import { MdImportantDevices } from "react-icons/md";
import { HiCode } from "react-icons/hi";

export function MyOffer() {
  return (
    <div className="myOfferWrapper">
      <div className="clipPathVectorMyOfferSection1" />
      <div className="wrapperTitle">Programming skills.</div>
      <div className="wrapperCirclesUXUI">
        <div className="circleWrapper">
          <HiLightBulb className="vectorIcon" />
          <div className="titleVectorIcon">Design out of the Box</div>
          <div className="textVectorIcon">
            I love making great User-friendly Apps using creative resources.
          </div>
        </div>
        <div className="circleWrapper">
          <MdImportantDevices className="vectorIcon" />
          <div className="titleVectorIcon">Responsive</div>
          <div className="textVectorIcon">
            All of the websites I create are available to be displayed in every
            device.
          </div>
        </div>
        <div className="circleWrapper">
          <HiCode className="vectorIcon" />
          <div className="titleVectorIcon">Scalable Coding</div>
          <div className="textVectorIcon">
            High quality coding in order to be reused it when required.
          </div>
        </div>
      </div>
    </div>
  );
}
