export function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
      <p>© {year} Rasoul Foroughfard</p>
      <p>Contact: <a className="underline" href="mailto:rforough@asu.edu">rforough@asu.edu</a></p>
    </div>
  );
}
