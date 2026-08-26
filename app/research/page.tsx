export const metadata = { title: "Research" };

const netBuybackLink = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4905774";
const industryEtfLink = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5527101";
const ssrn5527180Link = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5527180";

const projects = [
  {
    title: "Institutional Demand and Long-Horizon Expected Returns",
    label: "Job Market Paper",
    summary:
      "I study institutional investor demand and its implications for long-horizon expected returns. I show that excess institutional demand creates persistent variation in expected returns extending up to five years, with a one-standard-deviation increase associated with nearly 40 percentage points lower cumulative returns over that period. Within the five-year horizon, the quarterly term structure of expected returns displays a surprisingly persistent pattern rather than a monotonic decay. For example, the expected return effect associated with excess institutional demand is stronger in the sixth quarter than in the subsequent quarter. Consistent with limits-to-arbitrage, the predictability is strongest among small firms, where a long-short portfolio based on institutional demand earns a five-factor alpha of roughly 3% per quarter. Together, the evidence points to a slow-moving demand channel in asset prices that creates long-run return predictability.",
  },
  {
    title: "Net Buyback Dynamics and Risk",
    note: "R&R, Journal of Portfolio Management",
    summary:
      "This paper constructs a business-cycle exposure factor using the buyback-to-dividend ratio to distinguish between transitory and persistent cash-flow components. The factor is priced in the cross-section of stock returns, linking payout dynamics to systematic risk.",
    link: netBuybackLink,
  },
  {
    title: "Institutional Equity Demand over Macroeconomic Cycles",
    summary:
      "This paper studies how different types of institutional investors - banks, pension funds, insurers, hedge funds, and mutual funds - adjust their equity demand in response to macroeconomic conditions. I document heterogeneous responses across investor types and identify which institutions drive equity demand over the business and financial cycle.",
  },
  {
    title: "Informational Content of Institutional Industry Allocation",
    summary:
      "Using 13F data, I identify institutional investors with comparative advantage across industries based on the accuracy of their historical allocations. Aggregating their signals, I construct an industry-level predictor that provides leading information for future equity returns.",
    link: industryEtfLink,
  },
  {
    title: "Industry Fundamentals as Leading Indicators for Equity Returns",
    summary:
      "This paper constructs forward-looking signals for aggregate equity returns using real-time industry-level data. I show that changes in industry fundamentals such as employment, sales, and inventories contain predictive information for future market returns.",
  },
  {
    title: "Disagreement Among Institutional Investors and Expected Returns",
    summary:
      "I measure disagreement among institutional investors using heterogeneity in equity demand and show that firms with higher disagreement earn lower subsequent returns. The results highlight the role of belief dispersion in shaping expected returns.",
    link: ssrn5527180Link,
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

      <h2 className="section-title">Research</h2>
      <ul className="list">
        {projects.map((project) => (
          <li key={project.title}>
            {project.link ? (
              <a className="paper-title section-link" href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            ) : (
              <span className="paper-title">{project.title}</span>
            )}
            <ul className="sublist">
              {project.label ? (
                <li><strong>{project.label}</strong></li>
              ) : null}
              {project.note ? (
                <li><strong className="paper-status">{project.note}</strong></li>
              ) : null}
              <li><strong>Abstract:</strong> {project.summary}</li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
