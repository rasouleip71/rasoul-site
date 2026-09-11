import Image from "next/image";
import Headshot from "../public/headshot_tighter2.jpg";

const netBuybackLink = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4905774";
const jmpLink = "/papers/The_Pricing_of_Household_Demand_when_Institutions_Are_Inelastic.pdf";
const marketRiskPremiaLink = "/papers/Who_Responds_to_Changes_in_the_Market_Risk_Premia_and_How.pdf";
const industrySignalsLink = "/papers/Industry_Level_Signals_from_Institutional_Portfolio_Reallocations.pdf";
const industryForecastingLink = "/papers/Granular_Industry_Fundamentals_and_Equity_Forecasting.pdf";

const workingPapers = [
  {
    title: "Household Demand Pressure and Equity Mispricing",
    summary:
      "Household demand shocks generate valuation distortions when the institutional investors absorbing them are insufficiently elastic. I develop a measure of household demand pressure, defined as household latent demand scaled by institutional absorption capacity, and show that it explains both contemporaneous price impacts and long-horizon return reversals. Stocks experiencing greater household demand pressure earn significantly lower subsequent returns for up to five years, with the strongest effects occurring when institutional absorption capacity is limited. Decomposing pressure reveals two distinct channels: innovation pressure drives immediate price increases, whereas persistent pressure accounts for most of the subsequent reversal. The relation survives controls for size, idiosyncratic volatility, analyst coverage, and institutional ownership, indicating that demand-induced mispricing depends critically on the availability of elastic institutional capital.",
    label: "Job Market Paper",
    link: jmpLink,
  },
  {
    title: "Net Buyback Dynamics and Risk",
    summary:
      "I find that the net buyback-to-dividend ratio classifies firms based on the cyclicality of their cash flow. This is because the permanent component of earnings is usually distributed as dividends, while the temporary component is distributed as buybacks. Their ratio, then, mirrors cash flow&apos;s sensitivity to business cycles. I utilize this ratio to explore potential premiums associated with cash-flow procyclicality. The findings indicate a positive premium associated with buyback-dominated assets. This is attributed to their cash flow exhibiting strong co-variation with the marginal utility of investors, rendering them a riskier option for hedging against consumption and aggregate wealth fluctuations.",
    note: "R&R, Journal of Portfolio Management",
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
    title: "Granular Industry Fundamentals and Equity Forecasting",
    summary:
      "What can granular industry fundamentals tell us about future equity prices? This paper examines whether real economic information from U.S. industries predicts subsequent equity returns. Using monthly measures of production, employment, hours worked, sales, and inventories across a broad panel of industries, I show that industry-level fundamentals predict both aggregate market returns and industry-level equity returns out of sample. The predictive content is strongest in upstream sectors such as manufacturing, transportation, and mining, suggesting that these industries contain early signals about future economic conditions. Different types of fundamentals convey distinct information: production and sales capture demand conditions, while labor-related measures and inventories reflect adjustment dynamics and uncertainty. Overall, the evidence suggests that granular real economic information is incorporated into equity prices only gradually, making industry fundamentals a useful source of information about expected returns.",
    link: industryForecastingLink,
    coauthor: "Elham Ghorbani",
  },
];

export default function Home() {
  return (
    <section className="page-wrap">
      <h1 className="page-title">Rasoul Foroughfard</h1>

      <div className="profile-row">
        <Image
          src={Headshot}
          alt="Rasoul Foroughfard"
          width={500}
          height={528}
          quality={100}
          priority
          className="hero-image"
        />

        <div className="intro-col">
          <p id="home" className="bio welcome-line">Welcome to my website!</p>
          <p className="bio bio-spaced">
            I am a PhD candidate in Finance at Arizona State University. My research focuses on empirical asset
            pricing, investor demand, and the behavior of households and institutions in financial markets.
          </p>
          <p className="bio contact-inline">
            Email: <a className="section-link" href="mailto:rforough@asu.edu">rforough@asu.edu</a> |{" "}
            <a className="section-link" href="/CV_Rasoul_ac.pdf" target="_blank" rel="noopener noreferrer">CV</a> |{" "}
            <a className="section-link" href="https://scholar.google.com/citations?user=7DDb9bQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a> |{" "}
            <a className="section-link" href="https://www.linkedin.com/in/rasoul-foroughfard-342500b2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <br />
            Phone: +1 (806) 500-1988
          </p>
        </div>
      </div>

      <section id="working-papers" className="content-section">
        <h2 className="section-title">Research</h2>
        <ul className="list">
          {workingPapers.map((paper) => (
            <li key={paper.title}>
              {paper.link ? (
                <a className="paper-title section-link" href={paper.link} target="_blank" rel="noopener noreferrer">
                  {paper.title}
                </a>
              ) : (
                <span className="paper-title">{paper.title}</span>
              )}
              <ul className="sublist">
                {paper.label ? (
                  <li>
                    <strong>{paper.label}</strong>
                  </li>
                ) : null}
                {paper.note ? (
                  <li>
                    <strong className="paper-status">{paper.note}</strong>
                  </li>
                ) : null}
                <li>
                  <div className="paper-abstract"><strong>Abstract:</strong> {paper.summary}</div>
                </li>
                {paper.coauthor ? (
                  <li>
                    <strong>Co-authored with:</strong> {paper.coauthor}
                  </li>
                ) : null}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section id="teaching" className="content-section">
        <h2 className="section-title">Teaching Experience</h2>
        <div className="teaching-grid">
          <article className="teaching-card">
            <h3>Security Analysis and Portfolio Management (FIN 421)</h3>
            <p>Arizona State University · Undergraduate · Fall 2024</p>
          </article>
          <article className="teaching-card featured-course">
            <h3>Advanced Managerial Finance (FIN 361)</h3>
            <p>Arizona State University · Undergraduate · Summer 2026</p>
          </article>
          <div className="evaluation-card">
            <div className="evaluation-score">6.7/7.0</div>
            <div className="evaluation-label">Mean Student Evaluation</div>
          </div>
          <details className="comments-panel">
            <summary>Read student comments</summary>
            <p className="comments-heading"><strong>Comments from students</strong></p>
            <ul className="student-comments">
              <li>Rasoul is clear and approachable when explaining difficult finance concepts, which made a real difference in understanding the material. He does a good job breaking down complex topics like valuation, risk, and capital budgeting into manageable pieces. I also appreciate how responsive and supportive he is when students have questions or need clarification outside of class. Flagging important problems or concepts ahead of exams was especially helpful for studying efficiently. His office hours have also been genuinely helpful. He is patient and willing to work through problems step by step rather than just giving quick answers, which makes a big difference when you are stuck. It is clear he wants students to understand the material, not just get through it.</li>
              <li>The lectures were always concise and easy to follow. He always provided a lot of extra help and material for us to use to study. His responsiveness to any message was phenomenal.</li>
              <li>I have never had an instructor be this supportive and attentive to students&apos; needs.</li>
              <li>I love the way he asks questions about the material, discusses it with students, and explains it.</li>
              <li>Rasoul Foroughfard is the best. He replied very fast and helped me solve the problems immediately. I have to say, &quot;Wow.&quot; The nice professor!</li>
            </ul>
          </details>
        </div>
      </section>
    </section>
  );
}
