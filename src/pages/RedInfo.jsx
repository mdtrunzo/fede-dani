import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Element } from 'react-scroll'
import { Link as ScrollLink } from 'react-scroll'

function RedInfo() {
  return (
    <div>
      <div className="slider-image">
        <h1>Conocé la red</h1>
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
      <Element id="red">
        <div className="red-info">
          <h2>Preguntas Generales</h2>
          <div className="bloque-red-info">
            <h4>¿Qué Es?</h4>
            <p>
              La red de consciencias es un <span>espacio gratuito</span> donde podés
              compartir lo haces o buscar lo que necesitas.
            </p>
          </div>
          <div className="bloque-red-info">
            <h4>¿Y por qué se llama red de consciencias? </h4>
            <p>
              Porque solo nos enfocamos en esas personas y empresas más humanas
              que buscan o trabajan con herramientas, experiencias, lugares
              basándose en proyectos más auténticos y reales, que aporten al
              <span> camino del Autoconocimiento.</span>
            </p>
          </div>
          <div className="bloque-red-info">
            <h4>¿Autoconocimiento? </h4>
            <p>
              Sí, esas personas que están transitando un camino de conocerse a
              ellas mismas pueden tener una red donde encontrar a otras que le
              puedan ofrecer experiencias, terapias, espacios, talleres,
              gastronomía y todo tipo de servicios y productos que aporten a su
              propio camino.
            </p>
          </div>
          <div className="bloque-red-info">
            <h4>¿Ósea que cualquiera puede acceder a buscar u ofrecer?</h4>
            <p>
              Sí, cualquiera que lo que busque u ofrezca sea orientado en
              sembrar consciencia basándose en pilares como la empatía, el
              respeto, el entusiasmo y la autenticidad entre otras.
            </p>
          </div>
          <div className="bloque-red-info">
            <h4>¿Qué seria sembrar consciencia? </h4>
            <p>
              Es ese estado donde las personas están presentes, empáticas,
              entusiastas, auténticas donde encuentran el valor de estar vivo en
              el ahora y todo lo que hacen es en construir y alimentar al mundo
              de esa energía. Las formas no son tan importantes para nosotros,
              eso quiere decir que no importa lo que hagas sino como lo hagas y
              cuál es el objetivo detrás de eso que haces.
            </p>
            <p>
              Para nosotros es clave el equilibrio, como por ejemplo creemos en
              “el valor” como un modo de intercambio, pero no creemos en hacer
              todo bajo este objetivo; como tampoco creemos en el actuar por un
              deseo de control, poder o ambición, eso se aleja absolutamente de
              la filosofía de nuestra empresa. Lo nuestro es diferente, porque
              es dar y aportar otro tipo de vibración, más conectada, más viva,
              más libre; libre de ser quienes somos. Yendo un paso más profundo
              comprendemos que somos equilibrio, que somos luz y oscuridad, pero
              es clave que en esta red esa sombra la gestionemos hacia adentro
              sin ser proyectada y direccionada hacia los demás. Por eso
              deseamos que aquí cada uno encuentre esas personas, lugares,
              experiencias, herramientas que les ayude a desarrollar,
              administrar o compartir su propio camino.
            </p>
            <p>
              Entendiendo y respetando siempre que cada uno tiene su propia
              forma de transitarlo.
            </p>
          </div>
          <div className="bloque-red-info">
            <h4>¿Esto último que significa? </h4>
            <p>
              Que no hay un manual de lo que está bien o lo que está mal porque
              cada uno sabe o está en proceso de descubrir lo que necesita para
              su camino. Acá no hay bajadas de lo que deberías hacer, como, por
              ejemplo: “Comer carne está mal” o “Si sos espiritual tenés que
              pensar siempre en positivo”. No, no hay nada de eso. Porque
              sabemos que el camino no es fácil y trasciende cualquier creencia,
              idea o lógica y también entendemos que en este mundo somos muchos
              seres de muchos mundos distintos y eso hace que cada uno deba
              descubrir su propio camino. Pero eso no significa que en esta red
              no haya un filtro para poder mantener un cierto equilibrio
              armónico que respete nuestros valores.
            </p>
          </div>
          <div className="bloque-red-info">
            <h4>
              ¿Y si nunca escuche hablar de todo lo que dicen como la conexión
              con el mundo interior y demás? ¿Puedo participar?
            </h4>
            <p>
              Obvio, la teoría no tiene sentido sin la práctica. Hay muchas
              personas que tienen mucha teoría y conocimiento, pero muy poca
              practica y hay muchas otras que no tienen nada de teoría, pero
              mucha práctica. La teoría no deja de ser una información para
              tratar de explicar lo inexplicable, pero su objetivo final es que
              un ser pueda habitar la vida aquí y ahora, activo, vivo de una
              manera conectada, equilibrada, consciente y libre. Para eso
              debemos conocer nuestra mente, emoción y como opera nuestro propio
              sistema. Si estás en ese camino de conocerte más o ya trabajas o
              querés trabajar aportando herramientas para eso, esta red es para
              vos. Sino es así, quizás haya otras redes o espacios que puedan
              darte la energía que estas buscando hoy en tu camino.
            </p>
          </div>
          <div className="bloque-red-info">
            <h4>Si es gratuita, ¿Cómo se sostiene en términos económicos?</h4>
            <p>
              Nosotros como empresa ofrecemos aparte Servicios de
              Autoconocimiento, Marketing Digital Consciente, Sistemas
              Organizacionales y Experiencias. Quiere decir que si todavía no le
              podés dar forma a tus conocimientos, capacidades, precepciones o
              crees que le falta una vuelta a lo que estás haciendo/ofreciendo
              nosotros te ayudamos a ordenar, comunicar y crear tu propia
              empresa/profesión. Como así también creamos espacios
              experimentales para la autoexploración.
            </p>
          </div>
          <div className="bloque-red-info">
            <h4>¿Tenes alguna pregunta más?</h4>
            <p>Pregúntanos.</p>
          </div>
        </div>
      </Element>
    </div>
  )
}

export default RedInfo
