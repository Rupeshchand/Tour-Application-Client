import React, { useState } from "react";
import { BASE_URL } from "../utils/Config";
import { Link, useNavigate } from "react-router-dom";
import register from "../assets/images/register.png";
import user from "../assets/images/user.png";
const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: ""
  });
  //used to navigate from one location to another location
  const navigate = useNavigate();
  console.log(formData);
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    console.log("submit")
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/user/register`, {
        //for post request we need to send data client so pass this in RequestInit
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const {data} = await res.json();
      console.log("User registered successfully",data);
      if(data){
        alert("User registered successfully")
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row gx-0">
          <div
            className="col-6 shadow text-center"
            style={{ marginLeft: "155px" }}
          >
            <img
              className="img-fluid text-center"
              style={{ width: "50%" }}
              src={register}
              alt="Login"
            />
          </div>
          <div className="col-3">
            <form
              className="shadow p-5 bg-warning text-center"
              onSubmit={handleSubmit}
            >
              <div className="text-center position-relative mb-3">
                <img
                  className="img-fluid position-absolute"
                  style={{ width: "35%", top: "-90px", left: "35%" }}
                  src={user}
                  alt="user"
                />
              </div>

              <h2 className="text-center text-white fw-medium mb-5">Register</h2>
              <div className="mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  className="border-0 outline-0 p-2 rounded-2"
                  style={{ border: "none", outline: "none" }}
                  id="userName"
                  value={formData.userName}
                  placeholder="User Name"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={handleChange}
                  type="email"
                  className="border-0 outline-0 p-2 rounded-2"
                  style={{ border: "none", outline: "none" }}
                  id="email"
                  value={formData.email}
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  style={{ border: "none", outline: "none" }}
                  className="p-2 rounded-2"
                  id="password"
                  value={formData.password}
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark mb-4"
              >
                Create Account
              </button>
              <p>
                <span className="text-white">
                  Already have an <br />
                  account?
                </span>
                <span className="text-black ms-2">
                  <Link
                    className="text-decoration-none text-black"
                    to="/login"
                  >
                    Login
                  </Link>
                </span>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
