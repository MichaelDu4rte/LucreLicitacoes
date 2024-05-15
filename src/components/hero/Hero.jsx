import './Hero.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Hero() {

    useEffect(() => {
        Aos.init({duration: 1000})
    })

  return (
   <section className='hero'>
    <div className="hero-container wrapper">
        <div className="hero-box" data-aos="fade-right">
            <h1>Lucre Com Licitações</h1>
            <h1>Venda mais para o governo</h1>
            <p>Potencialize o seu potencial de faturamento em licitações ao contar<br></br> com uma equipe de especialistas altamente qualificados e eficientes.<br></br> Não perca mais tempo, terceirize hoje mesmo e garanta processos <br></br>ágeis e resultados superiores. O sucesso está ao seu alcance.

            </p>
            <a href="" className='btn'>Fale com um especialista </a>
        </div>
    </div>
   </section>
  )
}

export default Hero