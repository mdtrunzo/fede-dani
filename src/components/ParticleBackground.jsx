import Particles from "react-tsparticles"
import particlesConfig from "./config/particles-config"

function ParticleBackground() {
  return (
    <Particles params={particlesConfig}></Particles>
  )
}

export default ParticleBackground