import React, { useEffect, useState } from "react";
import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.1.0/+esm";

function Background() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    const loadParticles = async () => {
      await loadAll(tsParticles);
      
      // Calcul du nombre de particules en fonction de la taille de l'écran
      const baseParticles = 200;
      const screenArea = windowDimensions.width * windowDimensions.height;
      const referenceArea = 1920 * 1080; // Résolution de référence (Full HD)
      const particleCount = Math.floor(baseParticles * (screenArea / referenceArea));

      // Calcul de la distance de liaison proportionnelle
      const baseDistance = 150;
      const scaleFactor = Math.min(windowDimensions.width / 1920, 1);
      const linkDistance = Math.floor(baseDistance * scaleFactor);

      const options = {
        particles: {
          number: {
            value: Math.max(20, particleCount) // Minimum 20 particules
          },
          color: {
            value: "#13c16a"
          },
          links: {
            enable: true,
            color: "#13c16a",
            distance: Math.max(60, linkDistance) // Distance minimum de 60
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.4
          },
          size: {
            value: Math.max(2, 3 * scaleFactor) // Taille minimum de 2
          },
          move: {
            enable: true,
            speed: Math.max(1, 2 * scaleFactor) // Vitesse minimum de 1
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

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowDimensions]);

  return <div id="tsparticles" style={{zIndex:-1}}/>;
}

export default Background;
