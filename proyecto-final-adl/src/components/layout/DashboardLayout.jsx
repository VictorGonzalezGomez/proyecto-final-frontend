import React from 'react';
import Navbar from "../common/Navbar";
import Menu from '../dashboard/Menu';

const PrivateLayout = (props) => {

        
  return (
    <>
    <Navbar/>
    <div className="d-flex">
        <Menu/>
        {props.children}
    </div>
    </>
    )
}

export default PrivateLayout;