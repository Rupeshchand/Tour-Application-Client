import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from "../pages/Home"
import About from '../pages/About'
import Tours from '../pages/Tours'
import Login from '../pages/Login'
import Register from '../pages/Register'
const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default Routing