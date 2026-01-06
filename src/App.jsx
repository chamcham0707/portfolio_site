import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LivealoneProject from "./pages/LivealoneProject";
import RandomDefenseProject from "./pages/RandomDefenseProject";
import CobotProject from "./pages/CobotProject";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/livealone" element={<LivealoneProject />} />
        <Route
          path="/project/random-defense"
          element={<RandomDefenseProject />}
        />
        <Route path="/project/co-bot" element={<CobotProject />} />
      </Routes>
    </>
  );
}

export default App;
