import React from "react";
import axios from "axios";

export const ChartContext = React.createContext({})

const ChartProvider = (props) => {
    const [sales, setSales] = React.useState([]);
    const [salesData, setSalesData] = React.useState([]);
    React.useEffect(() => {
        const getAllData = async () => {
            try {
                const endpoint = "./json/sales.json";
                const r = await axios.get(endpoint)
                setSales(r.data.sales)
            } catch (e) {
                alert(e)
            };
        }
        getAllData();
    },[]);
    // const addChart = () => {
    // {/* ver como agregar un nuevo chart */}
    // }
    return (
        <ChartContext.Provider
            value={{ sales, salesData }}
        >
            {props.children}
        </ChartContext.Provider>
    )
}
export default ChartProvider;