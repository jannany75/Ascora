import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Input from "../components/common/Input";
import Button from "../components/common/Button";

import {
  loginUser,
  googleLogin,
} from "../services/auth";

import "../styles/login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      await loginUser(email, password);

      navigate("/home");

    } catch (error) {

      alert(error.message);

    }

  };

  const handleGoogle = async () => {

    try {

      await googleLogin();

      navigate("/home");

    } catch (error) {

      alert(error.message);

    }

  };

  return (
    <div className="login">

      <div className="loginCard">

        <h1>Welcome Back</h1>

        <p>Continue your journey.</p>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          text="Login"
          className="loginButton"
          onClick={handleLogin}
        />

        <Button
          text="Continue with Google"
          className="googleButton"
          onClick={handleGoogle}
        />

        <p className="registerText">
          New here? <Link to="/register">Create an Account</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;