import React from "react";
import Menu from "../components/Menu"
import Charts from "../components/Charts"
export default function Gallery () {
    return(
        <div className="gallery-charts d-flex min-vh-100">
            <Menu/>
            <Charts/>
        </div>
    )
}