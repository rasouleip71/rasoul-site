export const metadata = { title: "CV" };

export default function CV() {
  return (
    <section className="page-wrap">
      <h1 className="page-title">Curriculum Vitae</h1>
      <p className="bio">
        <a className="section-link" href="/CV_Rasoul_ac.pdf" target="_blank" rel="noopener noreferrer">
          Download CV (PDF)
        </a>
      </p>

      <section className="content-section">
        <h2 className="section-title">Profile</h2>
        <p className="bio">
          I study equity demand and macroeconomic dynamics, focusing on how institutional investors adjust their demand
          for equities across business and credit cycles. Using historical data, I analyze how these shifts in demand
          influence market prices and identify which groups of investors drive equity market movements across
          different phases of the cycle.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Skills</h2>
        <ul className="list">
          <li>
            <strong>Quantitative Methods and Modeling:</strong> Forecasting and nowcasting, static and dynamic factor
            models, time-series and panel econometrics, Kalman filtering and smoothing, dimensionality reduction
            (PCA, PLS), demand-system modeling, Monte Carlo simulation, risk modeling, alpha generation
          </li>
          <li>
            <strong>Datasets Processed:</strong> CRSP, Compustat, WRDS, 13F, FRED, input-output linkages, Bloomberg
          </li>
          <li>
            <strong>Programming and Machine Learning:</strong> Python (pandas, statsmodels, scikit-learn), Stata
          </li>
          <li>
            <strong>Cloud and Computing:</strong> AWS (EC2, S3), Linux/Unix, cloud-based data processing
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Education</h2>
        <ul className="list">
          <li>Arizona State University, PhD in Finance (2021-Present)</li>
          <li>Sharif University of Technology, M.S. in Economics (2017)</li>
          <li>Persian Gulf University, B.S. in Economics (2014)</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Professional Experience</h2>
        <ul className="list">
          <li>Finance Research Assistant, W. P. Carey School of Business (2021-Present)</li>
          <li>Market Analyst, Doniaye Eghtesad (2017-2020)</li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Research Projects</h2>
        <ul className="list">
          <li>
            <strong>Who changes their demand for equities during macroeconomic shocks?</strong> I study how investors
            adjust equity demand across macroeconomic cycles using GDP growth, inflation, interest rates, exchange
            rates, unemployment, and default-premium cycles, with substantial heterogeneity across investor types.
          </li>
          <li>
            <strong>Quarterly Excess Demand and Future Returns:</strong> Construct stock-level excess-demand signals
            from institutional holdings to build return-predictive investment strategies from quarterly to five-year
            horizons.
          </li>
          <li>
            <strong>Industry ETF Leading Indicator:</strong> Developed a framework to extract real-time industry
            signals from quarterly 13F holdings by identifying expert investors and aggregating positions into a
            predictive industry index.
          </li>
          <li>
            <strong>Industry News and Future Equity Returns:</strong> Developed leading indicators for aggregate equity
            markets using real-time industry-level data on employment, sales, and inventories.
          </li>
          <li>
            <strong>Cash Flow Cyclicality Index:</strong> Constructed a factor capturing firm-level business-cycle
            exposure using the buyback-to-dividend ratio.
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Referees</h2>
        <ul className="list">
          <li>
            <strong>Oliver Boguth</strong> (Advisor), Arizona State University -
            <a className="section-link" href="mailto:oliver.boguth@asu.edu"> oliver.boguth@asu.edu</a>
          </li>
          <li>
            <strong>Hendrik Bessembinder</strong>, Arizona State University -
            <a className="section-link" href="mailto:hendrik.bessembinder@asu.edu"> hendrik.bessembinder@asu.edu</a>
          </li>
          <li>
            <strong>George Aragon</strong>, Arizona State University -
            <a className="section-link" href="mailto:george.aragon@asu.edu"> george.aragon@asu.edu</a>
          </li>
          <li>
            <strong>Mazi Kazemi</strong>, Arizona State University -
            <a className="section-link" href="mailto:mazi.kazemi@asu.edu"> mazi.kazemi@asu.edu</a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Awards</h2>
        <ul className="list">
          <li>Placed 3rd in National Iranian Economics Olympiad (2017)</li>
          <li>Ranked 8th nationwide in the M.S. Economics Entrance Exam (2017)</li>
        </ul>
      </section>
    </section>
  );
}
