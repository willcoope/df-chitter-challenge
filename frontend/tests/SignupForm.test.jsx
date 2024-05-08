import SignupForm from "../src/components/SignupForm";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test(`renders the signup form`, () => {
    render(
        <BrowserRouter>
          <SignupForm />
        </BrowserRouter>
      );  const signup = screen.getByText(/sign up/i);
  expect(signup).toBeInTheDocument();
});

test(`renders the firstname input`, () => {
    render(
        <BrowserRouter>
          <SignupForm />
        </BrowserRouter>
      );  const firstname = screen.getByPlaceholderText(/first name/i);
  expect(firstname).toBeInTheDocument();
});

test(`renders the lastname input`, () => {
    render(
        <BrowserRouter>
          <SignupForm />
        </BrowserRouter>
      );  const lastname = screen.getByPlaceholderText(/last name/i);
  expect(lastname).toBeInTheDocument();
});

test(`renders the username input`, () => {
    render(
        <BrowserRouter>
          <SignupForm />
        </BrowserRouter>
      );  const username = screen.getByPlaceholderText(/username/i);
  expect(username).toBeInTheDocument();
});

test(`renders the email input`, () => {
    render(
        <BrowserRouter>
          <SignupForm />
        </BrowserRouter>
      );  const email = screen.getByPlaceholderText(/email/i);
  expect(email).toBeInTheDocument();
});

test(`renders the password input`, () => {
    render(
        <BrowserRouter>
          <SignupForm />
        </BrowserRouter>
      );  const password = screen.getByPlaceholderText(/password/i);
  expect(password).toBeInTheDocument();
});

test(`renders the submit button`, () => {
  render(
    <BrowserRouter>
      <SignupForm />
    </BrowserRouter>
  );
  const button = screen.getByText(/submit/i);
  expect(button).toBeInTheDocument();
});
