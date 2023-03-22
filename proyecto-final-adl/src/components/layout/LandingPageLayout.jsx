import React from 'react';
import Navbar from "../common/Navbar";
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