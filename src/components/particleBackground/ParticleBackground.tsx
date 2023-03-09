import "./index.css";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { particleOptions } from "../../config/particles";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );
  return (
    <Particles
      className="particles"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
    />
  );
}
