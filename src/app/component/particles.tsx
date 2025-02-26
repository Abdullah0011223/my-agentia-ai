"use client";

import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Particles from "react-particles";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-[-1]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#000" }, // Black Background
          particles: {
            number: { value: 50 },
            color: { value: "#FF0000" }, // RED Lightning Bolt Color
            shape: {
              type: "char",
              character: { value: "⚡︎", font: "Arial", style: "", weight: "bold" }, // Lightning Bolt Unicode
            },
            opacity: {
              value: 0.8,
              random: true,
              animation: { enable: true, speed: 2, minimumValue: 0.3, sync: false },
            },
            size: { value: { min: 10, max: 30 } }, // Bigger Lightning Size
            move: { enable: true, speed: 2, direction: "top", straight: false },
            twinkle: {
              particles: { enable: true, frequency: 0.3, color: "#FF0000" }, // Lightning Flash Effect in RED
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesComponent;
