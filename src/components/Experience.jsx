import React from "react";
import experience from "../assets/images/experience.png"

const Experience = () => {
  return (
    <>
      <div className="container-fluid ms-5" style={{width:"96%", marginBottom:"100px"}}>
        <div className="row">
          <div className="col">
            <button className="btn btn-warning fst-italic rounded-pill mb-3">
              Experience
            </button>
            <h2 className="fw-semibold mt-3">
              With our all experience <br />
              we will serve you
            </h2>
            <p className="text-black-50 fs-6">
              With all our experience, we are committed to providing you with
              exceptional service. Our expertise ensures a seamless and
              memorable experience tailored to your needs. Let us serve you with
              dedication and excellence.
            </p>
            <div className="row">
                <div className="col">
                    <button className="btn text-white p-4 fs-5" style={{backgroundColor: "orange"}}> 12k+</button>
                    <p>Successfull Trips</p>
                </div>
                <div className="col">
                    <button className="btn text-white p-4 fs-5" style={{backgroundColor: "orange"}}> 2k+</button>
                    <p>Regular clients</p>
                </div>
                <div className="col">
                    <button className="btn text-white p-4 fs-5" style={{backgroundColor: "orange"}}> 15 </button>
                    <p>Years experience</p>
                </div>
            </div>
          </div>
          <div className="col">
            <img src={experience} alt="experience" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
