import './index.css';
import Gallery from "./views/Gallery"
import Dashboard from "./views/Dashboard"
import ChartProvider from './context/ChartContext';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <ChartProvider>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ChartProvider>
    </>
  );
}

export default App;
