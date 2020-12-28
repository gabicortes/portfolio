import React from "react";
import "./MyOffer.css";
import { HiLightBulb } from "react-icons/hi";
import { MdImportantDevices } from "react-icons/md";
import { HiCode } from "react-icons/hi";

export function MyOffer() {
  return (
    <div className="myOfferWrapper">
      <div className="clipPathVectorMyOfferSection1" />
      <div className="wrapperTitle"> UX / UI </div>
      <div className="wrapperCirclesUXUI">
        <div className="circleWrapper">
          <HiLightBulb className="vectorIcon" />
          <div className="titleVectorIcon">Design out of the Box</div>
          <div className="textVectorIcon">
            Pellentesque aliquam eros diam, et congue elit pharetra eu.
          </div>
        </div>
        <div className="circleWrapper">
          <MdImportantDevices className="vectorIcon" />
          <div className="titleVectorIcon">Responsive</div>
          <div className="textVectorIcon">
            Pellentesque aliquam eros diam, et congue elit pharetra eu.
          </div>
        </div>
        <div className="circleWrapper">
          <HiCode className="vectorIcon" />
          <div className="titleVectorIcon">Scalable Coding</div>
          <div className="textVectorIcon">
            Pellentesque aliquam eros diam, et congue elit pharetra eu.
          </div>
        </div>
      </div>
      {/*  <div className="clipPathVectorPresentationSection2" />*/}
    </div>
  );
}
