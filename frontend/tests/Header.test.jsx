import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../src/components/Header'

test(`renders the header`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const logo = screen.getByAltText(/logo/i)
    expect(logo).toBeInTheDocument()
})

test(`logo navigates to the home page`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const logo = screen.getByAltText(/logo/i)
    logo.click()
    expect(window.location.pathname).toBe('/')
})

test(`renders the home link`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const home = screen.getByText(/home/i)
    expect(home).toBeInTheDocument()
})

test(`home link navigates to the home page`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const home = screen.getByText(/home/i)
    home.click()
    expect(window.location.pathname).toBe('/')
})

test(`renders the sign up link`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const signUp = screen.getByText(/sign up/i)
    expect(signUp).toBeInTheDocument()
})

test(`sign up link navigates to the sign up page`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const signUp = screen.getByText(/sign up/i)
    signUp.click()
    expect(window.location.pathname).toBe('/signup')
})

test(`renders the log in link`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const logIn = screen.getByText(/log in/i)
    expect(logIn).toBeInTheDocument()
})

test(`log in link navigates to the log in page`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const logIn = screen.getByText(/log in/i)
    logIn.click()
    expect(window.location.pathname).toBe('/login')
})

test(`renders the log out link`, () => {
    localStorage.setItem('user', 'test')
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const logOut = screen.getByText(/log out/i)
    expect(logOut).toBeInTheDocument()
})

test(`log out link logs the user out`, () => {
    localStorage.setItem('user', 'test')
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const logOut = screen.getByText(/log out/i)
    logOut.click()
    expect(localStorage.getItem('user')).toBeNull()
    expect(window.location.pathname).toBe('/')
})