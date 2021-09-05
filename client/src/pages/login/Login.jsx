import "./login.css";
import GoogleLogin from "react-google-login";

import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { signInWithGoogle } from "../../auth/Auth";
import axios from "axios";

export default function Login() {
  const history = useHistory();

  const handleLogin = () => {
    const flag = signInWithGoogle();
    if (flag) history.push("./Home");
    else history.push("./Login");
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  const responseSuccessGoogle = async (response) => {
    console.log(response);
    // const res =
    await axios.post("auth/googlelogin", response.tokenId).then((response) => {
      console.log(response);
    });
  };
  const responseFailureGoogle = (response) => {};

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginTop">
          <h3 className="loginLogo">Socialbook</h3>
          <span className="loginDesc">
            Connect with your frinds and family around the globe on Socialbook.
          </span>
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Enter your EmailId"
              required
              type="email"
              className="loginInputEmail"
            />
            <input
              placeholder="Enter your Password"
              required
              type="password"
              minLength="8"
              className="loginInputPassword"
            />
            <button
              className="loginButton"
              onClick={() => history.push("/Home")}
            >
              Log In
            </button>
            {/* <GoogleLogin
              clientId="578272986970-rf5c61u5o63pg7nj9pojn5928i9cjn5h.apps.googleusercontent.com"
              buttonText="Login"
              className="googleLoginButton"
              onSuccess={responseSuccessGoogle}
              onFailure={responseFailureGoogle}
              cookiePolicy={"single_host_origin"}
            /> */}
          </form>
        </div>
        <div className="loginBottom">
          <span className="loginNew">New to Socialbook?</span>
          <button
            className="loginRegister"
            onClick={() => history.push("/Signup")}
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}
