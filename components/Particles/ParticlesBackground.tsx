import Particles from "react-tsparticles";
import type {Engine} from "tsparticles-engine"
import {loadFull} from "tsparticles"

const ParticlesBackground = () => {
  const particlesInit = async(engine: Engine)=>{
    await loadFull(engine)
  }
  return (
    <Particles
      init={particlesInit}
      id="tsparticles"
      className="z-0 opacity-20"
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: true,
              speed: 20,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },

        retina_detect: true,
        background: {
          color: "#000000",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  );
};

export default ParticlesBackground;
