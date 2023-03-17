<<<<<<< HEAD
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";


import AuthContexProvider from "./context/AuthContextProvider";

import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

=======
import './index.css';
import Gallery from "./views/Gallery"
import Dashboard from "./views/Dashboard"
import ChartProvider from './context/ChartContext';
>>>>>>> origin/private-view

import { Routes, Route } from "react-router-dom";

function App() {
<<<<<<< HEAD
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
=======
  return (
    <>
    <ChartProvider>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dashboard/:chartId" element={<Dashboard />} />
      </Routes>
    </ChartProvider>
    </>
  );
>>>>>>> origin/private-view
}

export default App;
