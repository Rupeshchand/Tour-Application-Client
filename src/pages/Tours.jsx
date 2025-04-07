import React, { useEffect, useState } from 'react'

import img from "../assets/images/tour.jpg"
import SearchTours from "../components/SearchTours"
import AllTours from '../components/AllTours'
import Subscribe from "../components/Subscribe"
import { useLocation } from 'react-router-dom'
const Tours = () => {
  const [searchResults,setSearchResults] = useState(null)
  // const location = useLocation()
  // useEffect(()=>{
  //    const searchParams = new URLSearchParams(location.search)
  //    const city = searchParams.get("city")
  //    const distance = searchParams.get("distance")
  //    const maxGroupSize = searchParams.get("maxGroupSize")
  // })
  
  console.log(searchResults,"searchResults")
  return (
    <>
      <div className='position-relative text-center text-white mb-5'>
        <img className='w-100' style={{ height: "300px" }} src={img} alt="image" />
        <div className='position-absolute top-0 start-0 w-100 bg-dark opacity-50' style={{ height: "300px" }}></div>
        <h1 className='position-absolute top-50 start-50 translate-middle'>All Tours</h1>
      </div>
      <SearchTours setSearchResults={setSearchResults}/>
      <AllTours searchTourResults={searchResults} />
      <Subscribe />
    </>
  )
}

export default Tours