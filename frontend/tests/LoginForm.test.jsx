import { BrowserRouter } from "react-router-dom";
import LoginForm from "../src/components/LoginForm";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

test(`renders the login form`, () => {
    render(
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      );  const login = screen.getByText(/login/i);
  expect(login).toBeInTheDocument();
});

test(`renders the username input`, () => {
    render(
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      );  const username = screen.getByPlaceholderText(/username/i);
  expect(username).toBeInTheDocument();
});

test(`renders the password input`, () => {
    render(
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      );  const password = screen.getByPlaceholderText(/password/i);
  expect(password).toBeInTheDocument();
});

test(`renders the submit button`, () => {
  render(
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  );
  const button = screen.getByText(/submit/i);
  expect(button).toBeInTheDocument();
});