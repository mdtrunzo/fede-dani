import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import video1 from '../assets/1.webm'
import video2 from '../assets/2.webm'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Logo from '../assets/diaman.png'
import { Element } from 'react-scroll'
import { Link as ScrollLink } from 'react-scroll'

const AutoplaySlider = withAutoplay(AwesomeSlider)

function Slider() {
  return (
    <Element id="home">
      <div className="slider">

        <AutoplaySlider
          animation="cubeAnimation"
          bullets={false}
          play={true}
          interval={8000}
        >
          <div>
            <div className="slider-captions first">
            <div className="overlay overlay-slider"></div>
            <img src={Logo} alt="" width={130}/>
              <h1>
                Diamanthum
              </h1>
              <p>Red de consciencias</p>
              <ScrollLink
                activeClass="active"
                to="red"
                spy={true}
                smooth={true}
                duration={500}
              >
                <KeyboardArrowDownIcon className="arrow-down" />
              </ScrollLink>
            </div>

            <video loop autoPlay muted>
              <source src={video1} type="video/webm" />
            </video>
          </div>
          <div>
            <div className="slider-captions">
            <div className="overlay overlay-slider"></div>
              <h1>
                Reconectando <b>Personas</b>
              </h1>
              <p>Encontrarnos para seguir creciendo</p>
              <ScrollLink
                activeClass="active"
                to="red"
                spy={true}
                smooth={true}
                duration={500}
              >
                <KeyboardArrowDownIcon className="arrow-down" />
              </ScrollLink>
            </div>
            <video loop autoPlay muted>
              <source src={video2} type="video/webm" />
            </video>
          </div>
        </AutoplaySlider>
      </div>
    </Element>
  )
}

export default Slider
