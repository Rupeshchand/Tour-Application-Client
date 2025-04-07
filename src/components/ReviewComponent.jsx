import React, { useContext, useEffect, useState } from "react";
import useFetch from "./CustomeHook";
import { BASE_URL } from "../utils/Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import customer from '../assets/images/user.png'
import { AuthContext } from "../context/AuthContext";
const ReviewComponent = ({ tourId ,setReviewData }) => {
  const { data: reviewsData, loading, error, refetch  } = useFetch(
    `${BASE_URL}/review/getreviews/${tourId}`,
  );
  const reviewData = reviewsData?.reviews || [];
  useEffect(()=>{
    setReviewData(prev => {
      if(JSON.stringify(prev) !== JSON.stringify(reviewsData)){
        return reviewsData
      }
      return prev
    })
  },[reviewsData,setReviewData])
  console.log(reviewsData, "reviewData");
  const { user } = useContext(AuthContext);
  console.log(user);
  
  const [createReview, setCreateReview] = useState({
    userName: user?.userName,
    reviewText: "",
    rating: 0,
    tourId,
    createdAt: Date.now()
  });
  console.log(createReview, "reviews");
  const handleChange = (e) => {
    setCreateReview((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleRating = (star) => {
    setCreateReview((prev) => ({ ...prev, rating: prev.rating === star ? 0 : star }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(user === null){
      alert("Please login to submit review")
    }
    try {
      const token = localStorage.getItem("token")
      const response = await fetch(`${BASE_URL}/review/createreview/${tourId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(createReview),
      })
      if (!response.ok) throw new Error("Error submitting review")
      const data = await response.json()
      refetch()
      setCreateReview({ ...createReview, reviewText: "", rating: 0 })
      console.log("Review submitted", data)
    } catch (error) {
      console.log("Review submission error: ", error)
    }
  };
  const handleReviewRemove = async (reviewId) => {
    try {
      const token  = localStorage.getItem("token")
      const response = await fetch(`${BASE_URL}/review/deletereview/${reviewId}`,{
          method:"DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
      }) 
      if (!response.ok) throw new Error("Error deleting review")
      const data = await response.json() 
      refetch()
      console.log("Review Deleted" ,data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div
        className="border rounded mt-5  p-5"
        style={{
          width: "61%",
          lineHeight: "50px",
          marginLeft: "95px",
          marginBottom: "100px",
        }}
      >
        <h3>Reviews ({reviewsData.count
          
          } reviews)</h3>
        <div className="mt-4">
          {
            [1, 2, 3, 4, 5].map((star) => (
              <FontAwesomeIcon className="fs-3 ms-2" key={star} style={{ color: createReview.rating >= star ? "orange" : "gray", cursor: "pointer" }} icon={faStar} onClick={() => { handleRating(star) }} />
            ))
          }
        </div>
        <div
          className="row border border-warning rounded-pill mt-3"
          style={{ columnGap: "53%" }}
        >
          <div className="col">
            <input
              className="ms-3"
              id="reviewText"
              value={createReview.reviewText}
              onChange={handleChange}
              type="text"
              style={{ border: "none", outline: "none" }}
              placeholder="Share your thoughts"
            />
          </div>
          <div className="col">
            <button
              className="btn btn-warning text-white rounded-pill"
              style={{ width: "100%" }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        {reviewData && reviewData.length > 0 ? (
          reviewData.map((review, index) => (
            <div className="row mt-4" key={index}>
              {/* <div className="col p-0"> */}
              <img
                className="img-fluid"
                src={customer}
                alt="customer"
                style={{ width: "8%", height: "5%" }}
              />
              {/* </div> */}
              <div className="col lh-base">
                <strong>{review.userName}</strong>
                <p className="p-0">
                  {new Date(review.createdAt).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>{review.reviewText}</p>
              </div>
              <div className="col d-flex align-items-baseline">
                <p>{review.rating}</p>
                <FontAwesomeIcon className="text-warning ms-2" icon={faStar} />
              </div>
              <div className="col text-danger">
                  <FontAwesomeIcon onClick={()=>handleReviewRemove(review._id)} icon={faTrash}/>  
              </div>
            </div>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </>
  );
};

export default ReviewComponent;
