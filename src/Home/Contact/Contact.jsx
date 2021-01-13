import React from "react";
import "./Contact.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

export function Contact() {
  return (
    <div className="contactWrapper">
      <div className="clipPathVectorContactSection" />
      <div className="textSectionContact">
        <ScrollAnimation
          animateIn="animate__slideInRight"
          animatePreScroll={false}
          animateOnce={true}
          className="animate__animated
        animate__animate__slideInRight"
        >
          <div className="titleContactSection">Contact me.</div>
        </ScrollAnimation>
        <ScrollAnimation
          duration={2}
          animateIn="animate__zoomIn"
          animatePreScroll={false}
          animateOnce={true}
          className="animate__animated animate__animate__zoomIn"
        >
          <div className="textBehindTitleContactSection">
            Grab a cup of coffee. Get connected. Let's create it.
          </div>
          <div className="textBehindTitleContactSectionSmallScreen">
            Grab a cup of coffee. Get connected.
            <br /> Let's create it.
          </div>
          <div className="iconsSocialMediaWrapper">
            <a
              target="_blank"
              href="https://github.com/gabicortes/"
              className="hyperLinkToSocialMedia"
            >
              <AiFillGithub className="iconSocialMedia" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gabicortes/"
              className="hyperLinkToSocialMedia"
            >
              <AiFillLinkedin className="iconSocialMedia" />
            </a>
            <a
              target="_blank"
              href="mailto:hello@gabicortes.com"
              className="hyperLinkToSocialMedia"
            >
              <AiOutlineMail className="iconSocialMedia" />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=447523616386"
              className="hyperLinkToSocialMedia"
            >
              <AiOutlineWhatsApp className="iconSocialMedia" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
