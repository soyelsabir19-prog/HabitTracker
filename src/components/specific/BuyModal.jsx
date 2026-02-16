import { useState } from "react";
import { createOrder } from "../../services/paymentService";
import "./BuyModal.css";

export default function BuyModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handlePay = async () => {
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all details");
      return;
    }

    if (form.phone.length !== 10) {
      alert("Enter valid 10-digit mobile number");
      return;
    }

    await createOrder(form);
  };

  return (
    <div
      className="buy-modal-overlay"
      onClick={(e) => {
        if (e.target.classList.contains("buy-modal-overlay")) {
          onClose();
        }
      }}
    >
      <div className="buy-modal">
        <div className="buy-modal-header">
          <h4>Complete Your Purchase</h4>
          <p>Enter your details to get instant access</p>
        </div>

        <div className="buy-modal-body">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />
          </div>

          <button className="pay-btn" onClick={handlePay}>
            Pay ₹49 & Get Instant Access →
          </button>

          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <p className="secure-note">
            Secure payment • Instant download
          </p>
        </div>
      </div>
    </div>
  );
}
