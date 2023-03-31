import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';

const App = () => {
  const particlesInit = useCallback(async engine => {
      console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  return (
      <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
              background: {
                  color: {
                      value: "#FFC75F",
                  },
              },
              fpsLimit: 110,
              interactivity: {
                  events: {
                      onClick: {
                          enable: false,
                          mode: "push",
                      },
                      onHover: {
                          enable: false,
                          mode: "repulse",
                      },
                      resize: true,
                  },
                  modes: {
                      push: {
                          quantity: 50,
                      },
                      repulse: {
                          distance: 200,
                          duration: 0.4,
                      },
                  },
              },
              particles: {
                  color: {
                      value: "#ffffff",
                  },
                  links: {
                      color: "#ffffff",
                      distance: 160,
                      enable: true,
                      opacity: 0.5,
                      width: 2,
                  },
                  collisions: {
                      enable: true,
                  },
                  move: {
                      directions: "none",
                      enable: true,
                      outModes: {
                          default: "bounce",
                      },
                      random: false,
                      speed: 5,
                      straight: false,
                  },
                  number: {
                      density: {
                          enable: true,
                          area: 1400,
                      },
                      value: 60,
                  },
                  opacity: {
                      value: 0.3,
                  },
                  shape: {
                      type: "circle",
                  },
                  size: {
                      value: { min: 1, max: 4 },
                  },
              },
              detectRetina: true,
          }}
      />
  );
};

export default App
