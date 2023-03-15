import React from "react";
import Charts from "../components/Charts";
import Menu from "../components/Menu"
export default function Gallery () {
    return(
        <div className="gallery-charts d-flex">
            <Menu/>
            <Charts/>
        </div>
    )
}