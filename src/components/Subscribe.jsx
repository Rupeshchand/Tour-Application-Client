import React from "react";
import tourist from "../assets/images/male-tourist.png"
const Subscribe = () => {
  return (
    <>
      <div className="container-fluid mb-5" style={{ backgroundColor: "#C9E7F1" }}>
        <div className="row align-items-center">
          <div className="col p-5">
            <h3 className="fs-1 mb-4">
              Subscribe now for usefull <br />
              travelling information
            </h3>
            <div
              className="emailSection shadow bg-white rounded p-2 w-100"
            >
              <div className="row align-items-center" style={{ columnGap: "49%" }}>
                <div className="col">
                  <input
                    style={{border:"none",outline:"none"}}
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col">
                  <button className="btn btn-warning rounded text-white p-2">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <p className="fs-5 mt-5">Stay updated with our latest collections and exclusive deals! Subscribe now and never miss out on exciting offers!</p>

          </div>
          <div className="col p-5">
            <img className="img-fluid"src={tourist} alt="tourist"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
