import Image from "next/image";
import Headshot from "../public/headshot_tighter2.jpg";

const netBuybackLink = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4905774";
const industryEtfLink = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5527101";
const ssrn5527180Link = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5527180";

const skills = [
  "Forecasting and nowcasting",
  "Static and dynamic factor models",
  "Time-series and panel econometrics",
  "Kalman filtering and smoothing",
  "Dimensionality reduction (PCA, PLS)",
  "Demand-system modeling and alpha generation",
  "Data: CRSP, Compustat, WRDS, 13F, FRED, Bloomberg",
  "Python (pandas, statsmodels, scikit-learn), Stata",
];

const workingPapers = [
  {
    title: "Institutional Equity Demand over Macroeconomic Cycles",
    summary:
      "This paper studies how different types of institutional investors banks, pension funds, insurers, hedge funds, and mutual funds adjust their equity demand in response to macroeconomic conditions. I document heterogeneous responses across investor types and identify which institutions drive equity demand over the business and financial cycle.",
  },
  {
    title: "Excess Institutional Demand and the Cross-Section of Stock Returns",
    summary:
      "I study excess institutional demand and its relation to the cross-section of stock returns by estimating latent demand and constructing measures of demand not explained by fundamentals, and show that this excess demand strongly predicts future returns.",
  },
  {
    title: "Industry Fundamentals as Leading Indicators for Equity Returns",
    summary:
      "This paper constructs forward-looking signals for aggregate equity returns using real-time industry-level data. I show that changes in industry fundamentals such as employment, sales, and inventories contain predictive information for future market returns.",
  },
  {
    title: "Informational Content of Institutional Industry Allocation",
    summary:
      "Using 13F data, I identify institutional investors with comparative advantage across industries based on the accuracy of their historical allocations. Aggregating their signals, I construct an industry-level predictor that provides leading information for future equity returns.",
    link: industryEtfLink,
  },
  {
    title: "Disagreement Among Institutional Investors and Expected Returns",
    summary:
      "I measure disagreement among institutional investors using heterogeneity in equity demand and show that firms with higher disagreement earn lower subsequent returns. The results highlight the role of belief dispersion in shaping expected returns.",
    link: ssrn5527180Link,
  },
  {
    title: "Net Buyback Dynamics and Risk",
    summary:
      "This paper constructs a business-cycle exposure factor using the buyback-to-dividend ratio to distinguish between transitory and persistent cash-flow components. The factor is priced in the cross-section of stock returns, linking payout dynamics to systematic risk.",
    note: "Revise and Resubmit, Journal of Portfolio Management",
    link: netBuybackLink,
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
          <p id="home" className="bio">Welcome to my website!</p>
          <p className="bio bio-spaced">
            I am a PhD candidate in Finance at Arizona State University. I study empirical asset pricing, institutional
            demand for equities, and the role of business cycles in financial markets.
          </p>
          <p className="bio contact-inline">
            Email: <a className="section-link" href="mailto:rossforoughi@gmail.com">rossforoughi@gmail.com</a> |{" "}
            <a className="section-link" href="/CV_Rasoul_ac.pdf" target="_blank" rel="noopener noreferrer">CV</a> |{" "}
            <a className="section-link" href="https://scholar.google.com/citations?user=7DDb9bQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a> |{" "}
            <a className="section-link" href="https://www.linkedin.com/in/rasoul-foroughfard-342500b2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <br />
            Phone: +1 (806) 500-1988
          </p>
        </div>
      </div>

      <section id="working-papers" className="content-section">
        <h2 className="section-title">Working Papers</h2>
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
                {paper.note ? (
                  <li>
                    <strong>Status:</strong> {paper.note}
                  </li>
                ) : null}
                <li>
                  <strong>Explanation:</strong> {paper.summary}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section id="teaching" className="content-section">
        <h2 className="section-title">Teaching Experience</h2>
        <ul className="list">
          <li>Arizona State University - FIN 421: Security Analysis and Portfolio Management (Instructor)</li>
        </ul>
      </section>

      <section id="skills" className="content-section">
        <h2 className="section-title">Skills</h2>
        <ul className="list">
          {skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

    </section>
  );
}
