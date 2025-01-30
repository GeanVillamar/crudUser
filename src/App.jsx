import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home";
import ModalUpdate from "./components/ModalUpdate";

function App() {
  return (
    <div className="Application">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={<ModalUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
