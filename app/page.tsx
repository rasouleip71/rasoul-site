import Image from "next/image";
import Headshot from "../public/headshot_tighter2.jpg";

const bioText =
  "I am a PhD candidate in Finance at Arizona State University. My research focuses on asset pricing, with an emphasis on forecasting market and industry returns. I develop and test predictive signals using firm fundamentals, investor holdings, and industry-level economic data across both cross-sectional and time-series settings.";

const focusAreas = [
  "Return predictability across cross-sectional and time-series settings",
  "Factor design and portfolio construction from predictive signals",
  "Demand and holdings-based signal extraction",
  "Industry-level forecasting using macro-fundamental data",
];

const signals = [
  "Buyback-to-dividend ratio: capital allocation signal linked to risky cash flows and cross-sectional returns",
  "Previous-winner holdings index: flow-based signal tied to momentum continuation",
  "Predictive-winner demand measure: demand-based return forecasting from recent investor performance",
  "Industry-expert holdings index: informed-holdings signal for industry-level return prediction",
  "Industry fundamentals engine: employment, production, and sales data for sector-level signal extraction",
  "Latent-demand portfolios: portfolio formation based on hidden demand pressure",
];

export default function Home() {
  return (
    <section className="page-wrap">
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
          <h1 className="page-title">Rasoul Foroughfard</h1>
          <p className="bio">{bioText}</p>
          <p className="bio">Contact: rforough@asu.edu</p>
        </div>
      </div>

      <section className="content-section">
        <h2 className="section-title">Research Focus</h2>
        <ul className="list">
          {focusAreas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Signals I Build</h2>
        <ul className="list">
          {signals.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
