import { useState } from "react";
import { createOrder } from "../../services/paymentService";
import "./BuyModal.css";

export default function BuyModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handlePay = async () => {
    await createOrder(form);
  };

  return (
    <div className="buy-modal-overlay" onClick={onClose}>
      <div
        className="buy-modal card shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="card-body p-4">
          <h4 className="fw-bold mb-2 text-center">Complete your purchase</h4>
          <p className="text-muted text-center mb-4">
            Enter your details to get instant access
          </p>

          {/* Form */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your name"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="10-digit mobile number"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />
          </div>

          {/* CTA */}
          <button
            className="btn btn-primary w-100 py-2 fw-semibold"
            onClick={handlePay}
          >
            Pay ₹149 & Get Instant Access →
          </button>

          {/* Cancel */}
          <button
            className="btn btn-link w-100 mt-2 text-muted"
            onClick={onClose}
          >
            Cancel
          </button>

          {/* Trust note */}
          <p className="text-center text-muted small mt-3 mb-0">
            Secure payment • Instant email delivery
          </p>
        </div>
      </div>
    </div>
  );
}
