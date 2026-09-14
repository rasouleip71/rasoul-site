export const metadata = { title: "Research" };

const netBuybackLink = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4905774";
const jmpLink = "/papers/The_Pricing_of_Household_Demand_when_Institutions_Are_Inelastic.pdf";
const marketRiskPremiaLink = "/papers/Who_Responds_to_Changes_in_the_Market_Risk_Premia_and_How.pdf";
const industrySignalsLink = "/papers/Industry_Level_Signals_from_Institutional_Portfolio_Reallocations.pdf";
const industryForecastingLink = "/papers/Granular_Industry_Fundamentals_and_Equity_Forecasting.pdf";

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
      "This paper studies the premium associated with firms' cash-flow cyclicality, as reflected in their payout composition. The net buyback-to-dividend ratio classifies firms by cash-flow cyclicality because the permanent component of earnings is typically distributed as dividends, while the temporary component is distributed through buybacks. The ratio therefore captures firms' cash-flow sensitivity to business cycles. I find that this measure proxies for cash-flow procyclicality and that investors require a positive premium for holding buyback-dominated assets.",
    link: netBuybackLink,
  },
  {
    title: "Who Responds to Changes in the Market Risk Premia, and How?",
    summary:
      "Variation in market risk premia is reflected in the portfolio decisions of only a limited and identifiable subset of institutional investors. Using quarterly 13F holdings, I show that approximately 60% of institutions do not systematically adjust aggregate equity exposure as compensation for bearing market risk changes over time. Among those that do respond, exposure adjustments are highly heterogeneous in both sign and magnitude. To understand what drives these differences in exposure responses, I develop a simple framework in which investment horizons and short-run constraints determine investors' willingness and ability to adjust risk exposure. Consistent with the model's predictions, low-turnover and long-horizon investors, particularly pension funds, are significantly more likely to increase equity exposure when compensation for risk rises. These findings highlight the importance of a limited, identifiable set of investors who shift capital in response to changing risk compensation, while highlighting the lack of systematic exposure adjustment among the majority of investors.",
    link: marketRiskPremiaLink,
  },
  {
    title: "Industry Level Signals from Institutional Portfolio Reallocations",
    summary:
      "This paper develops a framework to extract and quantify the information embedded in institutional investors' industry-level demand. Changes in portfolio allocations across industries are interpreted as signals about future returns, and investors are identified as industry experts based on the historical accuracy of their allocation shifts in predicting subsequent industry performance. Aggregating these expert signals yields a novel measure, Revealed Industry Information (RII). I show that RII strongly predicts future industry returns and generates economically significant abnormal performance that cannot be explained by standard asset pricing factors or industry characteristics. A long-short portfolio formed on RII earns a six-factor alpha of 1.6% per quarter after controlling for the Fama-French five factors and momentum.",
    link: industrySignalsLink,
  },
  {
    title: "Granular Industry Fundamentals and Equity Forecasting",
    summary:
      "What can granular industry fundamentals tell us about future equity prices? This paper examines whether real economic information from U.S. industries predicts subsequent equity returns. Using monthly measures of production, employment, hours worked, sales, and inventories across a broad panel of industries, I show that industry-level fundamentals predict both aggregate market returns and industry-level equity returns out of sample. The predictive content is strongest in upstream sectors such as manufacturing, transportation, and mining, suggesting that these industries contain early signals about future economic conditions. Different types of fundamentals convey distinct information: production and sales capture demand conditions, while labor-related measures and inventories reflect adjustment dynamics and uncertainty. Overall, the evidence suggests that granular real economic information is incorporated into equity prices only gradually, making industry fundamentals a useful source of information about expected returns.",
    link: industryForecastingLink,
    coauthor: "Elham Ghorbani",
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
      <ul className="list research-list">
        {projects.map((project) => (
          <li className="research-card" key={project.title}>
            {project.link ? (
              <a className="paper-title section-link" href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            ) : (
              <span className="paper-title">{project.title}</span>
            )}
            <ul className="sublist">
              {project.label ? (
                <li><span className="paper-tag">{project.label}</span></li>
              ) : null}
              {project.note ? (
                <li><span className="paper-status">{project.note}</span></li>
              ) : null}
              <li><div className="paper-abstract"><strong>Abstract:</strong> {project.summary}</div></li>
              {project.coauthor ? (
                <li><span className="paper-coauthor"><strong>Co-authored with:</strong> {project.coauthor}</span></li>
              ) : null}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
