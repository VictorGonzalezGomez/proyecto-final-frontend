import React from "react";
import Charts from "../components/Charts";
import Menu from "../components/Menu"
import UserGroupCard from "../components/UserGroupCard";
export default function Gallery () {
    return(
        <div className="gallery-charts d-flex">
            <Menu/>
            <Charts/>
            <UserGroupCard/>
        </div>
    );
}
