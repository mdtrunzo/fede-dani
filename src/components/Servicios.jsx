import video4 from './../assets/4.webm'
import { Element } from 'react-scroll'
import CreateIcon from '@mui/icons-material/Create'
import InstagramIcon from '@mui/icons-material/Instagram'
import PhonelinkIcon from '@mui/icons-material/Phonelink'
import { Fade } from 'react-awesome-reveal'

function Servicios() {
  return (
    <Element id="servicios">
      <div className="servicios">
        <div className="overlay"></div>

        <video loop autoPlay muted>
          <source src={video4} type="video/webm" />
        </video>
        <Fade>
          <div className="servicios-flex">
            <h3 className='h3'>SERVICIOS</h3>
            <p className='servicios-flex-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="servicios-data">
              <div className="servicios-data-bloque">
                <CreateIcon />
                <h3>Consultorías</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit modi rem nesciunt.
                </p>
              </div>

              <div className="servicios-data-bloque">
                <InstagramIcon />
                <h3>Manejo de Redes Sociales</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit modi rem nesciunt.
                </p>
              </div>

              <div className="servicios-data-bloque">
                <PhonelinkIcon />
                <h3>Ads</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit modi rem nesciunt.
                </p>
              </div>
            </div>

            {/* <button className="btn">VER MÁS</button> */}
          </div>
        </Fade>
      </div>
    </Element>
  )
}

export default Servicios
