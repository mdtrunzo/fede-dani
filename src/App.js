import Header from './components/Header'
import Slider from './components/Slider'
import Red from './components/Red'
import QuienesSomos from './components/QuienesSomos'
import Servicios from './components/Servicios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Subfooter from './components/Subfooter'

function App() {
  return (
    <div className="app">
      <Header />
      <Slider />
      <Red />
      <QuienesSomos />
      <Servicios />
      <Contacto />
      <Footer />
      <Subfooter />
    </div>
  )
}

export default App
