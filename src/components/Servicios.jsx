import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import video4 from './../assets/4.mp4'
import { Element } from 'react-scroll'

const AutoplaySlider = withAutoplay(AwesomeSlider)

function Servicios() {
  return (
    <Element id="servicios">
      <div className="slider">
        <AutoplaySlider
          animation="cubeAnimation"
          bullets={false}
          play={true}
          interval={6000}
        >
          <div>
            <video loop autoPlay muted>
              <source src={video4} type="video/webm" />
            </video>
          </div>
          <div>
            <video loop autoPlay muted>
              <source src={video4} type="video/webm" />
            </video>
            <h1>Reconectando Personas</h1>
          </div>
        </AutoplaySlider>
      </div>
    </Element>
  )
}

export default Servicios
