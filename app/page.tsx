import Image from "next/image";
import Headshot from "../public/headshot_tighter2.jpg";

function ContactIcon({ type }: { type: "email" | "cv" | "scholar" | "linkedin" }) {
  if (type === "email") {
    return (
      <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5.5h18v13H3z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "cv") {
    return (
      <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3h9l3 3v15H6z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M15 3v4h4M9 12h6M9 16h6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "scholar") {
    return (
      <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m2 9 10-5 10 5-10 5z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 11v5c2.3 2.1 9.7 2.1 12 0v-5M22 9v7" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg className="contact-icon linkedin-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" />
      <path d="M7 10v7M7 7.2v.1M11 17v-4c0-2 3.5-2.2 3.5.2V17M11 10v7" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

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
      "This paper studies the premium associated with firms' cash-flow cyclicality by using payout composition as a revealed measure of the persistence of cash flows. I argue that firms distribute the permanent component of cash flows through dividends, while the transitory component is more likely to be paid out through share repurchases. The net buyback-to-dividend ratio therefore provides a proxy for firms' exposure to business cycles. I show that this ratio strongly co-moves with aggregate fluctuations and that buyback-dominated firms earn a positive premium, consistent with investors requiring compensation for holding assets with more cyclical cash flows.",
    note: "R&R, Journal of Portfolio Management",
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
            <span className="contact-links">
              <a className="icon-link" href="/CV_Rasoul_ac.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open CV" title="CV">
                <ContactIcon type="cv" />
                <span>CV</span>
              </a>
              <a className="icon-link" href="https://scholar.google.com/citations?user=7DDb9bQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" title="Google Scholar">
                <ContactIcon type="scholar" />
                <span>Google Scholar</span>
              </a>
              <a className="icon-link" href="https://www.linkedin.com/in/rasoul-foroughfard-342500b2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <ContactIcon type="linkedin" />
                <span>LinkedIn</span>
              </a>
              <a className="icon-link" href="mailto:rforough@asu.edu" aria-label="Email rforough@asu.edu" title="Email">
                <ContactIcon type="email" />
                <span>Email</span>
              </a>
            </span>
          </p>
        </div>
      </div>

      <section id="working-papers" className="content-section">
        <h2 className="section-title">Research</h2>
        <ul className="list research-list">
          {workingPapers.map((paper) => (
            <li className="research-card" key={paper.title}>
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
                    <span className="paper-tag">{paper.label}</span>
                  </li>
                ) : null}
                {paper.note ? (
                  <li>
                    <span className="paper-status">{paper.note}</span>
                  </li>
                ) : null}
                <li>
                  <div className="paper-abstract"><strong>Abstract:</strong> {paper.summary}</div>
                </li>
                {paper.coauthor ? (
                  <li>
                    <span className="paper-coauthor"><strong>Co-authored with:</strong> {paper.coauthor}</span>
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
            <p className="comments-heading"><strong>Selected Student Comments</strong></p>
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
