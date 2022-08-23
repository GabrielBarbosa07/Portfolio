import React from 'react'
import { Heading } from '../common/Heading'
import { contato } from '../data/gbdata'

export const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <Heading title="Entre em Contato!" />

                    <div className="content flexsb">

                        <div className="right">
                            <form >
                                <div className="flex">
                                    <input type="text" placeholder='Nome' data-aos="zoom-in-down" />
                                    <input type="email" placeholder='Email' data-aos="zoom-in-up" />
                                </div>
                                <input type="text" placeholder='Sugestão' data-aos="zoom-in-up" />
                                <textarea data-aos="zoom-in-down" cols="30" rows="10"></textarea>
                                <button className='buttonDefault' data-aos="zoom-in-down">Enviar</button>
                            </form>
                        </div>

                        <div className="left">
                            {contato.map((item) => (
                                <div className="box" data-aos="zoom-in-down" key={item.id}>
                                    <i>{item.icon}</i>
                                    <p>{item.text1}</p>
                                    <p>{item.text2}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
