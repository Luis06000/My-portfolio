import React, { useEffect } from "react";
import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.1.0/+esm";

function Background() {
  useEffect(() => {
    const loadParticles = async () => {
      await loadAll(tsParticles);
      
      const options = {
        particles: {
          number: {
            value: 85
          },
          color: {
            value: "#13c16a"
          },
          links: {
            enable: true,
            color: "#13c16a",
            distance: 120
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.4
          },
          size: {
            value: 3
          },
          move: {
            enable: true,
            speed: 2
          }
        },
        background: {
          color: "#191a1a"
        },
        poisson: {
          enable: true
        }
      };

      await tsParticles.load({ id: "tsparticles", options });
    };

    loadParticles();
  }, []);

  return <div id="tsparticles" style={{zIndex:-1}}/>;
}

export default Background;
