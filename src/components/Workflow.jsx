import { workflow } from "../data.js";

export default function Workflow() {
  return (
    <section id="workflow" className="section-shell split-section">
      <div className="section-heading sticky-heading">
        <span className="section-kicker">How it works</span>
        <h2>Headline in. Signal out.</h2>
        <p>Virada removes noise before calling the move.</p>
      </div>

      <div className="workflow-stack">
        {workflow.map((step) => (
          <article className="workflow-card" key={step.number}>
            <span>{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
