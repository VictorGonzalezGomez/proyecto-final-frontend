import React from 'react';
import { ChartContext } from '../context/ChartContext';

// traemos el chartcontext
const TableData = (chartId) => {
    const { sales } = React.useContext(ChartContext);
    // logica para los datos de la tabla segun parametro, esto es netamente para mostrar unos datos en la tabla segun params
    // para que espere a que se carguen los datos
    if (sales.length === 0) return;
    let tableData = [];
    let dataKeys = [];
    if (chartId = 1) {
    const salesByDate = {};
    sales?.forEach((sale) => {
        const date = new Date((sale.date - (25567 + 2)) * 86400 * 1000).toISOString().slice(0, 10);
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
    } else if (chartId = 2) {
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
    console.log(tableData)
    console.log(dataKeys)
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    {dataKeys.length > 0 ? dataKeys.map((key) => (
                        <th key={key}>{key}</th>
                            ))
                            : <h1>Loading...</h1>
                        }
                </tr>
            </thead>
            <tbody>
                {tableData?.map((row, index) => (
                    <tr key={index}>
                        {dataKeys?.map((key) => (
                            <td key={key}>{row[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    ) 
}

export default TableData;