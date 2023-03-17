import React from 'react';
import { ChartContext } from '../context/ChartContext';
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

const Chart = (chartId) => {
    const { charts } = React.useContext(ChartContext);
    if (charts.length === 0) return;
    const chart = charts.find((chart) => chart.id = chartId);
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
            <Line data={chart.data}/>
        </div>
        </div>
    )
}

export default Chart;