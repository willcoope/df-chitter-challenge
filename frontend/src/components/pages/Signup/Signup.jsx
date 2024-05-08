import React, { useEffect } from 'react';
import Footer from "../../Footer";
import Header from "../../Header";
import SignupForm from "./SignupForm";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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
        <SignupForm/>
        <Footer/>
        </>
    )
}
export default Signup;