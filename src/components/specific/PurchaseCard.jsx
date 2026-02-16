import "./PurchaseCard.css";

export default function PurchaseCard({
  price = "49",
  originalPrice = "399",
  onBuyClick
}) {
  return (
    <>
      {/* Desktop Card */}
      <div className="purchase-card-wrapper d-none d-md-block">
        <div className="purchase-card shadow-lg">
          <div className="status mb-3">
            <span className="badge">✔ Unlocks Digital Product</span>
          </div>

          <div className="pricing mb-4">
            <span className="original-price">₹{originalPrice}</span>
            <span className="current-price">₹{price}</span>
          </div>

          <button className="cta-button" onClick={onBuyClick}>
            Get it now →
          </button>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="mobile-sticky-cta d-md-none">
        <div className="mobile-price-container d-flex justify-content-between align-items-center">
          <div className="mobile-pricing">
            <span className="original-price">₹{originalPrice}</span>
            <span className="current-price">₹{price}</span>
          </div>
          <button className="sticky-button" onClick={onBuyClick}>
            Get it now →
          </button>
        </div>
      </div>
    </>
  );
}
