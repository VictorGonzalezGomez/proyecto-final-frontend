import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";


import AuthContexProvider from "./context/AuthContextProvider";

import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";


function App() {
    return (
        <AuthContexProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/register" element={<RegisterPage/>} />
    
            </Routes>
            <Footer />
        </AuthContexProvider>
    );
}

export default App;
