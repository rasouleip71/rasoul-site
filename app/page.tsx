import Image from "next/image";
import Link from "next/link";
import Headshot from "../public/headshot_original.jpg";

export default function Home() {
  return (
    <section className="page-wrap">
      <Image
        src={Headshot}
        alt="Rasoul Foroughfard"
        width={700}
        height={500}
        quality={100}
        priority
        className="hero-image"
      />

      <h1 className="page-title">Rasoul Foroughfard</h1>
      <p className="subtitle">PhD Candidate in Finance at Arizona State University</p>
      <p className="bio">
        I study asset pricing with a focus on industry-level return predictability, investor beliefs, and demand
        systems. My work combines macroeconomic data, firm fundamentals, and institutional holdings to understand
        variation in expected returns across industries.
      </p>

      <div className="section-links" aria-label="Main sections">
        <Link className="section-link" href="/teaching">
          Teaching
        </Link>
        <Link className="section-link" href="/research">
          Research
        </Link>
        <Link className="section-link" href="/life">
          Life
        </Link>
      </div>
    </section>
  );
}
