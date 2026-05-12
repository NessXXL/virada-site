export default function HeroTerminal() {
  return (
    <div className="hero-visual" aria-label="Virada product preview">
      <div className="floating-card floating-card-one">
        <span className="mini-label">Bias filter</span>
        <strong>Noise cut</strong>
      </div>
      <div className="floating-card floating-card-two">
        <span className="mini-label">Direction</span>
        <strong>UP +2.8%</strong>
      </div>

      <div className="terminal-window">
        <div className="window-bar">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <span className="window-title">Virada Live</span>
          <span className="window-status">Online</span>
        </div>

        <div className="headline-box">
          <span className="label">Headline</span>
          <p>AI chip demand beats expectations.</p>
        </div>

        <div className="prediction-grid">
          <div className="prediction-card green-card">
            <span>Signal</span>
            <strong>Positive</strong>
          </div>
          <div className="prediction-card purple-card">
            <span>Confidence</span>
            <strong>91%</strong>
          </div>
          <div className="prediction-card white-card">
            <span>Forecast</span>
            <strong>Rise</strong>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-topline">
            <div>
              <span>Move</span>
              <strong>+2.8%</strong>
            </div>
            <div className="signal-pill">Bullish</div>
          </div>
          <div className="bar-chart" aria-hidden="true">
            <i style={{ height: "34%" }} />
            <i style={{ height: "48%" }} />
            <i style={{ height: "43%" }} />
            <i style={{ height: "58%" }} />
            <i style={{ height: "64%" }} />
            <i style={{ height: "55%" }} />
            <i style={{ height: "72%" }} />
            <i style={{ height: "68%" }} />
            <i style={{ height: "82%" }} />
            <i style={{ height: "76%" }} />
            <i style={{ height: "92%" }} />
            <i style={{ height: "100%" }} />
          </div>
        </div>

        <div className="command-box">
          <span>Ask Virada</span>
          <p>Why is this positive?</p>
          <button type="button">Explain</button>
        </div>
      </div>
    </div>
  );
}
