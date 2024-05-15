import './Earnings.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Img from '../../assets/self.jpg'
import { useEffect } from 'react'


function Earnings() {
    useEffect(() => {
        Aos.init({duration: 1000})
    })

  return (
    <section className="earnings">
        <div className="earnings-container wrapper">
            <div className="earnings-left" data-aos="fade-right">
                <img src={Img} alt="" />
            </div>
            <div className="earnings-right"  data-aos="fade-left">
                <h2>Estratégia de Prospeção de Projetos</h2>
                <p>
                Realizamos uma prospecção incansável, revisando em média 600 editais por dia em uma 
                ampla variedade de setores e atividades. Dessa seleção, cuidadosamente filtramos os 
                5% a 10% dos melhores projetos na área de informática. Além disso, o governo federal
                 lança diariamente entre 300 a 500 licitações, dos quais, de 5% a 10% são editais 
                 de informática. Estes são minuciosamente analisados por nossa equipe especializada, 
                 garantindo uma seleção precisa e estratégica para nossos clientes.
                </p>
                <a href="" className='btn'>Fale com um especialista </a>
            </div>
        </div>
    </section>
  )
}

export default Earnings