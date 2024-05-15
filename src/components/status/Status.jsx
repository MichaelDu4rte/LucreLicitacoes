import './Status.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Img from '../../assets/team.jpg'

function Status() {

    useEffect(() => {
        Aos.init({duration: 1000})
    }) 
  return (
    <section className="status">
        <div className="status-container wrapper">
           <div className="status-left"  data-aos="fade-right">
            <h2>Nosso Método - Passo a Passo</h2>
                <p>Através da vasta experiência da nossa equipe, identificamos que o sistema de filtragem muitas vezes deixa de selecionar diversos editais dentro da nossa área de fornecimento.</p>
                <p>Realizamos uma avaliação minuciosa dos editais por uma equipe especializada em tecnologia e direito. Utilizamos automação por robôs eficientes para identificar e analisar os projetos nos quais pretendemos participar.</p>
                <p>Este processo resulta em uma significativa taxa de sucesso, com a obtenção de projetos vantajosos e margens de lucro seguras, garantindo um crescimento sustentável para nossos clientes.</p>
                <a href="" className='btn'>Fale com um especialista</a>   
           </div>
           <div className="status-right"  data-aos="fade-left">
            <img src={Img} alt="" />
           </div>
        </div>
    </section>
  )
}

export default Status