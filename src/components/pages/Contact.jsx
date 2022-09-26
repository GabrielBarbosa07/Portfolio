import React, { useState } from 'react'
import { Heading } from '../common/Heading'
import { contato } from '../data/gbdata'
import emailjs from "@emailjs/browser"

export const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [suggestion, setSuggestion] = useState("")
    const [message, setMessage] = useState("")

    function sendEmail(e) {
        e.preventDefault()

        if (name === "" || email === "" || message === "") {
            alert(`Preencha todos os campos`)
            return
        }

        const templateParams = {
            from_name: name,
            suggestion,
            message,
            email
        }

        emailjs.send("service_kkipa27", "template_7lyzqet", templateParams, "myuSVVgifW2GlXR4c")
            .then((res) => {
                setName("")
                setEmail("")
                setSuggestion("")
                setMessage("")
            }, (err) => {
                console.log("ERRO:", err);
            })

            alert("Email Enviado!")
    }

    return (
        <>
            <div className="contact">
                <div className="container">
                    <Heading title="Entre em Contato!" />

                    <div className="content flexsb">

                        <div className="right">
                            <form onSubmit={sendEmail}>
                                <div className="flex">
                                    <input
                                        type="text"
                                        placeholder='Nome'
                                        data-aos="zoom-in-down"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                    <input
                                        type="email"
                                        placeholder='Email'
                                        data-aos="zoom-in-up"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <input
                                    type="text"
                                    placeholder='Sugestão'
                                    data-aos="zoom-in-up"
                                    value={suggestion}
                                    onChange={(e) => setSuggestion(e.target.value)}
                                />
                                <textarea
                                    data-aos="zoom-in-down"
                                    cols="30"
                                    rows="10"
                                    placeholder='Mensagem'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}></textarea>
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
