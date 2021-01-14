import React from "react";
import "./Greetings.css";
import Particles from "react-tsparticles";

export function Greetings() {
  return (
    <div className="wrapperHiCallMeGabi">
      <div className="textWrapper">
        <div className="hiText"> Hi!</div>
        <div className="callMeGabiText">
          Call me <br />
          <div className="gabiCodeText">
            <div className="codingSign"> {"<"}</div>
            <div>Gabi</div>
            <div className="codingSignRight"> {" />"}</div>
          </div>
        </div>
      </div>
      <div className="particlesWrapper">
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
                  area: 800,
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
                value: 0.5,
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
              size: "cover",
            },
          }}
        />
      </div>
      <div className="clipPathVectorGreetingsSection" />
    </div>
  );
}
