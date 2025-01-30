import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="Application">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
