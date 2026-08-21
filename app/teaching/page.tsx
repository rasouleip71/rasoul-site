export const metadata = { title: "Teaching" };

export default function Teaching() {
  return (
    <section className="space-y-4">
      <h1>Teaching</h1>
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
        </li>
        <li>
          <strong>Mean Student Evaluation: 6.7/7.0</strong>
          <ul className="sublist">
            <li><strong>Comments from students:</strong></li>
          </ul>
        </li>
      </ul>
      <h2>Earlier Teaching</h2>
      <ul className="list">
        <li>Mathematics (TA), Persian Gulf University (2013)</li>
        <li>Macroeconomics (TA), Persian Gulf University (2012)</li>
      </ul>
    </section>
  );
}
