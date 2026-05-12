export default function ProofSection() {
  return (
    <section className="section-shell proof-section">
      <div className="proof-card large-proof">
        <span className="section-kicker">Why Virada</span>
        <h2>Built for decisions, not confusion.</h2>
        <p>Most tools explain the past. Virada calls the next likely move.</p>
      </div>

      <div className="proof-grid">
        <article className="proof-card">
          <span className="proof-icon">01</span>
          <h3>Direction first</h3>
          <p>Every output points to rise, fall, or flat.</p>
        </article>
        <article className="proof-card">
          <span className="proof-icon">02</span>
          <h3>Bias filter</h3>
          <p>Hype, panic, and weak media noise get reduced.</p>
        </article>
        <article className="proof-card">
          <span className="proof-icon">03</span>
          <h3>Fast confidence</h3>
          <p>See the signal strength before you react.</p>
        </article>
      </div>
    </section>
  );
}
