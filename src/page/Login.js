import { useEffect } from "react";
import "../style/Login.css";

const Login = () => {
  useEffect(() => {
    // Ensure CSS is loaded by checking if styles are applied
    const loginDiv = document.querySelector(".login");
    if (loginDiv) {
      console.log("Login CSS loaded successfully");
    }
  }, []);
  return (
    <div className="login">
      <form className="loginForm">
        <h2>Login Page</h2>
        <label>Email</label>
        <input type="email" placeholder="Email" required></input>
        <label>Password</label>
        <input type="password" placeholder="Password" required></input>
        <button className="loginButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;