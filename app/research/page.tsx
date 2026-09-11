export const metadata = { title: "Research" };

const netBuybackLink = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4905774";
const ssrn5527180Link = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5527180";
const jmpLink = "/papers/The_Pricing_of_Household_Demand_when_Institutions_Are_Inelastic.pdf";
const marketRiskPremiaLink = "/papers/Who_Responds_to_Changes_in_the_Market_Risk_Premia_and_How.pdf";
const industrySignalsLink = "/papers/Industry_Level_Signals_from_Institutional_Portfolio_Reallocations.pdf";

const projects = [
  {
    title: "Household Demand Pressure and Equity Mispricing",
    label: "Job Market Paper",
    summary:
      "Household demand shocks generate valuation distortions when the institutional investors absorbing them are insufficiently elastic. I develop a measure of household demand pressure, defined as household latent demand scaled by institutional absorption capacity, and show that it explains both contemporaneous price impacts and long-horizon return reversals. Stocks experiencing greater household demand pressure earn significantly lower subsequent returns for up to five years, with the strongest effects occurring when institutional absorption capacity is limited. Decomposing pressure reveals two distinct channels: innovation pressure drives immediate price increases, whereas persistent pressure accounts for most of the subsequent reversal. The relation survives controls for size, idiosyncratic volatility, analyst coverage, and institutional ownership, indicating that demand-induced mispricing depends critically on the availability of elastic institutional capital.",
    link: jmpLink,
  },
  {
    title: "Net Buyback Dynamics and Risk",
    note: "R&R, Journal of Portfolio Management",
    summary:
      "I find that the net buyback-to-dividend ratio classifies firms based on the cyclicality of their cash flow. This is because the permanent component of earnings is usually distributed as dividends, while the temporary component is distributed as buybacks. Their ratio, then, mirrors cash flow&apos;s sensitivity to business cycles. I utilize this ratio to explore potential premiums associated with cash-flow procyclicality. The findings indicate a positive premium associated with buyback-dominated assets. This is attributed to their cash flow exhibiting strong co-variation with the marginal utility of investors, rendering them a riskier option for hedging against consumption and aggregate wealth fluctuations.",
    link: netBuybackLink,
  },
  {
    title: "Who Responds to Changes in the Market Risk Premia, and How?",
    summary:
      "Variation in market risk premia is reflected in the portfolio decisions of only a limited and identifiable subset of institutional investors. Using quarterly 13F holdings, I show that approximately 60% of institutions do not systematically adjust aggregate equity exposure as compensation for bearing market risk changes over time. Among those that do respond, exposure adjustments are highly heterogeneous in both sign and magnitude. To understand what drives these differences in exposure responses, I develop a simple framework in which investment horizons and short-run constraints determine investors&apos; willingness and ability to adjust risk exposure. Consistent with the model&apos;s predictions, low-turnover and long-horizon investors, particularly pension funds, are significantly more likely to increase equity exposure when compensation for risk rises. These findings highlight the importance of a limited, identifiable set of investors who shift capital in response to changing risk compensation, while highlighting the lack of systematic exposure adjustment among the majority of investors.",
    link: marketRiskPremiaLink,
  },
  {
    title: "Industry Level Signals from Institutional Portfolio Reallocations",
    summary:
      "This paper develops a framework to extract and quantify the information embedded in institutional investors&apos; industry-level demand. Changes in portfolio allocations across industries are interpreted as signals about future returns, and investors are identified as industry experts based on the historical accuracy of their allocation shifts in predicting subsequent industry performance. Aggregating these expert signals yields a novel measure, Revealed Industry Information (RII). I show that RII strongly predicts future industry returns and generates economically significant abnormal performance that cannot be explained by standard asset pricing factors or industry characteristics. A long-short portfolio formed on RII earns a six-factor alpha of 1.6% per quarter after controlling for the Fama-French five factors and momentum.",
    link: industrySignalsLink,
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
