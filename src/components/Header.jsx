import Logo from '../assets/logo.png'
import LogoLetras from '../assets/logo-letras.png'
import { Link as ScrollLink } from 'react-scroll'

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="" width="80" />
        <img src={LogoLetras} alt="" width="180" />
      </div>
      <div className="nav">
        <ul>
          <ScrollLink
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li class="hover-underline-animation">Inicio</li>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="red"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li class="hover-underline-animation">La Red</li>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="quienes-somos"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li class="hover-underline-animation">Quiénes Somos</li>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="servicios"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li class="hover-underline-animation">Servicios</li>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="contacto"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li class="hover-underline-animation">Contacto</li>
          </ScrollLink>
        </ul>
      </div>
    </div>
  )
}

export default Header
