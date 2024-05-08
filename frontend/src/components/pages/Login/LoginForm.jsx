import React, { useState } from "react";
import authService from "../../../services/auth.service.js";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (!account || !password) {
      alert("All fields are required");
      return;
    }
    e.preventDefault();
    // console.log(username, password);
    const res = await authService.login(account, password);
    if (res.error) {
      alert(res.error);
    } else {
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.user));
      navigate("/");
    }
    // localStorage.setItem("username", username);

  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Login</h1>
      <input
        type="text"
        name="account"
        placeholder="Username Or Email Address..."
        value={account}
        onChange={(event) => setAccount(event.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password..."
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default LoginForm;