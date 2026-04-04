export const metadata = { title: "Research" };

const projects = [
  {
    title: "Who changes their demand for equities during macroeconomic shocks?",
    summary:
      "I study how investors adjust equity demand across macroeconomic cycles using GDP growth, inflation, interest rates, exchange rates, unemployment, and default-premium cycles, with substantial heterogeneity across investor types.",
  },
  {
    title: "Quarterly Excess Demand and Future Returns",
    summary:
      "Construct stock-level excess-demand signals from institutional holdings to build return-predictive investment strategies from quarterly to five-year horizons.",
  },
  {
    title: "Industry ETF Leading Indicator",
    summary:
      "Developed a framework to extract real-time industry signals from quarterly 13F holdings by identifying expert investors and aggregating positions into a predictive industry index.",
  },
  {
    title: "Industry News and Future Equity Returns",
    summary:
      "Developed leading indicators for aggregate equity markets using real-time industry-level data on employment, sales, and inventories.",
  },
  {
    title: "Cash Flow Cyclicality Index",
    summary:
      "Constructed a factor capturing firm-level business-cycle exposure using the buyback-to-dividend ratio.",
  },
];

export default function Research() {
  return (
    <section className="page-wrap">
      <h1 className="page-title">Research</h1>
      <p className="bio">
        My research program studies equity demand, business-cycle dynamics, and return predictability through signal
        engineering and portfolio formation.
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
