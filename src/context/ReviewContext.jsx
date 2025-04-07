import React, { createContext, useState } from 'react'
export const ReviewContext = createContext()
const ReviewContextProvider = ({ children }) => {
    const [reviewsData, setReviewData] = useState([])
    return (
        <ReviewContext.Provider value={{ reviewsData, setReviewData }}>
            {children}
        </ReviewContext.Provider>
    )
}

export default ReviewContextProvider