export const metadata = { title: "Research" };

const netBuybackLink = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4905774";
const jmpLink = "/papers/The_Pricing_of_Household_Demand_when_Institutions_Are_Inelastic.pdf";
const investorDemandLink = "/papers/Investor_Demand_and_Dynamic_Characteristic_Compensations.pdf";
const marketRiskPremiaLink = "/papers/Who_Responds_to_Changes_in_the_Market_Risk_Premia_and_How.pdf";

const projects = [
  {
    title: "Household Demand Dynamics and Equity Mispricing",
    summary:
      "Household demand shocks to individual stocks generate larger valuation distortions when the institutional investors holding the stock have lower capacity to absorb the shocks. I measure stock-level absorption capacity as the inverse of the average price elasticity of demand among institutions holding the stock before the shock occurs, and find that limited institutional absorption capacity amplifies the price impact of otherwise similar household demand shocks. Specifically, a household demand shock generates a larger contemporaneous and subsequent price impact when the stock is held primarily by institutions with lower price elasticity of demand. The resulting mispricing is economically meaningful: stocks with higher household demand shocks, and lower absorption capacity earn abnormal returns of about 1.36% quarterly and about 3.90% annually, and this price impact persists for up to three years with a non-monotonically declining term structure.",
    label: "Job Market Paper",
    note: "Accepted for presentation at the 2027 Southwestern Finance Association Annual Meeting.",
    link: jmpLink,
  },
  {
    title: "Who Responds to Changes in the Market Risk Premia, and How?",
    summary:
      "Variation in market risk premia is reflected in the portfolio decisions of only a limited and identifiable subset of institutional investors. Using quarterly 13F holdings, I show that approximately 60% of institutions do not systematically adjust aggregate equity exposure as compensation for bearing market risk changes over time. Among those that do respond, exposure adjustments are highly heterogeneous in both sign and magnitude. To understand what drives these differences in exposure responses, I develop a simple framework in which investment horizons and short-run constraints determine investors' willingness and ability to adjust risk exposure. Consistent with the model's predictions, low-turnover and long-horizon investors, particularly pension funds, are significantly more likely to increase equity exposure when compensation for risk raises. These findings highlight the importance of a limited, identifiable set of investors who shift capital in response to changing risk compensation, while highlighting the lack of systematic exposure adjustment among majority of investors.",
    link: marketRiskPremiaLink,
  },
  {
    title: "Investor Demand and Dynamic Characteristic Compensations",
    summary:
      "Standard factor models do not fully explain the compensation gap between persistent and transitory components of firm characteristics. We examine which drivers of investors' portfolio allocation choices contribute to the discrepancy by decomposing returns of characteristic-sorted portfolios into different demand-driven components: persistent demand shocks, which reflect idiosyncratic drivers such as emotion and liquidity needs, and demand for current and lagged characteristics, which reflect systematic drivers such as investment mandates and trading costs. We find that persistent demand shocks and demand for characteristics contribute significantly and oppositely to the discrepancy. Further, we provide new evidence that investors have a negative correlation between their demand for current and lagged characteristics.",
    link: investorDemandLink,
    coauthor: "Shuhao Ren",
  },
  {
    title: "Net Buyback Dynamics and Risk",
    summary:
      "This paper provides a risk-based explanation for the anomalous returns associated with share repurchases and equity issuance. Unlike dividends, repurchase and issuance cash flows are highly cyclical, exposing investors more strongly to fluctuations in aggregate consumption and marginal utility. I measure this exposure using a firm-level consumption beta based on the covariance between the net buyback-to-dividend ratio and consumption growth. Fama-MacBeth regressions show that firms with higher consumption betas earn higher subsequent returns, consistent with compensation for greater consumption risk. The findings connect corporate payout policy and the buyback anomaly to household hedging motives and the pricing of marginal-utility risk.",
    link: netBuybackLink,
  },
];

export default function Research() {
  return (
    <section className="page-wrap">
      <h1 className="page-title">Research</h1>
      <section id="research-interests" className="research-interests">
        <h2 className="section-title">Research Interests</h2>
        <p className="bio">
          My research lies at the intersection of asset pricing, financial institutions, and household finance. I study
          how household, retail, and institutional demand for equities responds to firm-level information and
          macroeconomic conditions, and how those portfolio decisions shape prices and expected returns.
        </p>
        <details className="research-interests-panel">
          <summary>Read more about my research interests</summary>
          <div className="research-interests-copy">
            <p>
              My work examines investor demand at both the firm and aggregate level. I am particularly interested in
              how heterogeneous investors adjust their portfolios in response to fundamentals, prices, and changes in
              the macroeconomic environment, and in what those adjustments reveal about the formation of equity
              prices.
            </p>
            <p>
              In my job market paper, I study the price effects of household demand for individual stocks. Household
              portfolio choices are highly persistent: an autoregressive specification explains roughly 70% of the
              variation in stock-level household demand. Demand shocks are associated with an immediate increase in
              prices followed by mean reversion, while the predictable component of household demand is associated
              with longer-run underperformance. The price impact is larger when the institutional investors holding a
              stock have lower demand elasticity and are therefore less able to absorb household demand shocks.
            </p>
            <p>
              In related work, I study how institutional investors change their equity positions across cash-flow,
              credit, and business-cycle conditions, proxied by dividend yields, term spreads, and default spreads. I
              examine how investment horizon, financial condition, and investor type shape these portfolio responses.
            </p>
            <p>
              I also study firms&apos; payout choices, with particular attention to buybacks, dividends, and issuance cash
              flows. These projects examine what payout composition reveals about cash-flow persistence, business-cycle
              exposure, and expected returns.
            </p>
            <p>
              Finally, I study how granular industry news - including employment, production, sales, and inventories -
              predicts aggregate and industry-level equity returns. I identify systematic industries whose real activity
              contains leading information for other sectors and the broader equity market.
            </p>
          </div>
        </details>
      </section>

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
