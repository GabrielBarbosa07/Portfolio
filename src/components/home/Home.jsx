import React from 'react'
import { About } from '../pages/About'
import { Services } from '../pages/Services'
import { Hero } from "./Hero"
import { Counter } from '../pages/Counter'
import { Portifolio } from '../pages/Portifolio'
import { Depoiments } from '../pages/Depoiments'
import { Blog } from '../pages/Blog'
import { Contact } from '../pages/Contact'
import { ScrollUp } from './ScrollUp'
import { Skills } from '../pages/Skills'

export const Home = () => {
  
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills/>
      <Counter />
      <Portifolio />
      <Depoiments />
      <Blog />
      <Contact />
      <ScrollUp/>
    </>
  )
}
