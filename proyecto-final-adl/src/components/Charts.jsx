import React from "react";
import { ChartContext } from "../context/ChartContext";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

export default function Charts() {
    const { charts } = React.useContext(ChartContext)
    console.log(charts)

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );

    return (
        <div className="d-flex gap-3 justify-content-center p-5 m-0 min-vh-100">

          {charts[0]?.data?.labels?.length !== 0 ? charts.map((chart) => (
            <div className="card shadow-sm" key={chart.id} style={{ width: "32rem" }}>
              <div className="card-header">
                <Line data={chart.data}/>
              </div>
              <div className="card-body">
                <p className="card-text">
                  {chart.title}
                </p>
                
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