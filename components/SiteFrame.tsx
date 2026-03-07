import { Nav } from "@/components/Nav";

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <Nav />
      <main className="container main-content">{children}</main>
    </div>
  );
}
