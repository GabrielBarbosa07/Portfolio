import { FormatQuote } from '@mui/icons-material'
import React from 'react'
import { depoiments } from '../data/gbdata'
//importar as arrows
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Depoiments = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500
  };

  

  return (
    <>
      <div className="depoiments hero">
        <div className="container">
          <Slider {...settings}>
            {depoiments.map((val) => (
              <div className="box" key={val.id}>
                <i data-aos="zoom-out-up">
                  <FormatQuote className='i' />
                </i>
                <p data-aos="zoom-out-down">{val.text}</p>
                <div className="img">
                  <img src={val.image} alt="" data-aos="zoom-out-right" />
                </div>
                <h3 data-aos="zoom-out-left">{val.name}</h3>
                <label data-aos="zoom-out">{val.post}</label>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}
