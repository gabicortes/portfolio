import React from "react";
import "./Technologies.css";
import Particles from "react-tsparticles";

export function Technologies() {
  return (
    <div className="technologiesWrapper">
      <div className="clipPathVectorTechnologiesSection" />
      <div className="particlesWrapperTechnologies">
        <Particles
          className="particles"
          id="tsparticles"
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: "F3F9D2",
              },

              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  sides: 5,
                },
                image: {
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.2,
                random: false,
                animation: {
                  enable: false,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 40,
                random: { enable: true, minimumValue: 5 },
                animation: {
                  enable: false,
                  speed: 5,
                  minimumValue: 5,
                  sync: false,
                },
              },
              lineLinked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                collisions: true,
                enable: true,
                speed: 10,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "bounce",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onHover: {
                  enable: false,
                  mode: "repulse",
                  parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                  },
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            detectRetina: true,
            background: {
              color: "#E37971",
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
          }}
        />
      </div>
      <div className="titleTechnologies">Technologies.</div>
      <div className="technologiesBoxContainer">
        <div className="technologiesBox technologiesBox1">React</div>
        <div className="technologiesBox technologiesBox2">JavaScript</div>
        <div className="technologiesBox technologiesBox3">Node</div>
        <div className="technologiesBox technologiesBox4">TypeScript</div>
        <div className="technologiesBox technologiesBox5">Bootstrap</div>
        <div className="technologiesBox technologiesBox6">CSS 3</div>
        <div className="technologiesBox technologiesBox7">HTML 5</div>
        <div className="technologiesBox technologiesBox8">Git</div>
      </div>
    </div>
  );
}
