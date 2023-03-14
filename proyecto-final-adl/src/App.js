import './index.css';
import Gallery from "./views/Gallery"
import ChartProvider from './context/ChartContext';

function App() {
  return (
    <>
      <ChartProvider>
        <Gallery/>
      </ChartProvider>
    </>
  );
}

export default App;
