import { Outlet, Navigate } from "react-router-dom";

const privateRoutes = () => {
    const token = localStorage.getItem("tk");
    
    return (
        token ? <Outlet /> : <Navigate to="/" />
        );

};

export default privateRoutes;