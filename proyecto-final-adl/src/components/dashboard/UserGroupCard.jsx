import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserGroupCard() {
    const navigate = useNavigate();
  return (
    <div className="container col-lg-3 col-md-3 px-2 py-5">
        <div className="card shadow-sm align-items-center">
        <h3>Company Name</h3>
        <div className="card-body table-responsive">
            <table className="table table-striped table-hover dark">
            <thead>
                <tr>
                <th scope="col"></th>  
                <th scope="col">Employee Name</th>
                <th scope="col">Job Title</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" id="selected" name="" value=""/></td> 
                <td>John Ipson</td>
                <td>CEO</td>
                <td>Email@mail.com</td>
                </tr>
            </tbody>
            </table>
            <button
            type="button"
            className="btn btn-sm btn-outline-success mx-2"
            onClick={() => {
                navigate(`/gallery`);
            }}
            >
            Add
            </button>
            <button type="button" className="btn btn-sm btn-outline-primary mx-2">
            Edit
            </button>
        </div>
        </div>
    </div>
  );
}
