import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  function handleLogout() {
    localStorage.removeItem("user");
    window.location.reload();
    navigate("/");
  }

  return (
    <nav
      className={`navbar top navbar-expand-lg navbar-light ${
        isOpen ? "show" : ""
      }`}
      style={{ backgroundColor: "#D3D3D3" }}
    >
      <button
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
      >
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
      </button>
      <h1>Chitter</h1>
      <button className="navbar-toggler" type="button" onClick={handleToggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <button className="nav-link" onClick={() => navigate("/")}>
              Home
            </button>
          </li>
          {!user && (
            <li className="nav-item active">
              <button className="nav-link" onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </li>
          )}
          {!user && (
          <li className="nav-item active">
            <button className="nav-link" onClick={() => navigate("/login")}>
              Log In
            </button>
          </li>
          )}
          {user && (
          <li className="nav-item active">
            <button className="nav-link" onClick={handleLogout}>
              Log Out
            </button>
          </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
