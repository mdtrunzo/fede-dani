import { Fade } from 'react-awesome-reveal'
import IconItem from './IconItem'
import { useState, useEffect } from 'react'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
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
      },
      {
        icon: <AirplanemodeActiveIcon />,
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia, ',
      },
    ],
  })

  useEffect(() => {
    setIconItems(iconItems)
  }, [iconItems])

//   const loadCanvas = () => {
//     const stars = document.getElementById('stars')
//     const starsCtx = stars.getContext('2d')

//     let screen,
//       starsElements,
//       starsParams = { speed: 0.2, number: 350, extinction: 4 }

//     // run stars
//     setupStars()
//     updateStars()

//     // update stars on resize to keep them centered
// window.onresize = function() {
//   setupStars();
// };
// // star constructor
// function Star() {
//   this.x = Math.random() * stars.width;
//   this.y = Math.random() * stars.height;
//   this.z = Math.random() * stars.width;

//   this.move = function() {
//       this.z -= starsParams.speed;
//       if (this.z <= 0) {
//           this.z = stars.width;
//       }
//   };

//   this.show = function() {
//       let x, y, rad;
//       x = (this.x - screen.c[0]) * (stars.width / this.z);
//       x = x + screen.c[0];
//       y = (this.y - screen.c[1]) * (stars.width / this.z);
//       y = y + screen.c[1];
//       rad = stars.width / this.z;


//       starsCtx.beginPath();
//       starsCtx.fillStyle = "#538691";
//       starsCtx.arc(x, y, rad, 0, Math.PI * 2);
//       starsCtx.fill();
//   }
// }

// // setup <canvas>, create all the starts
// function setupStars() {
//   screen = {
//       w: window.innerWidth,
//       h: window.innerHeight,
//       c: [ window.innerWidth * 0.5, window.innerHeight * 0.5 ]
//   };
//   window.cancelAnimationFrame(updateStars);
//   stars.width = screen.w;
//   stars.height = screen.h;
//   starsElements = [];
//   for (let i = 0; i < starsParams.number; i++) {
//       starsElements[i] = new Star();
//   }
// }

// // redraw the frame
// function updateStars() {
//   starsCtx.fillStyle = "white";
//   starsCtx.fillRect(0, 0, stars.width, stars.height);
//   starsElements.forEach(function (s) {
//       s.show();
//       s.move();
//   });
//   window.requestAnimationFrame(updateStars);
// }
//   }

  // useEffect(() => {
  //   loadCanvas()
  // }, [])

  return (
    <Element id='quienes-somos'>
    <div className="quienes-somos red">

          <video loop autoPlay muted>
            <source src={video6} type="video/mp4" />
          </video>
      {/* <canvas id="stars"></canvas> */}
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
