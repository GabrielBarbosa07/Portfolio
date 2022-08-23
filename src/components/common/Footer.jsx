import React from 'react'
import { social } from '../data/gbdata'

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="foot-icon">
                    {social.map((item) => (

                        <i key={item.id} data-aos="zoom-in-left">
                            <a href={item.url} target="_blank" rel="noreferrer">{item.icon}</a>
                        </i>
                    ))}
                </div>

                <p data-aos="zoom-in-right">Todos os Direitos Reservados
                    <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
                </p>
                
            </footer>
        </>
    )
}
