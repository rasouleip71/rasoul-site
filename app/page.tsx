import Image from "next/image";
import Headshot from "../public/headshot_padded.jpg";

export default function Home() {
  return (
    <section className="page-wrap">
      <div className="profile-row">
        <Image
          src={Headshot}
          alt="Rasoul Foroughfard"
          width={540}
          height={900}
          quality={100}
          priority
          className="hero-image"
        />

        <div>
          <h1 className="page-title">Rasoul Foroughfard</h1>
          <p className="bio">
            I am a PhD Candidate in Finance at Arizona State University. I study asset pricing with a focus on
            industry-level return predictability, investor beliefs, and demand systems.
          </p>
          <p className="bio">
            My research combines macroeconomic data, firm fundamentals, and institutional holdings to understand
            heterogeneity in expected returns across industries.
          </p>
          <p className="bio">Research interests: Asset Pricing, Information Economics, Financial Markets</p>
          <p className="bio">Contact: rforough@asu.edu</p>
        </div>
      </div>
    </section>
  );
}
