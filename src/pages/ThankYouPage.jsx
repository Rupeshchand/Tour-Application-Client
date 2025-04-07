import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const ThankYouPage = () => {
    return (
        <>
            <div className="flex-column lh-lg" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"80vh"}}>
                <FontAwesomeIcon className="text-success fs-1 mb-4"icon={faCheckCircle} />
                <h1 className='fs-1'>Thank You</h1>
                <p className='fs-4'>Your tour is booked.</p>
                <Link to={"/"}>
                <button className='btn btn-warning text-white rounded-pill p-2'>Back to Home</button>
                </Link>
            </div>
        </>
    )
}

export default ThankYouPage