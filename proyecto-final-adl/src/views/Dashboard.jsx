import React from "react";
import Menu from "../components/Menu";
import TableData from "../components/TableData";
import Chart from "../components/Chart";

export default function Dashboard () {
    return (
        <div className="d-flex min-vh-100">
            <Menu />
            <div>
                <Chart chartId={1}/>
                <TableData chartId={1}/>
            </div>
        </div>
    )
}