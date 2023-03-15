import React from "react";
import { AuthContex } from "../context/AuthContextProvider";

const AboutUs = () => {
    const { authUser } = React.useContext(AuthContex);
    
    return (
        <div>
        <h1>{authUser.email}</h1>
        <p>
            Lorem ipsum dolor sit ame
        </p>
        </div>
    )

}

export default AboutUs;