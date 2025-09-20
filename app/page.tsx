import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Rasoul Foroughfard</h1>
      <p className="text-neutral-700 max-w-prose">
        PhD Candidate in Finance at Arizona State University (W. P. Carey). I study asset pricing with a focus on
        industry-level return predictability, investor beliefs, and demand systems. My work uses macro data (FRED),
        fundamentals (Compustat/CRSP), and institutional holdings (13F) with methods from rolling PCA to Kalman filters.
      </p>
      <nav className="flex gap-3 flex-wrap">
        <Link className="underline" href="/cv">CV</Link>
        <Link className="underline" href="/publications">Publications</Link>
        <Link className="underline" href="/research">Research</Link>
        <Link className="underline" href="/teaching">Teaching</Link>
        <Link className="underline" href="/notes">Notes</Link>
        <Link className="underline" href="/contact">Contact</Link>
      </nav>
    </section>
  );
}
