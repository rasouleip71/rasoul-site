import type { Metadata } from "next";
import "./globals.css";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: {
    default: "Rasoul Foroughfard",
    template: "%s | Rasoul Foroughfard",
  },
  description: "Finance research, publications, teaching, and contact information for Rasoul Foroughfard.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
