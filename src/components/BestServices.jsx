import React from "react";
import weather from "../assets/images/weather.png";
import tourGuide from "../assets/images/guide.png";
import customization from "../assets/images/customization.png";
const BestServices = () => {
  return (
    <>
      <div className="row gap-5 w-100 p-5" style={{marginBottom:"50px"}}>
        <div className="col">
          <p className="fst-italic text-danger">What we serve</p>
          <h2 className="fw-semibold">We offer our <br />Best Services</h2>
        </div>
        <div className="col border border-warning rounded-2 border-start-0 border-top-0">
          <img className="bg-warning rounded-circle p-2" style={{width:"50px"}} src={weather} alt="weather" />
          <p className="fw-bold" style={{ width: "fit-content" }}>
            Calculate Weather
          </p>
          <p className="text-black-50">
            Plan your trip without worrying about unexpected weather changes.
            Our advanced weather forecasting tool provides real-time updates,
            ensuring you pick the perfect day for your adventure.
          </p>
        </div>
        <div className="col border border-warning rounded-2 border-start-0 border-top-0">
          <img className="bg-warning rounded-circle p-2" style={{width:"50px"}} src={tourGuide} alt="tourGuide" />
          <p className="fw-bold" style={{ width: "fit-content" }}>
            Best tour guide
          </p>
          <p className="text-black-50">
            Discover top-rated, expert tour guides who know the best spots,
            hidden gems, and local insights. Whether you're exploring a city or
            venturing into nature, we connect you with experienced guides for a
            memorable journey.
          </p>
        </div>
        <div className="col border border-warning rounded-2 border-start-0 border-top-0">
          <img className="bg-warning rounded-circle p-2 " style={{width:"50px"}} src={customization} alt="customization" />
          <p className="fw-bold" style={{ width: "fit-content" }}>
            Customization
          </p>
          <p className="text-black-50">
            Your trip, your way! We offer fully customizable travel experiences,
            from accommodation to activities. Choose your preferences, and we'll
            tailor an itinerary that suits your budget and travel style.
          </p>
        </div>
      </div>
    </>
  );
};

export default BestServices;
