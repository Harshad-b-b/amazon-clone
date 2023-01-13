import React from "react";
import "./login.css";
import amazonLogo from "../../assets/amazon-logo-black.png";
import { useNavigate } from "react-router-dom";

function isValidUser(email, pwd) {
  let keys = localStorage.length;

  for (let i = 1; i < keys; i++) {
    let a = JSON.parse(localStorage.getItem(localStorage.key(i).toString()));
    if (a.name === email && a.pwd === pwd) {
      return true;
    }
  }
  return false;
}
export default function LoginPage() {
  let [userDetails, setUserDetails] = React.useState({
    name: "",
    pwd: "",
  });
  let navigate = useNavigate();
  function login(event) {
    event.preventDefault();
    let email = event.target.email.value;
    let pwd = event.target.pwd.value;

    if (email.includes("@") && pwd.length >= 8) {
      if (isValidUser(email, pwd)) {
        navigate("/", { state: { email: email } });
      } else {
        alert(
          "There is no user record corresponding to this identifier. The user may have been deleted."
        );
      }
    } else {
      alert("The email address or password is badly formatted.");
    }
  }

  function register() {
    localStorage.setItem(
      `user-details ${Math.floor(Math.random() * 10)}`,
      JSON.stringify(userDetails)
    );
    navigate("/", { state: { email: userDetails.name } });
  }
  return (
    <>
      <img
        onClick={() => navigate("/")}
        className="amzlogoBlack"
        src={amazonLogo}
        alt=""
      />
      <div className="login-form-container">
        <h1>Sign-in</h1>
        <form onSubmit={login}>
          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                name: e.target.value,
              })
            }
          />
          <h5>Password</h5>
          <input
            type="password"
            name="pwd"
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                pwd: e.target.value,
              })
            }
          />

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login-register-btn" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </>
  );
}
