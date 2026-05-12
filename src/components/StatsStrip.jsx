import { stats } from "../data.js";

export default function StatsStrip() {
  return (
    <section className="stats-strip section-shell" aria-label="Product metrics">
      {stats.map((item) => (
        <div className="stat-card" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}
