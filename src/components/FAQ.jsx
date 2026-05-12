import { faqs } from "../data.js";

export default function FAQ() {
  return (
    <section id="faq" className="section-shell faq-section">
      <div className="section-heading centered">
        <span className="section-kicker">FAQ</span>
        <h2>Clear. Fast. Honest.</h2>
      </div>

      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
