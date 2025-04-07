import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../assets/images/ava-1.jpg";
import client2 from "../assets/images/ava-2.jpg";
import client3 from "../assets/images/ava-3.jpg";
import client4 from "../assets/images/avatar.jpg";
// export default function SimpleSlider() {

//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }
const ClientsLove = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <>
      <div
        className="container-fluid px-5 sliderContainer"
        style={{ width: "96%", marginBottom: "100px" }}
      >
        <button className="btn btn-warning fst-italic rounded-pill mb-3">
          Clients Love
        </button>
        <h2 className="fw-semibold mt-3 mb-4">
          What our clients say about us
        </h2>
        <div className="slider">
          <Slider {...settings}>
            <div className="slide me-3">
              <p className="text-wrap p-2">
                "This tour app made my trip effortless! The filtering options
                helped me find the perfect destinations, and the real-time
                weather updates were a game-changer. I loved how easy it was to
                book tours, and the guides were super friendly. Definitely
                recommending it to my friends!".
              </p>
              <div className="row">
                <div className="col">
                  <img
                    className="img-fluid rounded"
                    src={client1}
                    alt="client1"
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="col">
                  <p className="fw-bold">Peter Alice</p>
                  <p>Customer</p>
                </div>
              </div>
            </div>
            <div className="slide me-3">
              <p className="text-wrap p-2">
                "A fantastic experience from start to finish! I was able to
                customize my entire trip, from accommodation to activities, and
                everything went smoothly. My family had an amazing time, and we
                can’t wait to use this app for our next vacation!".
              </p>
              <div className="row">
                <div className="col">
                  <img
                    className="img-fluid rounded"
                    src={client2}
                    alt="client1"
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="col">
                  <p className="fw-bold">Stella Alice</p>
                  <p>Customer</p>
                </div>
              </div>
            </div>
            <div className="slide me-3">
              <p className="text-wrap p-2">
                "I usually struggle to find good tour guides when traveling
                alone, but this app connected me with some of the best! The
                reviews and ratings helped me choose the right experiences, and
                the tour guides were knowledgeable and friendly. Highly
                recommended!"
              </p>
              <div className="row">
                <div className="col">
                  <img
                    className="img-fluid rounded"
                    src={client3}
                    alt="client1"
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="col">
                  <p className="fw-bold">Johny Dep</p>
                  <p>Customer</p>
                </div>
              </div>
            </div>
            <div className="slide ms-2">
              <p className="text-wrap p-2">
                "Affordable and super easy to use! I loved the detailed
                itineraries, and the booking process was seamless. The customer
                support was also very responsive when I had a question about my
                booking. I’ll definitely use this app for my future trips!"
              </p>
              <div className="row">
                <div className="col">
                  <img
                    className="img-fluid rounded"
                    src={client4}
                    alt="client1"
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="col">
                  <p className="fw-bold">Peter Parker</p>
                  <p>Customer</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ClientsLove;
