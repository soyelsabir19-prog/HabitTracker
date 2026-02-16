import axios from "axios";

export const createOrder = async (userData) => {
  try {
    // 1️⃣ Create order from backend
    const { data } = await axios.post(
      "/api/create-order",
      {
        amount: 49,
        user: userData,
      }
    );

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: "INR",

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
          const verify = await axios.post(
            "/api/verify-payment",
            {
              ...response,
              name: userData.name,
              email: userData.email,
            }
          );

          if (verify.data.status === "success") {
            window.location.href =
              "/purchase-success?receipt=" +
              verify.data.receiptId +
              "&name=" +
              userData.name +
              "&email=" +
              userData.email +
              "&amount=49" +
              "&orderId=" +
              response.razorpay_order_id;
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
