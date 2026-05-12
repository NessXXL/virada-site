import logo from "../assets/virada-logo.png";
import { liveSignals } from "../data.js";

function SignalTag({ type }) {
  return <span className={`signal-tag ${type.toLowerCase()}`}>{type}</span>;
}

export default function DashboardShowcase() {
  return (
    <section id="dashboard" className="section-shell dashboard-section">
      <div className="dashboard-copy">
        <span className="section-kicker">Live demo</span>
        <h2>Read the signal instantly.</h2>
        <p>Headline, confidence, and direction in one clean view.</p>
      </div>

      <div className="dashboard-shell">
        <div className="dashboard-sidebar">
          <img className="sidebar-logo" src={logo} alt="Virada logo" />
          <a className="active" href="#dashboard">Signals</a>
          <a href="#dashboard">Watchlist</a>
          <a href="#dashboard">Bias Lab</a>
          <a href="#dashboard">Reports</a>
        </div>

        <div className="dashboard-main">
          <div className="dashboard-header">
            <div>
              <span>Market feed</span>
              <h3>Live predictions</h3>
            </div>
            <button type="button">Export</button>
          </div>

          <div className="signal-feed">
            {liveSignals.map((item) => (
              <article className="feed-row" key={item.headline}>
                <div className="ticker-box">{item.ticker}</div>
                <div className="feed-content">
                  <div className="feed-meta">
                    <SignalTag type={item.signal} />
                    <span>{item.confidence}% confidence</span>
                  </div>
                  <p>{item.headline}</p>
                  <div className="progress-track">
                    <span style={{ width: `${item.confidence}%` }} />
                  </div>
                </div>
                <strong className="direction-number">{item.direction}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
