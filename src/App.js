import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Spectator from "./pages/Spectator";

function App() {
  return (
    <div className="app">
      {/* navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Spectator />} />
      </Routes>
    </div>
  );
}

export default App;
