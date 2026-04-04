import Image from "next/image";
import Headshot from "../public/headshot_tighter2.jpg";

const publications = [
  {
    title: "Predictability of Returns with Buyback Cash Flows",
    venue: "Asian Academy of Management Journal of Accounting and Finance (2024)",
    coauthors: "Rasoul Foroughfard",
  },
  {
    title: "The Effect of Relationship Lending on Loan Contract Terms",
    venue: "Journal of Money and Economy 14(2): 133-157 (2019)",
    coauthors: "Rasoul Foroughfard, M. H. Rahmati",
  },
];

const workingPapers = [
  "Who changes their demand for equities during macroeconomic shocks?",
  "Quarterly Excess Demand and Future Returns",
  "Industry ETF Leading Indicator",
  "Industry News and Future Equity Returns",
  "Cash Flow Cyclicality Index",
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

        <div>
          <h2 id="home" className="section-title">
            Welcome
          </h2>
          <p className="bio">
            I am a PhD candidate in Finance at Arizona State University. My research focuses on asset pricing, with an
            emphasis on forecasting market and industry returns.
          </p>
          <p className="bio">
            I develop and test predictive signals using firm fundamentals, investor holdings, and industry-level
            economic data across both cross-sectional and time-series settings.
          </p>
        </div>
      </div>

      <section id="contact" className="content-section">
        <h2 className="section-title">Contact</h2>
        <p className="bio">
          Email: <a className="section-link" href="mailto:rossforoughi@gmail.com">rossforoughi@gmail.com</a> |{" "}
          Phone: +1 (806) 500-1988 |{" "}
          <a className="section-link" href="/CV_Rasoul.pdf" target="_blank" rel="noopener noreferrer">CV</a> |{" "}
          <a className="section-link" href="https://scholar.google.com/citations?user=7DDb9bQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
        </p>
      </section>

      <section id="publications" className="content-section">
        <h2 className="section-title">Publications</h2>
        <ul className="list">
          {publications.map((p) => (
            <li key={p.title}>
              <strong>{p.title}</strong>
              <br />
              {p.venue}. {p.coauthors}.
            </li>
          ))}
        </ul>
      </section>

      <section id="working-papers" className="content-section">
        <h2 className="section-title">Working Papers</h2>
        <ul className="list">
          {workingPapers.map((paper) => (
            <li key={paper}>{paper}</li>
          ))}
        </ul>
      </section>

      <section id="teaching" className="content-section">
        <h2 className="section-title">Teaching</h2>
        <p className="bio">Arizona State University</p>
        <p className="bio">FIN 421 - Security Analysis and Portfolio Management</p>
        <p className="bio">Principles of Economics (TA), Texas Tech University</p>
      </section>
    </section>
  );
}
