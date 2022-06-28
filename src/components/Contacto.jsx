  import video5 from '../assets/5.webm'
  import { Element } from 'react-scroll'
  import { Fade } from 'react-awesome-reveal'

  function Contacto() {
    return (
      <Element id="contacto">
        <div className="contacto">
          <div className="overlay"></div>
          <video loop autoPlay muted>
            <source src={video5} type="video/mp4" />
          </video>

          <div className="contacto-form">
            <Fade>
              <h2>CONTACTO</h2>
              <form>
                <input type="text" placeholder="Nombre" required />
                <input type="email" placeholder="Correo Electrónico" required />
                <input type="text" placeholder="Teléfono" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                  required
                ></textarea>
                <button>ENVIAR</button>
              </form>
            </Fade>
          </div>
        </div>
      </Element>
    )
  }

  export default Contacto
