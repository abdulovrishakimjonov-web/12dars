import React from 'react'
import Header from '../components/Header'
import Showcase from '../components/Showcese'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Contact from '../components/Contact'

const ALLPRODUCTS = () => {
  return (
    <div>
      <Showcase/>
      <Hero/>
      <Navbar/>
      <About/>
      <Contact/>
    </div>
  )
}

export default ALLPRODUCTS