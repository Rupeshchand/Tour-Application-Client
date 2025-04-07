import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { dispatch, user } = useContext(AuthContext);
  console.log(user,"user")
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white p-2 shadow header w-100">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 mx-3" to="/">
            Tour Booking
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end me-5 "
            id="navbarNav"
          >
            <ul className="navbar-nav fs-6 fw-bold gap-4 mb-2 mb-lg-0 text-black d-flex align-items-center">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={(e) =>
                    e.currentTarget.classList.toggle("text-warning")
                  }
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-black"
                  to="/about"
                  onClick={(e) =>
                    e.currentTarget.classList.toggle("text-warning")
                  }
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-black"
                  to="/tours"
                  onClick={(e) =>
                    e.currentTarget.classList.toggle("text-warning")
                  }
                >
                  Tours
                </Link>
              </li>
            </ul>
            {user ? (
              <>
                <form class="d-flex" role="search">
                  <Link>
                    <button className="btn btn-warning rounded-pill" type="submit">
                      {user.userName}
                    </button>
                  </Link>
                  <Link>
                    <button
                      onClick={handleLogout}
                      className="btn btn-danger text-white ms-3"
                      type="submit"
                    >
                      Logout
                    </button>
                  </Link>
                </form>
              </>
            ) : (
              <form class="d-flex" role="search">
                <Link to="/login">
                  <button className="btn border-0 fw-bold" type="submit">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-warning text-white ms-3 rounded-pill" type="submit">
                    Register
                  </button>
                </Link>
              </form>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
