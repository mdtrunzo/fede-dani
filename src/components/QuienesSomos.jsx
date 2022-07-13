import { Fade } from 'react-awesome-reveal'
import IconItem from './IconItem'
import { useState, useEffect } from 'react'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Element } from 'react-scroll'
import video6 from '../assets/6.mp4'

function QuienesSomos() {
  const [iconItems, setIconItems] = useState({
    icons: [
      {
        icon: <AccessibilityNewIcon />,
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia, ',
      },
      {
        icon: <AccountBalanceIcon />,
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia, ',
      }
    ],
  })

  useEffect(() => {
    setIconItems(iconItems)
  }, [iconItems])

  return (
    <Element id='quienes-somos'>
    <div className="quienes-somos red">
    <div className="overlay overlay-contact"></div>
          <video loop autoPlay muted>
            <source src={video6} type="video/mp4" />
          </video>
      <Fade>
        <div className="quienes-somos-content">
          <h3 className="upper-title pb-20">CONOCENOS</h3>
          <h2 className="pb-20">QUIENES SOMOS</h2>
          <p className="pb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos
            voluptas saepe necessitatibus maiores officiis iste atque dolor
            ratione voluptatibus, asperiores id minus, quod quas rem provident
            accusamus repellat aut!
          </p>
        </div>
        <div className="quienes-somos-icons">
          {iconItems.icons.map((icon, index) => (
            <IconItem key={index} icon={icon} />
          ))}
        </div>
        <div className="quienes-somos-icons">
          {iconItems.icons.map((icon, index) => (
            <IconItem key={index} icon={icon} />
          ))}
        </div>
      </Fade>
    </div>
    </Element>
  )
}

export default QuienesSomos
