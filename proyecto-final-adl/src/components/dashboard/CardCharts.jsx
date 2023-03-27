import React from "react";
import { ChartContext } from "../../context/ChartContext";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useNavigate } from "react-router-dom";

export default function CardCharts() {
    const { charts } = React.useContext(ChartContext)
    console.log(charts)
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    );
    const navigate = useNavigate();
    return (
      <>
        <div className="col align-items-center text-center">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {charts[0]?.data?.labels?.length !== 0 ? charts.map((chart) => (
          <div className="col-sm-6">
          <div className="card mb-3 border-dark my-2" key={chart.id}>
          <Bar  className="card-img"  data={chart.data}/>
          <hr className="border-dark"/>
            <div className="card-body g-1">
              <h5 className="card-title"> {chart.title}</h5>
              <button type="button" className="btn btn-sm btn-outline-success" onClick={() => {
                       navigate(`/dashboard/${chart.id}`)}}>
                        View
                     </button>
                     <button type="button" className="btn btn-sm btn-outline-primary">Edit</button>
                   <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
            </div>
          </div>
        </div>
              
            //   <div className="col-sm-6" key={chart.id}>
            //     <div className="card shadow-sm align-items-center m-2">
            //       <Bar data={chart.data}/>
            //     <div className="card-body">
            //     <p className="card-text">
            //       {chart.title}
            //     </p>
            //     <div className="d-flex justify-content-between align-items-center">
            //       <div className="btn-group">
            //         <button type="button" className="btn btn-sm btn-outline-success" onClick={() => {
            //           navigate(`/dashboard/${chart.id}`)}}>
            //             View
            //         </button>
                    
            //         <button type="button" className="btn btn-sm btn-outline-primary">Edit</button>
            //         <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            //  </div>
          )) 
          : <h1>Loading...</h1>}
        </div>
        </div>
        </>
    )
}