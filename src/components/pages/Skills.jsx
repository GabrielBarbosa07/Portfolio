import React from 'react'
import { Heading } from '../common/Heading'
import { experience, skills } from '../data/gbdata'

export const Skills = () => {
    return (
        <div className='skills'>

            <div className="container">
                <div className="text">
                    <Heading title="Skills & Experiências" />
                </div>

                <div className="content">
                    <div className="skill-content">
                        {skills.map((item) => (

                            <div className="item" key={item.id} data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">

                                <div className="image">

                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <img src={item.cover} alt={item.description} />
                                    </a>

                                </div>

                                <p className="item-text">{item.description}</p>

                            </div>
                        ))}
                    </div>

                    <div className="experience-content">
                        {experience.map((item) => (
                            <div className="item-ex" key={item.id} data-aos="zoom-out-left">

                                <div className="year">{item.year}</div>

                                <div className="title">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
