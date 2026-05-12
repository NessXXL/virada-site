import HeroTerminal from "./HeroTerminal.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content">
        <div className="hero-copy">
          <div className="eyebrow">
            <span>85% accuracy</span>
            <span>News → stock direction</span>
          </div>

          <h1>News hits. Virada calls the move.</h1>

          <p className="hero-subtitle">
            Virada turns market news into three simple signals: Positive, Negative, or Neutral.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#dashboard">
              Watch demo
              <span aria-hidden="true">→</span>
            </a>
            <a className="secondary-button" href="#signals">
              See signals
            </a>
          </div>

          <div className="mini-proof">
            <div>
              <strong>Positive</strong>
              <span>price likely rises</span>
            </div>
            <div>
              <strong>Negative</strong>
              <span>price likely falls</span>
            </div>
            <div>
              <strong>Neutral</strong>
              <span>small movement</span>
            </div>
          </div>
        </div>

        <HeroTerminal />
      </div>
    </section>
  );
}
