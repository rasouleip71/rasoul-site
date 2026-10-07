export const metadata = { title: "Research" };

const netBuybackLink = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4905774";
const jmpLink = "/papers/The_Pricing_of_Household_Demand_when_Institutions_Are_Inelastic.pdf";
const investorDemandLink = "/papers/Investor_Demand_and_Dynamic_Characteristic_Compensations.pdf";
const marketRiskPremiaLink = "/papers/Who_Responds_to_Changes_in_the_Market_Risk_Premia_and_How.pdf";
const buybackCashFlowsLink = "https://openurl.ebsco.com/EPDB%3Agcd%3A6%3A21636358/detailv2?sid=ebsco%3Aplink%3Acrawler-gcd&id=ebsco%3Agcd%3A182205645&crl=c&jrnl=18234992&link_origin=scholar.google.com";

const projects = [
  {
    title: "Household Demand Dynamics and Equity Mispricing",
    summary:
      "Household demand shocks to individual stocks generate larger valuation distortions when the institutional investors holding the stock have lower capacity to absorb the shocks. I measure stock-level absorption capacity as the inverse of the average price elasticity of demand among institutions holding the stock before the shock occurs, and find that limited institutional absorption capacity amplifies the price impact of otherwise similar household demand shocks. Specifically, a household demand shock generates a larger contemporaneous and subsequent price impact when the stock is held primarily by institutions with lower price elasticity of demand, and therefore lower capacity to absorb the shock. The resulting mispricing is economically meaningful: stocks with higher household demand shocks, and lower absorption capacity earn abnormal returns of about 1.36% per quarter in the short run and about 3.90% per year, and the price impact persists for up to three years with a non-monotonically declining term structure.",
    label: "Job Market Paper",
    link: jmpLink,
  },
  {
    title: "Investor Demand and Dynamic Characteristic Compensations",
    summary:
      "Standard factor models and theories fail to explain the compensation discrepancy between persistent and transitory components of firm characteristics. We examine which drivers of investors' portfolio allocation choices contribute to the discrepancy by decomposing returns of characteristic-sorted portfolios into different demand-driven components: persistent demand shocks, which reflect idiosyncratic drivers such as emotion and liquidity needs, and demand for current and lagged characteristics, which reflect systematic drivers such as investment mandates and trading costs. We find that persistent demand shocks and demand for characteristics contribute significantly and oppositely to the discrepancy. Further, we provide new evidence that investors have a negative correlation between their demand for current and lagged characteristics.",
    link: investorDemandLink,
    coauthor: "Shuhao Ren",
  },
  {
    title: "Who Responds to Changes in the Market Risk Premia, and How?",
    summary:
      "Variation in market risk premia is reflected in the portfolio decisions of only a limited and identifiable subset of institutional investors. Using quarterly 13F holdings, I show that approximately 60% of institutions do not systematically adjust aggregate equity exposure as compensation for bearing market risk changes over time. Among those that do respond, exposure adjustments are highly heterogeneous in both sign and magnitude. To understand what drives these differences in exposure responses, I develop a simple framework in which investment horizons and short-run constraints determine investors' willingness and ability to adjust risk exposure. Consistent with the model's predictions, low-turnover and long-horizon investors, particularly pension funds, are significantly more likely to increase equity exposure when compensation for risk raises. These findings highlight the importance of a limited, identifiable set of investors who shift capital in response to changing risk compensation, while highlighting the lack of systematic exposure adjustment among majority of investors.",
    link: marketRiskPremiaLink,
  },
  {
    title: "Net Buyback Dynamics and Risk",
    summary:
      "This paper studies the premium associated with firms' cash-flow cyclicality by using payout composition as a revealed measure of the persistence of cash flows. I argue that firms distribute the permanent component of cash flows through dividends, while the transitory component is more likely to be paid out through share repurchases. The net buyback-to-dividend ratio therefore provides a proxy for firms' exposure to business cycles. I show that this ratio strongly co-moves with aggregate fluctuations and that buyback-dominated firms earn a positive premium, consistent with investors requiring compensation for holding assets with more cyclical cash flows.",
    link: netBuybackLink,
  },
  {
    title: "Predictability of Returns with Buyback Cash Flows",
    summary:
      "This paper re-evaluates return and cash flow predictability, extending beyond dividends to include repurchases and issuance cash flows. Employing total distribution in the Campbell-Schiller decomposition, I examine how prices respond to discount-rate and cash-flow-growth changes. Contrary to conventional wisdom, the results indicate that while dividend yield predicts returns, distribution yield, encompassing all distributions, emerges as a more effective predictor of future cash flows. This challenges established literature, emphasizing the significance of considering all cash-flow components in asset pricing analyses.",
    note: "First-year summer paper. Published in the Asian Academy of Management.",
    link: buybackCashFlowsLink,
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
