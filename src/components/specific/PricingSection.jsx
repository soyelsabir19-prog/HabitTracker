import { useState } from "react";
import BuyModal from "./BuyModal";
import "./PricingSection.css";

export default function PricingSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="pricing" id="pricing">
      <h2>Instant Access</h2>

      <ul>
        <li>Instant download</li>
        <li>Lifetime use</li>
        <li>Shareable & sellable</li>
        <li>Digital + printable</li>
      </ul>

      <h3>₹1 (One-time)</h3>

      <button onClick={() => setOpen(true)}>Buy Now</button>

      {open && <BuyModal onClose={() => setOpen(false)} />}
    </section>
  );
}
