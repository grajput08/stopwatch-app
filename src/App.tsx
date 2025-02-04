import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StopWatch from "./components/StopWatch";
import ChessBoard from "./components/ChessBoard";
import TargetUI from "./components/TargetUI";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto">
          <Routes>
            <Route path="/stopwatch" element={<StopWatch />} />
            <Route path="/chessboard" element={<ChessBoard />} />
            <Route path="/targetui" element={<TargetUI />} />
            <Route path="/" element={<StopWatch />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
