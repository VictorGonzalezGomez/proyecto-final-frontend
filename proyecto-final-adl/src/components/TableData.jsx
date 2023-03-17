import React from 'react';
import { ChartContext } from '../context/ChartContext';

// traemos el chartcontext
const TableData = (chartId) => {
    const { sales } = React.useContext(ChartContext);
    // logica para los datos de la tabla segun parametro, esto es netamente para mostrar unos datos en la tabla segun params
    const salesByDate = {};
    const salesByProduct = {};

    if (sales.length === 0) return;

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

    const salesByDateData = Object.values(salesByDate);
    const keysByDate = Object.keys(salesByDateData[0]);
    console.log(keysByDate)
    console.log(salesByDateData)
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

    const salesByProductData = Object.values(salesByProduct);
    const keysByProduct = Object.keys(salesByProductData[0]);
    console.log(salesByProductData)
    console.log(keysByProduct)


    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    {/* {keys?.map((key) => (
                        <th key={key}>{key}</th>
                            ))} */}
                </tr>
            </thead>
            <tbody>
                {/* {info.data.datasets.data?.map((row, index) => (
                    <tr key={index}>
                        {keys?.map((key) => (
                            <td key={key}>{row[key]}</td>
                        ))}
                    </tr>
                ))} */}
            </tbody>
        </table>
    )  
}

export default TableData;