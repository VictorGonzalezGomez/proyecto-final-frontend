import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu"
import Navbar from "../components/Navbar";
import Profile from "../components/Profie";
export default function Gallery () {
    return(

        <>
        <Navbar/>
        <div className="gallery-charts d-flex">
            <Menu/>
            <Profile/>
        </div>
        <Footer/>
        </>
    )
}