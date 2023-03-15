import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Faq from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import Features from "./pages/Features";



import AuthContexProvider from "./context/AuthContextProvider";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <AuthContexProvider>
            

            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/features" element={<Features />} />
            </Routes>
            <Footer />
            
        </AuthContexProvider>
    );
}

export default App;
