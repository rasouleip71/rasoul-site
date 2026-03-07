"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/research", label: "Research" },
  { href: "/discussion", label: "Discussion" },
  { href: "/teaching", label: "Teaching and Service" },
];

export function Nav() {
  const pathname = usePathname() || "/";

  return (
    <header className="site-nav">
      <div className="container">
        <div className="site-title-row">
          <Link href="/" className="site-title">
            Rasoul Foroughfard
          </Link>
        </div>
        <nav className="nav-links" aria-label="Main">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link key={l.href} href={l.href} className={active ? "nav-link active" : "nav-link"}>
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
