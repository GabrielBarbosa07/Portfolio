import React from 'react'
import { about, curriculo } from '../data/gbdata'
import { Heading } from '../common/Heading'

export const About = () => {
    return (
        <>
            <section className='about'>

                <div className="container flex">
                    {about.map((val, i) => (
                        <div key={i}>
                            <div className="left">
                                <div className="img" data-aos="fade-down-right">
                                    <img src={val.cover} alt="" />
                                </div>
                            </div>
                            <div className="right" data-aos="fade-down-left">
                                <Heading title="Sobre Mim" />
                                <p>{val.desc}</p>
                                <p>{val.desc1}</p>
                                <div className="btncenter">
                                    <button className='CVBtn'>
                                        <a href={curriculo.file} download={curriculo.file}>Baixar CV</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}
