import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PurchaseSuccessPage from "./pages/PurchaseSuccessPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/purchase-success" element={<PurchaseSuccessPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
<Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
<Route path="/refund-policy" element={<RefundPolicyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
