import React from "react";
import { ChartContext } from "../context/ChartContext";

export default function Charts() {
    const { sales } = React.useContext(ChartContext)
    return (
        <div className="d-flex flex-wrap gap-3 justify-content-center pt-5 container m-0">
            {sales.map((sale) => (
                <div key={sale.id} className="card shadow-sm" style={{width: "20rem" }}>
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>{sale.product_name}</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="40%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                  <p className="card-text">{sale.product_name}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-success">View</button>
                      <button type="button" className="btn btn-sm btn-outline-primary">Edit</button>
                      <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* New Chart component */}
        </div>
    )
}