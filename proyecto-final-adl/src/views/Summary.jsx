import React from "react";
import CardCharts from "../components/CardCharts";
import Menu from "../components/Menu"
import UserGroupCard from "../components/UserGroupCard";
export default function Summary () {
    return(
        <div className="gallery-charts d-flex flex-wrap">
            <Menu/>
            <CardCharts/>
            <UserGroupCard/>
        </div>
    );
}
