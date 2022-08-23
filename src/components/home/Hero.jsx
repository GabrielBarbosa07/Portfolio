import React from 'react'
import { home, curriculo } from '../data/gbdata'
import Typewriter from "typewriter-effect"

export const Hero = () => {
  return (
    <>
      <section className='hero'>

        {home.map((val) => (
          <div className="heroContainer" key={val.id}>
            <h3 data-aos="fade-right">{val.text}</h3>
            <h1>
              <Typewriter options={{ strings: [`${val.name}`, `${val.post}`, `${val.design}`], autoStart: true, loop: true }} />
            </h1>
            <p data-aos="fade-left">{val.desc}</p>
            <button className='CVBtn' data-aos="fade-up-right">
            <a href={curriculo.file} download={curriculo.file}>Baixar CV</a>
            </button>
          </div>
        ))}

      </section>
    </>
  )
}
