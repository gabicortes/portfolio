import React from "react";
import "./Projects.css";
import bitacoraYogui from "./bitacora-yogui.jpg";
import houseOfDonuts from "./house-of-donuts.jpg";

export function Projects() {
  return (
    <div className="projectsSectionWrapper">
      <div className="vectorProjectsSection" />
      <div className="titleProjectsSection">Projects.</div>
      <div className="projectsWrapper">
        <div className="projectContainer bitacoraYogui">
          <a className="hyperlinkToBitacoraYogui">
            <img className="imageProjects imageBitacora" src={bitacoraYogui} />
            <div className="clickHereButton clickHereButtonBitacoraYogui">
              Click here!
            </div>
          </a>
        </div>
        <div className="projectContainer houseOfDonuts">
          <a className="hyperlinkToHouseOfDonuts">
            <img
              className="imageProjects imageHouseOfDonuts"
              src={houseOfDonuts}
            />
            <div className="clickHereButton clickHereButtonHouseOfDonuts">
              Click here!
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
