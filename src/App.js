import Header from './components/Header'
import Slider from './components/Slider'
import Red from './components/Red'
import RedInfo from './pages/RedInfo'
import QuienesSomos from './components/QuienesSomos'
import Servicios from './components/Servicios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Subfooter from './components/Subfooter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <Red />
                <QuienesSomos />
                <Servicios />
                <Contacto />
              </>
            }
          ></Route>
          <Route path="/la-red" element={<RedInfo />} />
        </Routes>
        <Footer />
        <Subfooter />
      </BrowserRouter>
    </div>
  )
}

export default App
