import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faRoute,
  faSearch,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "../utils/Config";
import { Link, useLocation, useNavigate } from "react-router-dom";
const SearchTours = ({ setSearchResults }) => {
  // style={{margin:"150px 100px 150px 100px"}}
  const navigate = useNavigate()
  const [searchQueries, setSearchQueries] = useState({
    city: "",
    distance: "",
    maxGroupSize: "",
  });
  const handleChange = (e) => {
    setSearchQueries((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  // const location = useLocation()
  // const searchParams = new URLSearchParams(location.search)
  // const city = searchParams.get("city")
  // const distance = searchParams.get("distance")
  // const maxGroupSize = searchParams.get("maxGroupSize")
  const handleSubmit = async (e) => {
    console.log("hvcavchdcvvh")
    e.preventDefault()
    try {
      const { city, distance, maxGroupSize } = searchQueries
      if (setSearchResults) {
        const response = await fetch(`${BASE_URL}/tour/search?city=${city}&distance=${distance}&maxGroupSize=${maxGroupSize}`)
        const { data } = await response.json()
        console.log(data, "jchbqBCJLBHCBHI")
        setSearchResults(data)
      }
      navigate(`/tours?city=${city}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
    } catch (error) {
      console.log(error)
    }
  };

  console.log(searchQueries, "searchQueries");
  return (
    <>
      <div className="container-fluid shadow-lg rounded-pill p-4 ms-5" style={{ width: "70%", maxWidth: "1000px", margin: "auto", marginBottom: "100px" }}>
        <form onSubmit={handleSubmit}>
          <div
            className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-5 align-items-center"
          >
            <div className="col ms-5">
              <div className="row">
                <FontAwesomeIcon
                  className="text-danger"
                  style={{ width: "fit-content" }}
                  icon={faMapMarkerAlt}
                />
                <p className="fw-bold" style={{ width: "fit-content" }}>
                  Location
                </p>
              </div>
              <input
                id="city"
                onChange={handleChange}
                style={{ border: "none", outline: "none" }}
                type="text"
                placeholder="Where are you going?"
              />
            </div>
            <div
              className="verticalLine text-black-50"
              style={{ borderLeft: "1px solid", width: "0", height: "60px" }}
            ></div>
            <div className="col">
              <div className="row">
                <FontAwesomeIcon
                  className="text-danger"
                  style={{ width: "fit-content" }}
                  icon={faRoute}
                />
                <p className="fw-bold" style={{ width: "fit-content" }}>
                  Distance
                </p>
              </div>
              <input
                id="distance"
                onChange={handleChange}
                className="border-0"
                style={{ border: "none", outline: "none" }}
                type="number"
                placeholder="Distance k/m"
              />
            </div>
            <div
              className="verticalLine text-black-50"
              style={{ borderLeft: "1px solid", width: "0", height: "60px" }}
            ></div>
            <div className="col">
              <div className="row align-items-baseline">
                <FontAwesomeIcon
                  className="text-danger"
                  style={{ width: "fit-content" }}
                  icon={faUserGroup}
                />
                <p className="fw-bold" style={{ width: "fit-content" }}>
                  Max People
                </p>
              </div>
              <input
                id="maxGroupSize"
                onChange={handleChange}
                className="border-0"
                style={{ border: "none", outline: "none" }}
                type="number"
                placeholder="0"
              />
            </div>
            <div className="col" >
              {/* <Link to={`/tours/search?city=${searchQueries.city}&distance=${searchQueries.distance}&maxGroupSize=${searchQueries.maxGroupSize}`}> */}
              <button type="submit" className="border-0 bg-white" style={{ marginLeft: "100px" }} >
                <FontAwesomeIcon className="fs-3 text-danger" icon={faSearch} />
              </button>
              {/* </Link> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchTours;