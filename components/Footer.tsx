export function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="border-t border-neutral-200 pt-6 text-sm text-neutral-600">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p>© {year} Rasoul Foroughfard</p>
        <p>
          Contact: <a className="underline" href="mailto:rforough@asu.edu">rforough@asu.edu</a>
        </p>
      </div>
    </div>
  );
}
