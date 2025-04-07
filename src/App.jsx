import Routing from "./routes/Routing";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
