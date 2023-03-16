import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage";
import Faq from "./views/FAQ";
import AboutUs from "./views/AboutUs";
import Features from "./views/Features";
import Gallery from "./views/Gallery";


import AuthContexProvider from "./context/AuthContextProvider";
import ChartProvider from "./context/ChartContext";

import { Routes, Route } from "react-router-dom";
import RegisterPage from "./views/RegisterPage";


function App() {
    return (
        <AuthContexProvider>
            <ChartProvider>
            
            <Navbar />
            <Routes>
                <Route path="/faq" element={<Faq/>} />
                <Route path="/about-us" element={<AboutUs/>} />
                <Route path="/features" element={<Features/>} />
                <Route path="/" element={<HomePage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/gallery" element={<Gallery/>} />
            </Routes>
            <Footer />
            </ChartProvider>S
        </AuthContexProvider>
    );
}

export default App;
