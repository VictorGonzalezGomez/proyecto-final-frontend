import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className="App">
            <Navbar />
            <HomePage />

            <Footer />
        </div>
    );
}

export default App;
