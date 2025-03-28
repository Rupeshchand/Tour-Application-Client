import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="container-fluid footer bg-white">
        <div className="row">
          <div className="col-md-4 col-lg-3 col-xxl-3">
            <h4 className="navbar-brand fw-bold fs-4">
              <Link className="text-decoration-none text-black" to="/">
                Tour Booking
              </Link>
            </h4>
            <p className="text fs-6 text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              natus incidunt odio fugit velit veniam facere consequatur
              voluptatibus tenetur laboriosam.
            </p>
            <div className="d-flex gap-5">
                <Link className="text-black"><FontAwesomeIcon icon={faUserAstronaut}/></Link>
                <Link className="text-black"><FontAwesomeIcon icon={faGithub}/></Link>
                <Link className="text-black"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
                <Link className="text-black"><FontAwesomeIcon icon={faInstagram}/></Link>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-xxl-3">
            <h4 className="fw-bold">Discover</h4>
            <ul className="list-unstyled lh-lg fs-6 text-black-50">
              <li>
                <Link className="text-decoration-none text-black-50" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-black-50"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-black-50"
                  to="/tours"
                >
                  Tours
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-3 col-xxl-3">
            <h4 className="fw-bold">Quick Links</h4>
            <ul className="list-unstyled lh-lg fs-6 text-black-50">
              <li>Gallery</li>
              <li>
                <Link
                  className="text-decoration-none text-black-50"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-black-50"
                  to="/register"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-3 col-xxl-3">
            <h4 className="fw-bold">Contact Us</h4>
            <div className="text-wrap fs-6">
              <p>
                <FontAwesomeIcon
                  className="text-warning"
                  icon={faMapMarkerAlt}
                />
                <span className="fw-bold ms-3">Address:</span>
                <span className="text-black-50 ms-3">
                  Pulivendula, <br />
                  Andhra Pradesh
                </span>
              </p>
              <p>
                <FontAwesomeIcon className="text-warning" icon={faEnvelope} />
                <span className="fw-bold ms-3">Email:</span>
                <span className="text-black-50 ms-3">
                  rupeshvasantam@gmail.com
                </span>
              </p>
              <p>
                <FontAwesomeIcon className="text-warning" icon={faPhone} />
                <span className="fw-bold ms-3">Phone:</span>
                <span className="text-black-50 ms-3"> +91 8790447654</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
