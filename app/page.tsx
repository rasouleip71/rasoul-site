import Image from "next/image";
import Link from "next/link";
import Headshot from "../public/headshot_original.jpg";

const contentLinks = [
  {
    href: "/teaching",
    title: "Teaching",
    description: "Courses, instruction, and teaching experience.",
  },
  {
    href: "/research",
    title: "Research",
    description: "Working papers and ongoing research projects.",
  },
  {
    href: "/life",
    title: "Life",
    description: "Personal interests, activities, and updates.",
  },
];

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="card card-pad flex flex-col items-center text-center gap-4 sm:gap-5">
        <Image
          src={Headshot}
          alt="Portrait of Rasoul Foroughfard"
          width={360}
          height={360}
          quality={100}
          priority
          className="rounded-full border border-neutral-200 object-cover object-top"
        />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">Rasoul Foroughfard</h1>
          <p className="text-lg text-neutral-700">PhD Candidate in Finance, Arizona State University</p>
          <p className="mx-auto max-w-2xl text-neutral-600">
            My work focuses on empirical asset pricing, industry return predictability, and investor expectations.
            This site highlights my teaching, research, and personal life.
          </p>
        </div>
      </div>

      <div>
        <h2 className="mt-0 mb-4 text-center">Contents</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {contentLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="card card-pad no-underline hover:border-neutral-300 transition-colors"
            >
              <h3 className="mt-0 mb-2 text-xl font-semibold">{link.title}</h3>
              <p className="small">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
