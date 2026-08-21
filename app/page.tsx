import Image from "next/image";
import Headshot from "../public/headshot_tighter2.jpg";

const netBuybackLink = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4905774";
const industryEtfLink = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5527101";
const ssrn5527180Link = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5527180";

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
                {paper.note ? (
                  <li>
                    <strong>Status:</strong> {paper.note}
                  </li>
                ) : null}
                <li>
                  <strong>Summary:</strong> {paper.summary}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section id="teaching" className="content-section">
        <h2 className="section-title">Teaching Experience</h2>
        <ul className="list">
          <li>
            <strong>Security Analysis and Portfolio Management (FIN 421)</strong>
            <ul className="sublist">
              <li>Arizona State University, Undergraduate, Fall 2024</li>
            </ul>
          </li>
          <li>
            <strong>Advanced Managerial Finance (FIN 361)</strong>
            <ul className="sublist">
              <li>Arizona State University, Undergraduate, Summer 2026</li>
            </ul>
            <div className="teaching-evaluation">
              <strong>Mean Student Evaluation: 6.7/7.0</strong>
              <p className="comments-heading"><strong>Comments from students:</strong></p>
              <ol className="student-comments">
                <li>Rasoul Foroughfard is the best. He replied very fast and helped me solve the problems immediately. I have to say, &quot;Wow.&quot; The nice professor!</li>
                <li>The lectures were always concise and easy to follow. He always provided a lot of extra help and material for us to use to study. His responsiveness to any message was phenomenal.</li>
                <li>I love the way he asks questions about the material, discusses it with students, and explains it.</li>
                <li>I have never had an instructor be this supportive and attentive to students&apos; needs.</li>
                <li>I&apos;d like Rasoul to continue being clear and approachable when explaining difficult finance concepts, since that made a real difference in understanding the material. He does a good job breaking down complex topics like valuation, risk, and capital budgeting into manageable pieces. I also appreciate how responsive and supportive he is when students have questions or need clarification outside of class. Continuing to flag important problems or concepts ahead of exams was especially helpful for studying efficiently. His office hours have also been genuinely helpful. He is patient and willing to work through problems step by step rather than just giving quick answers, which makes a big difference when you are stuck. It is clear he wants students to understand the material, not just get through it. Overall, I would want him to keep teaching with the same clarity, patience, and accessibility he has shown all term.</li>
              </ol>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
}
