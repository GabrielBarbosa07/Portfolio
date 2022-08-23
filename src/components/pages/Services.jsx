import React from 'react'
import { Heading } from '../common/Heading'
import { services } from '../data/gbdata'

export const Services = () => {
    return (
        <>
            <section className='services'>

                <div className="container">

                    <Heading title="Serviços" />

                    <div className="content grid3">
                        {services.map((item) => (
                            <div className="box scale" data-aos="flip-left" key={item.id}>
                                <i>{item.icon}</i>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>

            </section>
        </>
    )
}