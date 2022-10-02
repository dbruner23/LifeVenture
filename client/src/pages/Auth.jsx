import React from "react";
import { useState } from 'react';
import "./Auth.css";
import Logo from "../img/LifeVenture-logo-no-text.png";
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from "../actions/AuthAction";


const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState({ firstname: "", lastname: "", password: "", confirmpass: "", username: "" })
  const [confirmPass, setConfirmPass] = useState(true);
  const dispatch = useDispatch()
  const loading = useSelector((state)=>state.authReducer.loading)
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false) 
    } else {
      dispatch(logIn(data))
    }
  }

  const resetForm = () => {
    setConfirmPass(true);
    setData({ firstname: "", lastname: "", password: "", confirmpass: "", username: "" });
  }
  
  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} />
        <div className="Webname">
          <h1>LifeVenture</h1>
          <h6>
            <span>Go expolore.</span>
            <span>Share stories.</span>
            <span>Live the adventure.</span>
          </h6>
        </div>
      </div>
      {/* Right Side */}
      <div className="right-side">
        <form className="infoForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>
          {isSignUp && (
            <div>   
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
          </div>
          )}
          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                placeholder="Confirm password"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span style={{ display: confirmPass? "none" : "block", color: "red", fontSize: "12px"}}>
            * Passwords do not match.
          </span>
          <div>
            <span style={{ fontSize: "12px" }}>
              {isSignUp ? "Alreday have an account?" : "Don't have an account?"}
            </span>
            <span onClick={() => { setIsSignUp((prev) => (!prev)); resetForm(); }} style={{ cursor: "pointer", fontSize: "12px" }}>
              {isSignUp ? "Login" : "Sign up"}
            </span>
          </div>
          <button className="button infoButton" type="submit" disabled={loading}>{loading? "Loading..." : isSignUp ? "Sign up" : "Log In"}</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
