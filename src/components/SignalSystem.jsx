import { signalCards } from "../data.js";

export default function SignalSystem() {
  return (
    <section id="signals" className="section-shell content-section">
      <div className="section-heading centered">
        <span className="section-kicker">Simple signals</span>
        <h2>Positive. Negative. Neutral.</h2>
        <p>No confusion. Just the likely stock direction.</p>
      </div>

      <div className="signal-grid">
        {signalCards.map((card) => (
          <article className={`signal-card ${card.className}`} key={card.name}>
            <div className="signal-card-top">
              <span className="signal-icon">{card.code}</span>
              <span className="confidence">{card.confidence}</span>
            </div>
            <h3>{card.name}</h3>
            <p>{card.description}</p>
            <div className="movement-box">
              <span>Meaning</span>
              <strong>{card.movement}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
