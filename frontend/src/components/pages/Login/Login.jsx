import React, { useEffect } from 'react';
import Footer from "../../Footer";
import Header from "../../Header";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            navigate("/");
        }
    }, [user, navigate]);

    return(
        <>
        <Header/>
        <LoginForm/>
        <Footer/>
        </>
    )
}
export default Login;