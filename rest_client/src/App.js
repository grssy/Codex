import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WorldClock from "./pages/WorldClock";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorldClock />} />
      </Routes>
    </Router>
  );
}

export default App;
