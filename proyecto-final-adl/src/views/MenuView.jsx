import React from "react";
import { ChartContext } from "../context/ChartContext";
import { NavLink } from "react-router-dom";
import axios from "axios";
import checkCsvFormat from "../helpers/checkCsvFormat";
import swal from "sweetalert";
import { useState } from "react";
import Papa from "papaparse";

export default function Menu() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        // check if file is empty
        if (event.target.files[0] === null) {
            return;
        }
        setFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            if (file === null) {
                swal({
                    title: "Error",
                    text: "Please select a file",
                    icon: "error",
                    button: "Ok",
                });
                setLoading(false);
                return;
            }
            const csv = await convertToCSV(file);
            const jsonData = await convertToJSON(csv);
            // check formart
            if (!checkCsvFormat(csv)) {
                swal({
                    title: "Error",
                    text: "Please select a csv file in the correct format",
                    icon: "error",
                    button: "Ok",
                });
                setLoading(false);
                return;
            }
            await sendData(jsonData);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
        setFile(null);
    };

    const convertToCSV = (file) => {
        // check if file is empty
        if (file === null) {
            return;
        }

        // check if file is csv
        if (file.type !== "text/csv") {
            swal({
                title: "Error",
                text: "Please select a csv file",
                icon: "error",
                button: "Ok",
            });
            return;
        }

        try {
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
        } catch (error) {
            console.log(error);
        }
    };

    const convertToJSON = (csv) => {
        //check if csv is empty
        if (csv.length === 0) {
            return;
        }
        try {
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

            return jsonData;
        } catch (error) {
            console.log(error);
        }
    };

    // send data function

    const sendData = async (jsonData) => {
        let sendingError = false;
        try {
            await axios
                .post("http://localhost:3000/sales", jsonData)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    swal({
                        title: "Error",
                        text: "Error while uploading data",
                        icon: "error",
                        button: "Ok",
                    });
                    console.log(error);
                    sendingError = true;
                });
        } catch (error) {
            console.log(error);
        }

        if (!sendingError) {
            swal({
                title: "Success",
                text: "Data uploaded successfully",
                icon: "success",
                button: "Ok",
            });
        } else {
            swal({
                title: "Error",
                text: "Error while uploading data",
                icon: "error",
                button: "Ok",
            });
        }

        // close modal after sending data
        // x = e => { document.getElementById('closeModal').click() }
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
                        <div className="modal-body mx-auto">
                            {loading ? (
                                <div
                                    className="spinner-border text-primary"
                                    role="status"
                                >
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            ) : null}
                            {!loading && (
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
                            )}
                        </div>
                        <div className="modal-footer">
                            {loading && null}
                            {!loading && (
                                <>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        id="closeModal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handleSubmit}
                                    >
                                        Send Sales
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
