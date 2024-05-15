import './Contact.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function Contact() {
    useEffect(() => {
        Aos.init({duration: 1000})
    })

  return (
    <section className='contact'>
        <div className="contact-container wrapper">
             <h2 data-aos="fade-left">ENTRE EM CONTATO <br></br>CONVERSE COM A NOSSA EQUIPE</h2>
             <p data-aos="fade-right">
             Quer impulsionar o crescimento dos seus negócios e assegurar a prosperidade da sua empresa no setor governamental?
              Não perca tempo, entre em contato conosco hoje mesmo. Estamos prontos para ser seu parceiro em todas as etapas desse processo
             </p>
             <a href="" className='btn' data-aos="fade-left">Fale com um especialista </a>
        </div>
    </section>
  )
}

export default Contact