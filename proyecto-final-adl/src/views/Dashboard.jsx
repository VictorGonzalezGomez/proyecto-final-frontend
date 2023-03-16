import React from "react";
import Menu from "../components/Menu";
import swal from "sweetalert";
import { Navigate } from "react-router-dom";
import { AuthContex } from "../context/AuthContextProvider";

export default function Dashboard () {
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
        <div className="d-flex min-vh-100">
            <Menu />
            {/* Masonry + Chart expanded */}
        </div>
    )
}