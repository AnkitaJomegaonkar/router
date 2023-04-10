import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

import Contact from './Contact'
import About from './About'
import NavBar from './NavBar'
import News1 from './News1'


const RountingCom = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>

              <Route path="/"  element={<Home/>} />
              <Route path="/News"   element={<News1/>} />
              <Route path="/contact"  element={<Contact/>} />
              <Route path="/about"  element={<About/>} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default RountingCom
