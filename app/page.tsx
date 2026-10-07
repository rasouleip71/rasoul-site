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
const investorDemandLink = "/papers/Investor_Demand_and_Dynamic_Characteristic_Compensations.pdf";
const marketRiskPremiaLink = "/papers/Who_Responds_to_Changes_in_the_Market_Risk_Premia_and_How.pdf";
const buybackCashFlowsLink = "https://openurl.ebsco.com/EPDB%3Agcd%3A6%3A21636358/detailv2?sid=ebsco%3Aplink%3Acrawler-gcd&id=ebsco%3Agcd%3A182205645&crl=c&jrnl=18234992&link_origin=scholar.google.com";

const workingPapers = [
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
            <p>Arizona State University · Undergraduate · Instructor of Record · Fall 2024</p>
          </article>
          <article className="teaching-card featured-course">
            <h3>Advanced Managerial Finance (FIN 361)</h3>
            <p>Arizona State University · Undergraduate · Instructor of Record · Summer 2026</p>
          </article>
          <article className="teaching-card">
            <h3>Investment Strategies (FIN 525)</h3>
            <p>Arizona State University · MBA · Teaching Assistant · Summers 2022-2026</p>
            <p>Facilitated and managed course-related discussions through Yellowdig.</p>
          </article>
          <article className="teaching-card">
            <h3>Theory of Finance (FIN 781)</h3>
            <p>Arizona State University · Ph.D. · Teaching Assistant · Falls 2022-2026</p>
            <p>Graded assignments on expected utility, risk aversion, stochastic dominance, mean-variance analysis, APT, and options.</p>
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
