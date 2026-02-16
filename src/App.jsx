import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PurchaseSuccessPage from "./pages/PurchaseSuccessPage";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/purchase-success" element={<PurchaseSuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
