import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Rasoul Foroughfard | Finance Research",
  description: "Asset pricing, industry return predictability, investor beliefs, and demand systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="max-w-4xl mx-auto px-4 py-6">
          <Nav />
        </header>
        <main className="max-w-4xl mx-auto px-4 pb-16">
          {children}
        </main>
        <footer className="max-w-4xl mx-auto px-4 py-10">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
