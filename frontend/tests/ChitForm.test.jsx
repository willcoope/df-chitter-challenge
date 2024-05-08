import { render, screen, fireEvent} from "@testing-library/react";
import ChitForm from "../src/components/ChitForm";
import sinon from 'sinon';

test(`renders the submit button`, () => {
  render(<ChitForm />);
  const button = screen.getByText(/submit/i);
  expect(button).to.be.ok;
});

test(`doesn't submit the form if the chit is empty`, () => {
  render(<ChitForm />);
  const button = screen.getByText(/submit/i);
  button.click();
  expect(screen.queryByText(/chit/i)).to.be.ok;
});

test(`submits the form if the chit is not empty`, () => {
    const logSpy = sinon.spy(console, 'log');
    render(<ChitForm />);
    const textarea = screen.getByPlaceholderText(/chit.../i);
    const button = screen.getByText(/submit/i);
    fireEvent.change(textarea, { target: { value: 'Hello, world!' } });
    button.click();
    expect(logSpy.calledWith('Hello, world!')).to.be.true;
    logSpy.restore();
});
