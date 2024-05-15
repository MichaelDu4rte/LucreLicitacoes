import './About.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Img from '../../assets/profit.jpg'
import { useEffect } from 'react'


function About() {
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
                <h2>Sobre nós - Lucre com licitações</h2>
                <p>A "Lucrando com Licitações" foi fundada por um grupo especializado em vendas governamentais, acumulando mais de 15 anos de experiência. Nosso foco está em garantir uma participação bem-sucedida em processos licitatórios, proporcionando alta rentabilidade e simplificando todo o processo para nossos clientes.
                    Com o intuito de promover o crescimento de novos parceiros, desenvolvemos um projeto inovador que oferece uma modalidade de investimento segura e descomplicada. Estamos comprometidos em tornar o caminho para o sucesso no mercado governamental mais acessível e lucrativo para todos os envolvidos.
                </p>
                <a href="" className='btn'>Fale com um especialista </a>
            </div>
        </div>
    </section>
  )
}

export default About