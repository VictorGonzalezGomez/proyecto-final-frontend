import React from "react";
import Charts from "../components/Charts";
import Menu from "../components/Menu";
import swal from "sweetalert";
import { Navigate } from "react-router-dom";
import { AuthContex } from "../context/AuthContextProvider";
export default function Gallery() {
    const { isAuth } = React.useContext(AuthContex);
    if (!isAuth) {
        swal({
            title: "Error",
            text: "You are not logged in",
            icon: "error",
            button: false,
        });
        setTimeout(() => {
            swal.close();
        }, 2000);

        return <Navigate to="/" replace={true} />;
    }
    return (
        <div className="gallery-charts d-flex">
            <Menu />
            <Charts />
        </div>
    );
}
