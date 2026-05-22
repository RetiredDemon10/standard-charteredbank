const cols = [
  { h: "Bank with us", links: ["Accounts", "Credit cards", "Loans", "Deposits"] },
  { h: "Invest", links: ["Mutual funds", "Bonds", "Equities", "FX trading"] },
  { h: "Support", links: ["Help center", "Find a branch", "Contact us", "Report fraud"] },
  { h: "Company", links: ["About us", "Careers", "Sustainability", "Investor relations"] },
];

export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-accent-green grid place-items-center text-accent-green-foreground font-bold">S</div>
            <span className="font-display font-bold text-xl">SC</span>
          </div>
          <p className="mt-4 text-sm text-brand-foreground/75">
            Banking for what's next. Trusted across 59 markets.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-brand-foreground/90">{c.h}</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-foreground/75">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-brand-foreground hover:underline">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-brand-foreground/15">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-brand-foreground/70">
          <p>© {new Date().getFullYear()} SC. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}