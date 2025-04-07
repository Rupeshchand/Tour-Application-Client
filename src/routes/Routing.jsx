import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import About from '../pages/About'
import Tours from '../pages/Tours'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SingleTour from '../pages/SingleTour'
import ReviewComponent from '../components/ReviewComponent'
import ThankYouPage from '../pages/ThankYouPage'
import ReviewContextProvider from '../context/ReviewContext'
const Routing = () => {
  return (
    <ReviewContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/search" element={<Tours />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tour/:id" element={<SingleTour />} />
        <Route path="/createreview/:userId" element={<ReviewComponent />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </ReviewContextProvider>

  )
}

export default Routing