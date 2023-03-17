import React from "react";
import axios from "axios";

export const ChartContext = React.createContext({})

const ChartProvider = (props) => {
    const [sales, setSales] = React.useState([]);
    const [charts, setCharts] = React.useState([]);
    React.useEffect(() => {
        const getAllData = async () => {
            try {
                const endpoint = "./sales.json";
                const r = await axios.get(endpoint)
                setSales(r.data.sales)
            } catch (e) {
                alert(e)
            };
        }
        getAllData();
    }, []);
    const formatChartData = (data) => {
        const salesByDate = {};
        data.forEach((sale) => {
            const date = new Date((sale.date - (25567 + 2)) * 86400 * 1000).toISOString().slice(0, 10);
            if (!salesByDate[date]) {
                salesByDate[date] = {
                    date,
                    totalSales: 0,
                };
            }
            salesByDate[date].totalSales += sale.sales_total;
        });
        ;
        const dataChart = Object.values(salesByDate);
            
        return {
            labels: dataChart.map((sale) => sale.date),
            datasets: [
                {
                    label: "Sales",
                    data: dataChart.map((sale) => sale.totalSales),
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1,
                },
            ],
        };
    }
    const formatChartDataByProduct = (data) => {
        const salesByProduct = {};
        data.forEach((sale) => {
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
        const dataChart = Object.values(salesByProduct);

        return {
            labels: dataChart.map((sale) => sale.product_name),
            datasets: [
                {
                    label: "Sales",
                    data: dataChart.map((sale) => sale.totalSales),
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1,
                },
            ],
        };
    }
    React.useEffect(() => {
        if(sales.length === 0) return;
        const totalSalesData = formatChartData(sales);
        const totalSalesByProductData = formatChartDataByProduct(sales);
        setCharts([
                {
                    id: 1,
                    title: "Total Sales",
                    data: totalSalesData,
                },
                {   
                    id: 2,
                    title: "Total Sales by Product",
                    data: totalSalesByProductData,
                },
            ])
    }, [sales]);
    return (
        <ChartContext.Provider
            value={{ sales, charts }}
        >
            {props.children}
        </ChartContext.Provider>
    )
}
export default ChartProvider;