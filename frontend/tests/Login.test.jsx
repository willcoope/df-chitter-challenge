import { render, screen } from "@testing-library/react";
import Login from "../src/components/Login";
import { BrowserRouter } from "react-router-dom";

  test("renders Login component", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const login = screen.getByText(/login/i);
    expect(login).toBeInTheDocument();
  });

  test("redirects if user is logged in", () => {
    localStorage.setItem("user", "test");
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(window.location.pathname).toBe("/");
  });

  test("renders LoginForm component", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const loginForm = screen.getByText(/login/i);
    expect(loginForm).toBeInTheDocument();
  });
