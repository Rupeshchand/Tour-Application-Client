import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASE_URL } from "../utils/Config";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useFetch from "./CustomeHook";
const FeaturedTours = () => {
  const { data } = useFetch(`${BASE_URL}/tour/getalltours`);
  const toursData = data?.tours || []
  const reviewsDetails = data?.reviewsDetails || []
  const mergeToursData = toursData.map((tour,index) => ({
    ...tour,
    reviewCount: reviewsDetails?.[index]?.reviewCount || 0,
    avgRating : reviewsDetails?.[index]?.avgRating || 0

  }))
  console.log(toursData,"data ")
  const featuredTours = mergeToursData.filter((data) => data.featured );
  console.log(featuredTours);
  return (
    <>
      <div
        className="container-fluid featuredTours p-5"
        style={{ marginBottom: "100px" }}
      >
        <button className="btn btn-warning fst-italic rounded-pill mb-4">
          Explore
        </button>
        <h2 className="fw-semibold mb-4">Our Featured Tours</h2>
        {featuredTours && featuredTours.length > 0 ? (
          <>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-4">
              {featuredTours.map((tourData) => (
                <div className="col" key={tourData._id}>
                  <div className="card position-relative border-0 shadow">
                    <div className="position-absolute top-0 end-0 bg-warning text-white px-2 py-1 rounded">
                      Featured
                    </div>{" "}
                    <img
                      src={tourData.photo}
                      className="card-img-top"
                      alt={tourData.title}
                    />
                    <div className="card-body lh-lg">
                      <div
                        className="row d-flex justify-content-between"
                        style={{ gap: "6rem" }}
                      >
                        <div className="col d-flex align-items-center">
                          <FontAwesomeIcon
                            className="text-warning me-1"
                            icon={faMapMarkerAlt}
                          />
                          <p className="mb-0">{tourData.city}</p>
                        </div>
                        <div className="col d-flex align-items-center">
                          <FontAwesomeIcon
                            className="text-warning me-1"
                            icon={faStar}
                          />
                          <p className="mb-0">{tourData.avgRating} ({tourData.reviewCount})</p>
                        </div>
                      </div>

                      <h5 className="card-title fw-bold">{tourData.title}</h5>
                      <div className="card-price">
                        <span className="text-warning fw-bold fs-4">
                          ${tourData.price}{" "}
                        </span>
                        <span className="text-black-50 fw-bold fs-4">
                          /per person
                        </span>
                      </div>
                      <Link to={`/tour/${tourData._id}`}>
                        <button className="btn btn-warning text-white">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-center p-3">Sorry! No data found</h2>
          </>
        )}
      </div>
    </>
  );
};

export default FeaturedTours;
