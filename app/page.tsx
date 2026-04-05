import Image from "next/image";
import Headshot from "../public/headshot_tighter2.jpg";

const buybackPredictabilityLink =
  "https://openurl.ebsco.com/viewer?sid=ebsco%3Aplink%3Ascholar-a&id=ebsco%3Agcd%3A182205645&crl=c&jrnl=18234992&id_token_hint=eyJraWQiOiIxNzY5MTEwMjQ0MDQ3IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJlYXN0bWFpbi5tYWluIiwiZGV2aWNlX2lkIjoiNTU1MDYwYzctNzIwOS00NzJhLThkYzMtZDA2Y2E1N2QyODM1IiwiYW1yIjpbImlwIl0sImlzcyI6Imh0dHBzOlwvXC9hdXRoLmVic2NvLnpvbmVcL2FwaVwvZGlzcGF0Y2hlciIsImNsaWVudF9pZCI6ImF3Z3ljSXg1N01yd25EUTVoNFVlNnlDVkVQMHI1TXQ5IiwiYXVkIjpbImh0dHBzOlwvXC9hdXRoLmVic2NvLnpvbmVcL2FwaVwvZGlzcGF0Y2hlciIsImh0dHA6XC9cL2F1dGgtY3h0LW1nci5laG9zdC1saXZlLmVrcy5laG9zdC1saXZlLmVpc2x6LmNvbSIsImh0dHA6XC9cL3hmZi1wcm9jZXNzb3ItamF2YS5laG9zdC1kZXYuZWtzLmVob3N0LWRldnFhLmVpc2x6LmNvbVwvc3dhZ2dlci11aVwvaW5kZXguaHRtbCIsImh0dHBzOlwvXC9hY2Nlc3MtYXBpLmVic2NvLmNvbSIsImF3Z3ljSXg1N01yd25EUTVoNFVlNnlDVkVQMHI1TXQ5Il0sImF6cCI6ImF3Z3ljSXg1N01yd25EUTVoNFVlNnlDVkVQMHI1TXQ5IiwiaWR0IjoiaW5zdGl0dXRpb25hbCIsImV4cCI6MTc3NTQyNzA1OCwiaWF0IjoxNzc1NDIzNDU4LCJjbGllbnRfbmFtZSI6IldlYmF1dGggLSBOZXcgRURTIGlkX3Rva2VuIiwianRpIjoiZGQzNDE3YzMtOGU4Yy00OTI2LTllODAtNGRkNGZjODgyZDk3IiwidXNlcm5hbWUiOiJJbnN0aXR1dGlvbmFsVXNlciJ9.j1IDLNMtE06BWiceEuuQHD8RsWiOMPuhlwbxFQQEzjonjscF0zM_KOi0Z0DblsKWB0kzWmPjXAZxTvlZT-S2wR45cf_OqXX1uWWbJYutg1eZR2OHfclfR6ljSn62W_-ICZBNyy1Oz1n1Gk0qXBM-g6zc0Hk45VmHCdso1XyX4Tvg667UMGiIbPmVy3PXcqb0kqxRclCuJ0f4DLMjauzZ5t2Kn4dnpAjTywhAWkfO1ns026gsuAXXDZzExoED3acjMu7pqTfPoW-1p4hlLuC5l3wcjPzrOjs6Pgoka1a6vEqX8x0M-9mXVXjiqY9W3KmtvQLjaR6iMSfr1JvHGIrpgA&link_origin=scholar.google.com";

const netBuybackLink = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4905774";
const industryEtfLink = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5527101";

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
    link: industryEtfLink,
  },
  {
    title: "Industry News and Future Equity Returns",
    summary:
      "Constructs leading return signals for aggregate markets using real-time industry employment, sales, and inventory information.",
  },
  {
    title: "Net Buyback Dynamics and Risk",
    summary:
      "Creates a business-cycle exposure factor using the buyback-to-dividend ratio to separate temporary from persistent cash-flow components.",
    link: netBuybackLink,
  },
  {
    title: "Predictability of Returns with Buyback Cash Flows",
    summary:
      "Examines how buyback cash-flow dynamics forecast the cross-section of stock returns.",
    link: buybackPredictabilityLink,
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
