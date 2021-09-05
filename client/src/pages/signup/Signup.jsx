import "./signup.css";

import React from "react";
import { useHistory } from "react-router-dom";

function Signup() {
  const history = useHistory();
  return (
    <div>
      <div className="signup">
        <div className="signupWrapper">
          <div className="signupTop">
            <div className="signupLogo">Sign Up</div>
            <hr className="signpHr" />
          </div>
          <div className="signupCenter">
            <div className="signupText">
              <div className="signupFullName">Name</div>
              <input
                placeholder="Enter your FullName"
                className="signupInput"
              />
            </div>
            <div className="signupText">
              <div className="signupFullName">Email</div>
              <input placeholder="Enter your EmailId" className="signupInput" />
            </div>
            <div className="signupText">
              <div className="signupPassword">Password</div>
              <input
                placeholder="Enter your new Password"
                className="signupInput"
              />
            </div>
            <div className="signupText">
              <div className="signupConfirmPassword">Confirm Password</div>
              <input
                placeholder="Confirm your Password"
                className="signupInput"
              />
            </div>
          </div>
          <div className="signupBottom">
            <button
              className="signupButton"
              onClick={() => history.push("/Login")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
