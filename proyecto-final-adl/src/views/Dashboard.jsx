import React from "react";
import Menu from "../components/Menu";
import TableData from "../components/TableData";

export default function Dashboard () {
    return (
        <div className="d-flex min-vh-100">
            <Menu />
            <div>
                {/* Chart */}
                <TableData/>
            </div>
        </div>
    )
}