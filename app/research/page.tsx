export const metadata = { title: "Research" };

const projects = [
  {
    title: "Buyback-to-Dividend Ratio",
    summary:
      "Capital allocation signal designed to identify firms with investment opportunities and risky cash flows; predicts the cross-section of stock returns.",
  },
  {
    title: "Previous-Winner Holdings Index",
    summary:
      "Flow-based signal that is high when stocks are held by previous winners; linked to stronger average subsequent returns.",
  },
  {
    title: "Predictive-Winner Demand Framework",
    summary:
      "Demand-based return prediction where winners are defined by recent predictive performance.",
  },
  {
    title: "Industry-Expert Holdings Index",
    summary:
      "Industry-level return forecasting using observed holdings of identified industry experts.",
  },
  {
    title: "Industry Fundamentals Dataset",
    summary:
      "Comprehensive dataset of industry employment, production, and sales used to extract which industries are systematically informative about future returns.",
  },
  {
    title: "Latent-Demand Portfolios",
    summary:
      "Portfolio construction based on latent demand to identify who drives demand pressure and return dynamics.",
  },
];

export default function Research() {
  return (
    <section className="page-wrap">
      <h1 className="page-title">Research</h1>
      <p className="bio">
        My research program centers on return prediction through signal engineering, portfolio formation, and demand
        analysis across cross-sectional and time-series settings.
      </p>

      <h2 className="section-title">Current Signal and Portfolio Projects</h2>
      <ul className="list">
        {projects.map((project) => (
          <li key={project.title}>
            <strong>{project.title}:</strong> {project.summary}
          </li>
        ))}
      </ul>
    </section>
  );
}
