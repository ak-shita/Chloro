import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Part2 from './components/Part2'
import Part3 from './components/Part3'
import Part4 from './components/Part4'
import Part5 from './components/Part5'
import Part6 from './components/Part6'
import Part7 from './components/Part7'
import Part10 from './components/Part10'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
      <Part7 />
      <Part10 />
      <Footer />
    </div>
  )
}

export default App