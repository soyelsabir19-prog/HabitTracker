import axios from "axios";

export const createOrder = async (userData) => {
  try {
    // 1️⃣ Create order from backend
    const { data } = await axios.post(
      "http://localhost:5000/create-order",
      {
        amount: 49, // amount in INR (backend converts to paise)
        user: userData,
      }
    );

    // 2️⃣ Configure Razorpay Checkout
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: "INR",

      // ✅ THIS FIXES EMPTY PRODUCT NAME
      name: "Habit Tracker",
      description: "Premium Plan Access",
      order_id: data.id,

      prefill: {
        name: userData.name || "",
        email: userData.email || "",
        contact: userData.phone || "",
      },

      handler: async function (response) {
        try {
          // 3️⃣ Verify payment on backend
          const verify = await axios.post(
            "http://localhost:5000/verify-payment",
            response
          );

          if (verify.data.status === "success") {
              // Redirect to purchase success page with token
      window.location.href = `/purchase-success?token=${verify.data.token}`;
          } else {
            alert("Payment verification failed");
          }
        } catch (err) {
          console.error("Verification error:", err);
          alert("Verification failed");
        }
      },

      theme: {
        color: "#2563eb",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (error) {
    console.error("Order creation failed:", error);
    alert("Something went wrong while initiating payment");
  }
};
