import { ReactNode } from "react";
export function Card({ title, subtitle, children }: { title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {subtitle ? <p className="text-sm text-neutral-600 mb-2">{subtitle}</p> : null}
      {children}
    </div>
  );
}
