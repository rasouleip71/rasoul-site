import { Card } from "../../components/Card";
export const metadata = { title: "Research | Rasoul Foroughfard" };
export default function Research() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Research</h1>
      <div className="grid gap-4">
        <Card title="On the Predictability of Industry Returns (JMP)">
          <p>Extract industry-level indicators from macro, fundamentals, and 13F holdings. Methods: rolling PCA, state-space models.</p>
        </Card>
        <Card title="Holdings-Based Expectations and Revealed Industry Expectations (RIE)">
          <p>Reverse-engineer investor beliefs from portfolio weights; map to industry signals.</p>
        </Card>
        <Card title="Replication: Koijen & Yogo (2019) Asset Demand System">
          <p>Robustness analysis for holdings-based demand estimation and aggregation.</p>
        </Card>
        <Card title="Kalman Filter & Factor Models for Industry Signals">
          <p>DFM and custom state-space models for nowcasting/predicting industry returns.</p>
        </Card>
      </div>
    </section>
  );
}
