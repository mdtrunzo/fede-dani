import Logo from '../assets/diaman.png'
import LogoLetras from '../assets/logo-letras.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
          commodi blanditiis.{' '}
        </h1>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="contact-info">
          <img src={Logo} alt="" width={70}/>
          <img src={LogoLetras} alt="" width={130}/>
        </div>
        <div className="policy">
          <p>
            © 2022 TEST LOGO - Privacy Policy , Impressum , Trademark Policy
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            illo vel itaque error, libero doloremque laborum voluptatem eveniet
            sapiente porro quidem quasi quia ipsa facilis dolore maxime nemo
            voluptatum quae!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
