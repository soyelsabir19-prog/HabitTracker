export async function createOrder(userData) {
  const res = await fetch("http://localhost:5000/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  });

  const data = await res.json();

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY,
    amount: data.amount,
    currency: "INR",
    name: "Daily Habit Tracker",
    order_id: data.orderId,
    handler: function () {
      alert("Payment successful! Check your email.");
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
}
