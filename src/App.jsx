import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LivealoneProject from "./pages/LivealoneProject";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/livealone" element={<LivealoneProject />} />
      </Routes>
    </>
  );
}

export default App;
