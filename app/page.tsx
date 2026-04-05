import Image from "next/image";
import Headshot from "../public/headshot_tighter2.jpg";

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
    title: "Who Changes Their Demand for Equities During Macroeconomic Shocks?",
    summary:
      "Studies how investor types adjust equity demand across macro cycles using GDP growth, inflation, rates, exchange rates, unemployment, and default-premium indicators.",
  },
  {
    title: "Quarterly Excess Demand and Future Returns",
    summary:
      "Builds stock-level excess-demand signals from institutional holdings to form return-predictive strategies across horizons from quarters to five years.",
  },
  {
    title: "Industry ETF Leading Indicator",
    summary:
      "Develops an industry-level leading indicator from quarterly 13F holdings by identifying expert investors and aggregating their positions.",
  },
  {
    title: "Industry News and Future Equity Returns",
    summary:
      "Constructs leading return signals for aggregate markets using real-time industry employment, sales, and inventory information.",
  },
  {
    title: "Cash Flow Cyclicality Index",
    summary:
      "Creates a business-cycle exposure factor using the buyback-to-dividend ratio to separate temporary from persistent cash-flow components.",
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
              <span className="paper-title">{paper.title}</span>
              <ul className="sublist">
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
