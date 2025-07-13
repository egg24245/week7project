import "./style/global.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import WildlifePage from "./pages/WildlifePage";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="app-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wildlife" element={<WildlifePage />} />
        </Routes>
      </div>
    </>
  );
}
