import logo from "../assets/virada-logo.png";

export default function Footer() {
  return (
    <footer className="footer section-shell">
      <div className="footer-brand">
        <img className="brand-logo" src={logo} alt="Virada logo" />
        <strong>Virada</strong>
      </div>
      <p>
        Forecasts are probabilistic and are not financial advice. Accuracy can vary by market conditions and data quality.
      </p>
    </footer>
  );
}
