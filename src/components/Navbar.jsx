import logo from "../assets/virada-logo.png";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="top-notice">
        <span className="pulse-dot" />
        85% accuracy — news turns into stock direction
      </div>

      <nav className="navbar">
        <a className="brand" href="#top" aria-label="Virada home">
          <img className="brand-logo" src={logo} alt="Virada logo" />
          <span>Virada</span>
        </a>

        <div className="nav-links" aria-label="Primary navigation">
          <a href="#signals">Signals</a>
          <a href="#workflow">How it works</a>
          <a href="#dashboard">Demo</a>
          <a href="#faq">FAQ</a>
        </div>

        <a className="nav-cta" href="mailto:hello@virada.ai">
          Join beta
        </a>
      </nav>
    </header>
  );
}
