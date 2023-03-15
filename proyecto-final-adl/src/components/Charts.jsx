import React from "react";
import { ChartContext } from "../context/ChartContext";
import { Line } from 'react-chartjs-2';

export default function Charts() {
    const { charts } = React.useContext(ChartContext)
    console.log({charts})
    
    return (
        <div className="d-flex flex-wrap gap-3 justify-content-center p-5 m-0">

          {charts[0]?.data?.length !== 0 ? charts.map((chart) => (
            <div className="card shadow-sm" key={chart.id} style={{ width: "20rem" }}>
                <Line data={chart.data} />
              <div className="card-body">
                <p className="card-text">{chart.title}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-success">View</button>
                    <button type="button" className="btn btn-sm btn-outline-primary">Edit</button>
                    <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          )) 
          : <h1>Loading...</h1>}

        </div>
    )
}