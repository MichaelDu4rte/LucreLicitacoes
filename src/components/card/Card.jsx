import './Card.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { cardInfo } from '../../Data'

import { useEffect } from 'react'

function Card() {
    useEffect(() => {
        Aos.init({duration: 1000})
    })

  return (
    <section className='card'>
        <h2 data-aos="fade-up">Lutaremos até o fim pela sua vitória</h2>

        <div className="card-container wrapper">
            {
                cardInfo.map(({ name, desc}) => (
                    <div className="card-info"  data-aos="fade-up">
                        <h3>{name}</h3>
                        <span>{desc}</span>
                        <a href="" className='btn'>Fale com um especialista </a>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Card