import React from 'react';
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

const Chart = (chart) => {

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
        <div className="col py-5 px-5 align-items-center text-center">
        <div className="row justify-content-md-center">
            <Line data={chart.chart.data}/>
        </div>
        </div>
    )
}

export default Chart;