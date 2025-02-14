import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SchedulePage from "./components/SchedulePage";
import LoveLetter from "./components/LoveLetter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SchedulePage />} />
        <Route path="/letter" element={<LoveLetter />} />
      </Routes>
    </Router>
  );
}

export default App;