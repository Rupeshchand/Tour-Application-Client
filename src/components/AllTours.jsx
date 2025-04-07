import React, { useState } from "react";
import useFetch from "../components/CustomeHook";
import { BASE_URL } from "../utils/Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const AllTours = ({searchTourResults}) => {
    console.log(searchTourResults,"searchTourReults")
    const [pageNumber, setPageNumber] = useState(1);
    const limit = 8;
    const { data } = useFetch(
        `${BASE_URL}/tour/getalltours?page=${pageNumber}&limit=${limit}`
    );
    const toursData = searchTourResults || data?.tours;
    console.log(toursData);
    const mergeToursData = toursData?.map((tour,index)=>({
        ...tour,
        reviewCount: data?.reviewsDetails?.[index]?.reviewCount || 0,
        avgRating : data?.reviewsDetails?.[index]?.avgRating || 0
    }))
  
    // if(!searchTourResults){
    //     return <h1 className="text-center m-5">Sorry! No Trip Found</h1>
    // }
    // console.log(searchTourResults , "searchTourResults")
    return (
        <>
            {toursData && toursData.length >= 0 ? (
                <>
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-4 m-5">
                        {mergeToursData.map((tour) => (
                            <div className="col" key={tour._id}>
                                <div className="card position-relative border-0 shadow">
                                    <div className="position-absolute top-0 end-0 bg-warning text-white px-2 py-1 rounded">
                                        Featured
                                    </div>{" "}
                                    <img
                                        src={tour.photo}
                                        className="card-img-top"
                                        alt={tour.title}
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
                                                <p className="mb-0">{tour.city}</p>
                                            </div>
                                            <div className="col d-flex align-items-center">
                                                <FontAwesomeIcon
                                                    className="text-warning me-1"
                                                    icon={faStar}
                                                />
                                                <p className="mb-0">{tour.avgRating} ({tour.reviewCount})</p>
                                            </div>
                                        </div>

                                        <h5 className="card-title fw-bold">{tour.title}</h5>
                                        <div className="card-price">
                                            <span className="text-warning fw-bold fs-4">
                                                ${tour.price}{" "}
                                            </span>
                                            <span className="text-black-50 fw-bold fs-4">
                                                /per person
                                            </span>
                                        </div>
                                        <Link to={`/tour/${tour._id}`}>
                                            <button className="btn btn-warning text-white">
                                                Book Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center" style={{marginBottom:"100px"}}>
                    {
                        [1,2].map((num) => (
                            <button className="btn rounded-circle ms-2 btn-outline-warning" key={num} onClick = {()=>setPageNumber(num)}>{num}</button>
                        ))
                    }
                    </div>
                </>
            ) : (
                <h1 className="text-center m-5">Sorry! No Trip Found</h1>
            )}
        </>
    );
};

export default AllTours;
