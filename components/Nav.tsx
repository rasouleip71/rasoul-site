"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/publications", label: "Publications" },
  { href: "/research", label: "Research" },
  { href: "/teaching", label: "Teaching" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname() || "/";
  return (
    <nav className="flex flex-wrap items-center gap-4">
      {links.map((l) => {
        const active = pathname === l.href;
        return (
          <Link key={l.href} href={l.href} className={active ? "underline underline-offset-8" : ""}>
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
