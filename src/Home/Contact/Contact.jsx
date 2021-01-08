import React from "react";
import "./Contact.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export function Contact() {
  return (
    <div className="contactWrapper">
      <div className="clipPathVectorContactSection" />
      <div className="textSectionContact">
        <div className="titleContactSection">Contact me.</div>
        <div className="textBehindTitleContactSection">
          Keep in touch. Get connected. Grab a cup of coffee. Let's create it.
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
      </div>
    </div>
  );
}
