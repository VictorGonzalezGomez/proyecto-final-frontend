import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage";

import ChartProvider from "./context/ChartContext";
import AuthContexProvider from "./context/AuthContextProvider";

import { Routes, Route } from "react-router-dom";
import RegisterPage from "./views/RegisterPage";
import Profilepage from "./views/ProfilePage"
import Gallery from "./views/Gallery";

function App() {
    return (
        <AuthContexProvider>
            <ChartProvider>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/profile" element={<Profilepage/>} />
                <Route path="/gallery" element={<Gallery/>} />             
            </Routes>
           </ChartProvider>
        </AuthContexProvider>
    );
}

export default App;
