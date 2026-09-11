export const metadata = { title: "Teaching" };

export default function Teaching() {
  return (
    <section className="space-y-4">
      <h1>Teaching</h1>
      <div className="teaching-grid">
        <article className="teaching-card">
          <h2>Security Analysis and Portfolio Management (FIN 421)</h2>
          <p>Arizona State University · Undergraduate · Fall 2024</p>
        </article>
        <article className="teaching-card featured-course">
          <h2>Advanced Managerial Finance (FIN 361)</h2>
          <p>Arizona State University · Undergraduate · Summer 2026</p>
        </article>
        <div className="evaluation-card">
          <div className="evaluation-score">6.7/7.0</div>
          <div className="evaluation-label">Mean Student Evaluation</div>
        </div>
        <details className="comments-panel">
          <summary>Read student comments</summary>
          <p className="comments-heading"><strong>Comments from students</strong></p>
          <ol className="student-comments">
            <li>Rasoul Foroughfard is the best. He replied very fast and helped me solve the problems immediately. I have to say, &quot;Wow.&quot; The nice professor!</li>
            <li>The lectures were always concise and easy to follow. He always provided a lot of extra help and material for us to use to study. His responsiveness to any message was phenomenal.</li>
            <li>I love the way he asks questions about the material, discusses it with students, and explains it.</li>
            <li>I have never had an instructor be this supportive and attentive to students&apos; needs.</li>
            <li>I&apos;d like Rasoul to continue being clear and approachable when explaining difficult finance concepts, since that made a real difference in understanding the material. He does a good job breaking down complex topics like valuation, risk, and capital budgeting into manageable pieces. I also appreciate how responsive and supportive he is when students have questions or need clarification outside of class. Continuing to flag important problems or concepts ahead of exams was especially helpful for studying efficiently. His office hours have also been genuinely helpful. He is patient and willing to work through problems step by step rather than just giving quick answers, which makes a big difference when you are stuck. It is clear he wants students to understand the material, not just get through it. Overall, I would want him to keep teaching with the same clarity, patience, and accessibility he has shown all term.</li>
          </ol>
        </details>
      </div>
      <h2>Earlier Teaching</h2>
      <ul className="list">
        <li>Mathematics (TA), Persian Gulf University (2013)</li>
        <li>Macroeconomics (TA), Persian Gulf University (2012)</li>
      </ul>
    </section>
  );
}
