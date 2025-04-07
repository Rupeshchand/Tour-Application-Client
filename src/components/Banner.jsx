import React from "react";
import worldImg from "../assets/images/world.png";
import banner1 from "../assets/images/hero-img01.jpg";
// import bannerVideo from "../assets/images/hero-video.mp4";
import banner3 from "../assets/images/hero-img02.jpg";
const Banner = () => {
  return (
    <>
      <div className="row p-5" style={{marginTop:"50px", marginBottom:"100px", width:"100%"}}>
        <div className="col">
          <button
            className="btn btn-warning rounded-pill fst-italic"
            style={{ width: "200px", height: "35px" }}
          >
            Know before you go
          </button>
          <img
            src={worldImg}
            alt="world"
            style={{ width: "40px", height: "35px" }}
          />
          <h1 className="fw-semibold mt-3" style={{fontSize:"50px"}}>
            Travelling opens <br/>the doors to <br/>creating {" "}
            <span className="text-warning">memories</span>
          </h1>
          <p className="fs-5 text-black-50">
            Traveling is more than just moving from one place to another; it is
            an experience that enriches the soul, broadens the mind, and creates
            lifelong memories. Whether exploring a new city, immersing in
            different cultures, or simply escaping the routine, traveling offers
            endless opportunities for adventure and self-discovery.
          </p>
        </div>
        <div className="col d-flex gap-4 justify-content-center">
          <img
            className="border border-warning rounded-4"
            src={banner1}
            alt="image"
            style={{ width: "180px", height: "450px", borderRadius: "30px" }}
          />
          <video
            className="border border-warning rounded-4"
            src= "https://res.cloudinary.com/dbe2aw437/video/upload/v1744030367/hero-video_eh4x6y.mp4"
            style={{
              width: "180px",
              height: "450px",
              objectFit: "cover",
              borderRadius: "30px",
              transform: "translateY(30px)"
            }}
            autoPlay
            loop
            controls
          ></video>
          <img
            className="border border-warning rounded-4"
            src={banner3}
            alt="image"
            style={{ width: "180px", height: "450px", borderRadius: "30px", transform: "translateY(65px)"}}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
