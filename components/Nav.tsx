"use client";

import Link from "next/link";

export function Nav() {
  return (
    <header className="site-nav">
      <div className="container">
        <div className="site-title-row">
          <Link href="/" className="site-title">Rasoul Foroughfard</Link>
        </div>
      </div>
    </header>
  );
}
