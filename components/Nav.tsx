"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/teaching", label: "Teaching" },
  { href: "/life", label: "Life" },
  { href: "/publications", label: "Publications" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname() || "/";
  const activeMatch = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <div className="card">
      <div className="card-pad flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-semibold">
            RF
          </span>
          <span className="font-semibold">Rasoul Foroughfard</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-2">
          {links.map((l) => {
            const active = activeMatch(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  active
                    ? "chip bg-neutral-900 text-white border-neutral-900"
                    : "chip hover:border-neutral-300"
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
