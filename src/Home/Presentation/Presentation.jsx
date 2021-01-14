import React from "react";
import "./Presentation.css";
import photoGabi from "./fotoGabi.png";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

export function Presentation() {
  return (
    <div className="wrapperPresentationSection">
      <div className="clipPathVectorPresentationSection" />
      <ScrollAnimation
        animateIn="animate__slideInRight"
        animatePreScroll={false}
        animateOnce={true}
        className="animate__animated animate__animate__slideInRight"
      >
        <div className="textTitlePresentation">About me.</div>
      </ScrollAnimation>
      <ScrollAnimation
        duration={2}
        animateIn="animate__zoomIn"
        animatePreScroll={false}
        animateOnce={true}
        className="animate__animated animate__animate__zoomIn"
      >
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
              Nice to meet you, I am Gabi!
              <br />
              <br />
              As a design-oriented front end developer who is fond of cats, when
              the moment came for the setting up of my startup I knew that the
              brand should show a bit of myself, so I decided to name it
              Kittyscripts.
              <br />
              <br />
              My journey as a web developer has helped me realize how much I
              love creating User creative-and-friendly Interfaces looking for
              the best experience. <br />
              <br />I flew all the way from Argentina to come and live in the
              historic and magical Edimburgh.
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
