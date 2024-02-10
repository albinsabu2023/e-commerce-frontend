import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"></Route>
          <Route path="/cart"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
