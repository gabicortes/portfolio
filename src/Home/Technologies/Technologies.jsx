import React from "react";
import "./Technologies.css";
import Particles from "react-tsparticles";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

export function Technologies() {
  return (
    <div className="technologiesWrapper">
      <div className="clipPathVectorTechnologiesSection" />
      <div className="particlesWrapperTechnologies">
        <Particles
          className="particles"
          id="tsparticles"
          options={{
            fpsLimit: 100,
            particles: {
              number: {
                value: 150,
                density: {
                  enable: true,
                  area: 1200,
                },
              },
              color: {
                value: "#ffffff",
              },

              shape: {
                type: "square",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  sides: 8,
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
                value: 5,
                random: { enable: true, minimumValue: 1 },
                animation: {
                  enable: false,
                  speed: 3,
                  minimumValue: 1,
                  sync: false,
                },
              },
              lineLinked: {
                frequency: 1,
                enable: true,
                distance: 100,
                color: "random",
                opacity: 0.3,
                width: 1,
              },
              move: {
                collisions: true,
                enable: true,
                speed: 2,
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
              size: "100%",
            },
          }}
        />
      </div>
      <ScrollAnimation
        animateIn="animate__slideInRight"
        animatePreScroll={false}
        animateOnce={true}
        className="textTitlePresentation animate__animated
        animate__animate__slideInRight"
      >
        <div className="titleTechnologies">Technologies.</div>
      </ScrollAnimation>
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
