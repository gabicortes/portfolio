import React from "react";
import "./Presentation.css";
import photoGabi from "./fotoGabi.jpg";

export function Presentation() {
  return (
    <div className="wrapperPresentationSection">
      <div className="clipPathVectorPresentationSection" />{" "}
      <div className="textTitlePresentation">About me.</div>
      <div className="wrapperWhoIam">
        <div className="containerPhotoPresentation">
          <img
            className="photoGabiPresentation"
            src={photoGabi}
            alt="photoPresentation"
          />
        </div>
        <div className="textWrapperPresentation">
          <div className="textParagraphPresentation">
            Besides being a cat lover, I define myself as a multifacetic person.
            Graduated as a Business Administrator & life coach, and after 4
            years working in the financial industry I decided to change my
            career path to programming. I am a design-oriented front end
            developer.
          </div>
        </div>
      </div>
    </div>
  );
}
