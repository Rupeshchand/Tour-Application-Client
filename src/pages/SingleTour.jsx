import React, { useContext, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../components/CustomeHook";
import { BASE_URL } from "../utils/Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStreetView,
  faStar,
  faMapMarkerAlt,
  faSackDollar,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import ReviewComponent from "../components/ReviewComponent";
import { AuthContext } from "../context/AuthContext";
import { ReviewContext } from "../context/ReviewContext";

const SingleTour = () => {
  const { user } = useContext(AuthContext)
  const { id } = useParams();
  const { data } = useFetch(`${BASE_URL}/tour/getsingletour/${id}`);
  const navigate = useNavigate()
  const [bookingData, setBookingData] = useState({
    fullName: "",
    phone: null,
    bookAt: "",
    guestSize: 1
  })
  const [fetchedReviewsData, setReviewData] =  useState([])
  console.log(fetchedReviewsData)
  const tourData = data?.data;

  const handleChange = (e) => {
    setBookingData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }
  console.log(bookingData, "bookingData")

  const handleSubmit = async () => {
    if (user === null) {
      alert("Please login for booking")
    }
    try {
      const token = localStorage.getItem("token")
      const response = await fetch(`${BASE_URL}/booking/createBooking/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(bookingData),
        credentials: "include"
      })
      const data = await response.json()
      if (data && data.success === true) {
        navigate("/thank-you")
      }
      if (data?.success) {
        navigate("/thank-you")
      }
      console.log(data, "42")
    } catch (error) {
      console.log(error)
    }
  }
  if (!tourData)
    return <h1 className="text-center p-5">"No tour data available"</h1>;
  console.log(tourData, "single");
  // const avgRatings = useMemo(() => {
  //   if (!Array.isArray(reviewData) || reviewData.length === 0) return 0
  //   const total = reviewData.reduce((acc, review) => review.rating + acc, 0)
  //   return total / reviewData.length
  // }, [reviewData])
  return (
    <>
      <div className="container-fluid px-5" style={{ marginTop: "70px" }}>
        <div className="row g-5">
          {/* tour image */}
          <div className="col-8 ms-5">
            <img
              className="img-fluid rounded"
              src={tourData.photo}
              alt={tourData.title}
              style={{ width: "100%" }}
            />
          </div>
          {/* tour booking */}
          <div className="col-3 border rounded p-5">
            <div className="d-flex align-items-baseline">
              <h1>
                <span className="fw-semibold">{tourData.price}</span>{" "}
                <span className="fs-5 text-black-50">/per person</span>
              </h1>
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <span className="ms-2">{fetchedReviewsData.avgRatings}({fetchedReviewsData.count})</span>{" "}
            </div>
            <hr className="w-100" />
            <h4 className="fw-semibold">Information</h4>
            <form className="container border p-4">
              <div className="mb-3">
                <input
                  className="rounded"
                  onChange={handleChange}
                  id="fullName"
                  value={bookingData.fullName}
                  style={{
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid #cccccc",
                  }}
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-3">
                <input
                  className="rounded"
                  onChange={handleChange}
                  id="phone"
                  type="number"
                  value={bookingData.phone}
                  style={{
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid #cccccc",
                  }}
                  placeholder="Phone Number"
                />{" "}
                <br />
              </div>
              <div className="mb-3">
                <input
                  className="rounded me-4 text-black-50"
                  onChange={handleChange}
                  id="bookAt"
                  value={bookingData.bookAt}
                  style={{
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid #cccccc",
                  }}
                  type="date"
                  placeholder="dd-mm-yyyy"
                />
              </div>
              <div className="mb-3">
                <input
                  className="rounded"
                  id="guestSize"
                  value={bookingData.guestSize}
                  onChange={handleChange}
                  style={{
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid #cccccc",
                  }}
                  type="number"
                  placeholder="Number of people"
                />
              </div>
            </form>
            <div className="container mt-5" style={{ width: "150%" }}>
              <div className="row">
                <div className="col">
                  <p className="text-black-50 fw-bold">
                    {tourData.price} x 1 person
                  </p>
                </div>
                <div className="col">
                  <p className="text-black-50 fw-bold">{tourData.price * 1}</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="text-black-50 fw-bold">Service charges</p>
                </div>
                <div className="col">
                  <p className="text-black-50 fw-bold">10</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="fw-bold">Total</p>
                </div>
                <div className="col">
                  <p className="fw-bold">{tourData.price * bookingData.guestSize + 10}</p>
                </div>
              </div>
            </div>
            <div className="bookNowBtn text-center">
              <button onClick={handleSubmit} className="btn btn-warning text-white rounded-pill w-100">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="border rounded mt-5  p-5"
        style={{ width: "61%", lineHeight: "50px", marginLeft: "95px" }}
      >
        <h3>{tourData.title}</h3>
        <div className="row">
          <div className="col p-0">
            <FontAwesomeIcon className="text-warning" icon={faStar} />
            <span className="ms-2">{fetchedReviewsData.avgRatings}({fetchedReviewsData.count})</span>
          </div>
          <div className="col ">
            <FontAwesomeIcon icon={faStreetView} />
            <span className="ms-2">{tourData.address}</span>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex align-items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p className="mb-0 ms-2">{tourData.city}</p>
          </div>
          <div className="col d-flex align-items-center">
            <FontAwesomeIcon icon={faSackDollar} />
            <p className="mb-0 ms-2">{tourData.price} per person</p>
          </div>
          <div className="col d-flex align-items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p className="mb-0 ms-2">{tourData.distance}</p>
          </div>
          <div className="col d-flex align-items-center">
            <FontAwesomeIcon icon={faUserGroup} />
            <p className="mb-0 ms-2">{tourData.maxGroupSize} people</p>
          </div>
        </div>
        <h3>Description</h3>
        <p>{tourData.desc}</p>
      </div>
      <ReviewComponent tourId={id} setReviewData={setReviewData}/>
    </>
  );
};

export default SingleTour;
