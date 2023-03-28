import React from "react";
import { ChartContext } from "../context/ChartContext";
import { NavLink } from "react-router-dom";

import { useState } from "react";

import Papa from "papaparse";

export default function Menu() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        const csv = await convertToCSV(file);
        const jsonData = await convertToJSON(csv);
        await sendData(jsonData);
    };

    const convertToCSV = (file) => {
        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                complete: (results) => {
                    resolve(results.data);
                    console.log(results.data);
                },
                error: (error) => {
                    reject(error);
                },
            });
        });
    };

    const convertToJSON = (csv) => {
        // Aquí deberás escribir la función que convierta el CSV a JSON
        const headers = csv[0];
        const jsonData = [];

        for (let i = 1; i < csv.length; i++) {
            const row = csv[i];
            const obj = {};

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = row[j];
            }

            jsonData.push(obj);
        }
        // delete last row because its full of undefined values
        jsonData.pop();

        console.log(jsonData);

        return jsonData;
    };

    const sendData = (jsonData) => {
        // Aquí deberás escribir la función que envíe los datos al endpoint en formato JSON
        return fetch("https://example.com/api/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const { charts } = React.useContext(ChartContext);
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "unactive");
    return (
        <>
            <div className="col-lg-2 col-md-3 d-flex flex-column p-3 text-bg-dark vh-100">
                <div className="dropdown">
                    <a
                        href="/profile"
                        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src="https://github.com/mdo.png"
                            alt=""
                            width="32"
                            height="32"
                            className="rounded-circle me-2"
                        />
                        <strong>John Ipson</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li>
                            <a className="dropdown-item" href="/profile">
                                Profile
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <a className="dropdown-item" href="/">
                                Sign out
                            </a>
                        </li>
                    </ul>
                </div>
                <hr />

                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink
                            to="/summary"
                            className={`nav-link text-white ${setActiveClass}`}
                        >
                            Summary
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <button
                            className="btn btn-toggle d-inline-flex text-white nav-link align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse"
                            aria-expanded="false"
                        >
                            Dashboard
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                {charts[0]?.data?.labels?.length !== 0 ? (
                                    charts.map((chart) => (
                                        <li key={chart.id}>
                                            <NavLink
                                                to={`/dashboard/${chart.id}`}
                                                className={`nav-link text-white ${setActiveClass}`}
                                            >
                                                {chart.title}
                                            </NavLink>
                                        </li>
                                    ))
                                ) : (
                                    <li>
                                        <a
                                            href="/"
                                            className="d-inline-flex text-decoration-none text-white rounded"
                                        >
                                            No charts yet
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                            >
                                Add Sales
                            </button>
                        </div>
                    </li>
                </ul>
            </div>

            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel"
                            >
                                Add sales
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <label
                                    htmlFor="formFileLg"
                                    className="form-label"
                                >
                                    Large file input example
                                </label>
                                <input
                                    className="form-control form-control-lg"
                                    id="formFileLg"
                                    type="file"
                                    accept=".csv"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                                Send Sales
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
