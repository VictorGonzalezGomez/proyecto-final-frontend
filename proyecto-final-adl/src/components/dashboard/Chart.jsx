import React from 'react';
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

const Chart = (chart) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
        
    return (
        <div className="col py-5 px-5 align-items-center text-center">
        <div className="row justify-content-md-center">
            <Bar data={chart.chart.data}/>
        </div>
        </div>
    )
}

export default Chart;