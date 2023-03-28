import React from 'react';
import Navbar from "../common/navbar/Navbar";
import Menu from '../../views/MenuView';



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