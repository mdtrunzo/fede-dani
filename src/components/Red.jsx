import video3 from './../assets/3.mp4'
import { Fade } from 'react-awesome-reveal'
import { Element } from 'react-scroll'

function Red() {
  return (
    <Element id="red">
      <div className="red">
        <div className="overlay"></div>
        <video loop autoPlay muted>
          <source src={video3} type="video/mp4" />
        </video>
        <Fade>
          <div className="red-content">
            <h3 className="upper-title pb-20">CONOCE LA RED</h3>
            <h2 className="pb-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore eius ea hic sapiente!{' '}
            </h2>
            <p className="pb-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quos voluptas saepe necessitatibus maiores officiis iste atque
              dolor ratione voluptatibus, asperiores id minus, quod quas rem
              provident accusamus repellat aut!
            </p>
            <div className="buttons-container">
              <button>CONOCE LA RED</button>
              <button>ENTRAR A LA RED</button>
            </div>
          </div>
        </Fade>
      </div>
    </Element>
  )
}

export default Red
