"use client";

import Link from "next/link";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/CV_Rasoul.pdf", label: "CV" },
  { href: "/#publications", label: "Publications" },
  { href: "/#working-papers", label: "Working Papers" },
  { href: "/#teaching", label: "Teaching" },
];

export function Nav() {
  return (
    <header className="site-nav">
      <div className="container">
        <div className="site-title-row">
          <Link href="/" className="site-title">Rasoul Foroughfard</Link>
        </div>
        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
