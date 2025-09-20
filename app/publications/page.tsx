import { Card } from "../../components/Card";
export const metadata = { title: "Publications | Rasoul Foroughfard" };
export default function Publications() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Publications</h1>
      <div className="grid gap-4">
        <Card title="Predictability of Returns with Buyback Cash Flows" subtitle="Asian Academy of Management Journal of Accounting & Finance (2024)">
          <p>Author: Rasoul Foroughfard.</p>
        </Card>
        <Card title="The Effect of Relationship Lending on Loan Contract Terms" subtitle="Journal of Money and Economy 14(2): 133–157 (2019)">
          <p>Authors: Rasoul Foroughfard, M. H. Rahmati. <a className="underline" href="http://jme.mbri.ac.ir/article-1-484-en.html" target="_blank" rel="noopener noreferrer">Link</a></p>
        </Card>
      </div>
    </section>
  );
}
