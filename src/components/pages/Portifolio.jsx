import React, { useState } from 'react';
import { portifolio } from '../data/gbdata';
import { Heading } from "../common/Heading";

const allCategory = ["Todos", ...new Set(portifolio.map((item) => item.category))]

export const Portifolio = () => {
  const [list, setList] = useState(portifolio)
  const [category, setCategory] = useState(allCategory)

  const filterItems = (category) => {
    const newItems = portifolio.filter((item) => item.category === category)
    setList(newItems)

    if (category === "Todos") {
      setList(portifolio)
    }
  }

  return (
    <>
      <article className='portifolio'>

        <div className="container">
          <Heading title="Portifólio" />
          <div className="catButton grid3">
            {category.map((category) => (
              <button className='primaryBtn' onClick={() => filterItems(category)} data-aos="zoom-out-down" key={category}>
                {category}
              </button>
            ))}
          </div>

          <div className="content grid3">

            {list.slice(0, 6).map((items) => (
              <div className="box" data-aos="fade-up" key={items.id}>
                <div className="img scale">
                  <img src={items.cover} alt="" />
                </div>
              </div>
            ))}

          </div>
        </div>

      </article>
    </>
  )
}
