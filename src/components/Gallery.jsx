import React from "react";
import image1 from "../assets/images/gallery-01.jpg";
import image2 from "../assets/images/gallery-02.jpg";
import image3 from "../assets/images/gallery-03.jpg";
import image4 from "../assets/images/gallery-04.jpg";
import image5 from "../assets/images/gallery-05.jpg";
import image6 from "../assets/images/gallery-06.jpg";
import image7 from "../assets/images/gallery-07.jpg";
import image8 from "../assets/images/gallery-08.jpg";
import '../Gallery.css'
const Gallery = () => {
  return (
    <>
      <div
        className="container-fluid px-5"
        style={{ width: "96%", marginBottom: "100px" }}
      >
        <button className="btn btn-warning fst-italic rounded-pill mb-3">
          Gallery
        </button>
        <h2 className="fw-semibold mt-3 mb-5">Visit our customers' tour gallery</h2>

        <div className="row g-3">
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center">
            <img src={image1} alt="image1" className="rounded img-fluid transImage" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center">
            <img src={image2} alt="image2" className="rounded img-fluid transImage" style={{height:"80%"}}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center">
            <img src={image3} alt="image3" className="rounded img-fluid transImage" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center">
            <img src={image4} alt="image4" className="rounded img-fluid transImage" style={{height:"80%"}}/>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center">
            <img src={image5} alt="image5" className="rounded img-fluid transImage" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center position-relative">
            <img src={image6} alt="image6" className="rounded img-fluid position-absolute transImage" style={{height:"50%", top:"-15%"}}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center">
            <img src={image7} alt="image7" className="rounded img-fluid transImage" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center position-relative">
            <img src={image8} alt="image8" className="rounded img-fluid position-absolute transImage" style={{ width:"95%", top:"-15%"}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
