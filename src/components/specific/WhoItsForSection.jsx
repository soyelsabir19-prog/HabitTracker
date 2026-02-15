import "./WhoItsForSection.css";

export default function WhoItsForSection() {
  const audience = [
    { icon: "🎓", title: "Students", desc: "Building strong daily routines" },
    { icon: "🎨", title: "Creators", desc: "Trying to stay consistent" },
    { icon: "📵", title: "Minimalists", desc: "Tired of habit apps & noise" },
    { icon: "📈", title: "Anyone", desc: "Who wants visible progress" },
  ];

  return (
    <section className="who-its-for py-5">
      <div className="container">

        {/* Section title */}
        <h2 className="section-title mb-4 text-center">
          Who This Is For
        </h2>

        {/* Audience cards */}
        <div className="row g-4 justify-content-center">
          {audience.map((item, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3 d-flex">
              <div className="audience-card flex-fill text-center">
                <div className="audience-icon">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="closing-statement text-center mt-4">
          <p className="lead">
            If you want a system that’s <strong>simple, structured, and actually usable</strong> — this is it.
          </p>
          <p className="final-line">
            ★ Start tracking. Stay consistent. Build better habits.
          </p>
        </div>

      </div>
    </section>
  );
}
