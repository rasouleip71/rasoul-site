export const metadata = { title: "CV | Rasoul Foroughfard" };
export default function CV() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">CV</h1>
      <p><a className="underline" href="/CV_Rasoul.pdf" target="_blank" rel="noopener noreferrer">Download CV (PDF)</a></p>
      <p className="text-neutral-600">Place your compiled CV at <code>public/CV_Rasoul.pdf</code>.</p>
    </section>
  );
}
