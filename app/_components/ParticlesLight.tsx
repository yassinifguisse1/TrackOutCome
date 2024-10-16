"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import { cn } from "@/lib/utils";

const ParticlesLight = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-light"
      init={particlesInit}
      className={cn("absolute inset-0 -z-10")} 
      options={{
        background: {
          color: { value: "#ffffff" },
        },
        particles: {
          color: { value: "#000000" },
          links: {
            color: "#000000",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          number: { density: { enable: true, area: 800 }, value: 80 },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            speed: 1,
            straight: false,
          },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesLight;