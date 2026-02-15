import "./WhatYouGetSection.css";

export default function WhatYouGetSection() {
  return (
    <section className="what-you-get py-5 bg-light">
      <div className="container">

        {/* Section Header */}
        <h2 className="fw-bold mb-3 text-center">
          Monthly Habit Tracker
        </h2>
         <h2 className="fw-bold mb-3 text-center">
        (Google Sheets + Free Printable)
        </h2>
        <p className="lead text-center mb-5">
          This Habit Tracker combines a powerful Google Sheets dashboard with a clean printable tracker, giving you structure without stress.
        </p>

        {/* Features */}
        <h3 className="fw-semibold mb-4 text-center">✓ What You Get</h3>

        <div className="features row g-4">

          {/* Google Sheets Tracker */}
          <div className="col-md-6">
            <div className="feature-card p-4 rounded shadow-sm h-100">
              <h4 className="mb-3">➤ Google Sheets Habit Tracker (Main Tool)</h4>
              <ul className="list-unstyled">
                <li>✔ Track up to 25 habits (expandable)</li>
                <li>✔ Monthly & yearly auto-updates</li>
                <li>✔ Daily checkboxes for easy tracking</li>
                <li>✔ Works on mobile & desktop</li>
                <li>✔ Clean, distraction-free layout</li>
              </ul>
            </div>
          </div>

          {/* Analytics Dashboard */}
          <div className="col-md-6">
            <div className="feature-card p-4 rounded shadow-sm h-100">
              <h4 className="mb-3">★ Real-Time Analytics Dashboard</h4>
              <ul className="list-unstyled">
                <li>✔ Consistency Line — daily progress trend</li>
                <li>✔ Success Donut — monthly completion percentage</li>
                <li>✔ Weekly Comparison Bars — spot highs and dips</li>
                <li>✔ Top Habits View — your strongest routines</li>
              </ul>
            </div>
          </div>

          {/* Printable Habit Tracker */}
          <div className="col-md-6">
            <div className="feature-card p-4 rounded shadow-sm h-100">
              <h4 className="mb-3">✶ Printable Habit Tracker (Free Bonus)</h4>
              <ul className="list-unstyled">
                <li>✔ 10 habit slots</li>
                <li>✔ 30-day layout</li>
                <li>✔ Name & month section</li>
                <li>✔ Progress graph area</li>
                <li>✔ Minimal, clean design</li>
              </ul>
            </div>
          </div>

          {/* Instant Access */}
          <div className="col-md-6">
            <div className="feature-card p-4 rounded shadow-sm h-100">
              <h4 className="mb-3">☑ Instant Access</h4>
              <ul className="list-unstyled">
                <li>✔ Instant download</li>
                <li>✔ Lifetime use</li>
                <li>✔ Shareable & Sellable</li>
                <li>✔ Digital + printable</li>
                <li>✔ No subscriptions or apps</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
