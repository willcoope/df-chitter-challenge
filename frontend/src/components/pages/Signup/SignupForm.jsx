import React, { useState } from "react";
import authService from "../../../services/auth.service.js";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      if (!firstname || !lastname || !username || !email || !password) {
        alert("All fields are required");
        return;
      }
      e.preventDefault();
      const res = await authService.signup(firstname, lastname, username, email, password);
      if (res.error) {
        if (res.error.response.data.errors) {
          console.log(res.error.response.data.errors[0].msg);
          alert(res.error.response.data.errors[0].msg);
        }
        if (res.error.response.data.message) {
          console.log(res.error.response.data.message);
          alert(res.error.response.data.message);
        }

        localStorage.removeItem("user");

      } else {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/");
      }
    };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Sign Up</h1>
      <input
        type="text"
        name="firstname"
        placeholder="First Name..."
        value={firstname}
        onChange={(event) => setFirstname(event.target.value)}
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name..."
        value={lastname}
        onChange={(event) => setLastname(event.target.value)}
      />
      <input
        type="text"
        name="username"
        placeholder="Username..."
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="text"
        name="email"
        placeholder="Email..."
        value={email}
        onChange={(event) => setEmail(event.target.value)}
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
export default SignupForm;