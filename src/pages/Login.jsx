import React, { useContext, useState } from "react";
import { BASE_URL } from "../utils/Config";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import login from "../assets/images/login.png";
import user from "../assets/images/user.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  console.log(credentials);
  const { dispatch } = useContext(AuthContext);
  console.log(dispatch,"dispatch")
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: "include", //we are telling that we will pass only secure values
      });
      const response = await res.json();
      console.log(response);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data,
        token: response.token,
        role: response.role,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="row gx-0">
          <div className="col-6 shadow text-center" style={{marginLeft:"155px"}}>
            <img className="img-fluid text-center" style={{width:"50%"}} src={login} alt="Login" />
          </div>
          <div className="col-3">
            <form
              className="shadow p-5 bg-warning text-center"
              onSubmit={handleSubmit}
            >
              <div className="text-center position-relative mb-3">
                <img className="img-fluid position-absolute" style={{width:"35%",top:"-90px", left:"35%"}} src={user} alt="user" />
              </div>

              <h2 className="text-center text-white fw-medium mb-5">Login</h2>
              <div class="mb-3">
                <input
                  onChange={handleChange}
                  type="email"
                  className="border-0 outline-0 p-2 rounded-2"
                  style={{border:"none",outline:"none"}}
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <input
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  style={{border:"none",outline:"none"}}
                  className="p-2 rounded-2"
                  id="password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark mb-4"
              >
                Login
              </button>
              <p><span className="text-white">Don't have an <br />account?</span><span className="text-black ms-2"><Link className="text-decoration-none text-black" to="/register">Register</Link></span> </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
