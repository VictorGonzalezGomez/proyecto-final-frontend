import React from "react";
import Menu from "../components/Menu";
import TableData from "../components/TableData";
import Chart from "../components/Chart";
import { useParams } from "react-router-dom";
import { ChartContext } from "../context/ChartContext";

export default function Dashboard() {
  const { chartId } = useParams();
  const idChart = parseInt(chartId);
  const { sales, charts } = React.useContext(ChartContext);
  if (sales.length === 0) return;
  if (charts.length === 0) return;
  const chart = charts.find((chart) => chart.id === idChart);

  // logica para los datos de la tabla segun parametro, esto es netamente para mostrar unos datos en la tabla segun params
  // para que espere a que se carguen los datos
  let tableData = [];
  let dataKeys = [];
  if (idChart === 1) {
    const salesByDate = {};
    sales?.forEach((sale) => {
      const date = new Date((sale.date - (25567 + 2)) * 86400 * 1000)
        .toISOString()
        .slice(0, 10);
      if (!salesByDate[date]) {
        salesByDate[date] = {
          date,
          totalSales: 0,
        };
      }
      salesByDate[date].totalSales += sale.sales_total;
    });

    tableData = Object.values(salesByDate);
    dataKeys = Object.keys(tableData[0]);
  } else if (idChart === 2) {
    const salesByProduct = {};
    sales?.forEach((sale) => {
      const { product_id, product_name, sales_total } = sale;
      if (!salesByProduct[product_id]) {
        salesByProduct[product_id] = {
          product_id,
          product_name,
          totalSales: 0,
        };
      }
      salesByProduct[product_id].totalSales += sales_total;
    });

    tableData = Object.values(salesByProduct);
    dataKeys = Object.keys(tableData[0]);
  }

  return (
    <div className="d-flex min-vh-100">
      <Menu />
      <div className="container px-5">
        <Chart chart={chart} />
        <TableData tableData={tableData} dataKeys={dataKeys} />
      </div>
    </div>
  );
}
