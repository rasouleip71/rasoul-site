"use client";

import { usePathname } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="site-shell">
      {!isHome ? (
        <header className="container py-6">
          <Nav />
        </header>
      ) : null}

      <main className="container pb-16">{children}</main>

      {!isHome ? (
        <footer className="container py-10">
          <Footer />
        </footer>
      ) : null}
    </div>
  );
}
