import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Add from "./pages/add.jsx";
import DownloadPDF from "./pages/pdf.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/add" element={<Add />} />
      <Route exact path="/pdf" element={<DownloadPDF />} />
    </Routes>
  );
}

export default App;
