import React from 'react';
import Navbar from "../common/navbar/Navbar";
import Footer from "../landingPage/Footer"

const PublicLayout = (props) => {

        
  return (
    <>
    <Navbar/>
    <div>
      {props.children}
    </div>
    <Footer/>
    </>
    )
}

export default PublicLayout;