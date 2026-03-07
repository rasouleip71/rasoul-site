"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/publications", label: "Publications" },
  { href: "/research", label: "Research" },
  { href: "/teaching", label: "Teaching" },
  { href: "/life", label: "Life" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname() || "/";

  return (
    <div className="site-nav">
      <div className="container site-nav-inner">
        <Link href="/" className="site-title">
          Rasoul Foroughfard
        </Link>

        <nav className="nav-links">
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
    </div>
  );
}
