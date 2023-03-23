import React from "react";

import Menu from "../../views/MenuView"

import Profile from "../../views/profile/ProfilePage";
export default function Gallery () {
    return(

        <>
        
        <div className="gallery-charts d-flex">
            <Menu/>
            <Profile/>
        </div>
        
        </>
    )
}