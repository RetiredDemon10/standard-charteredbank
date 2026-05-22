import { Search, Globe, User, Menu } from "lucide-react";

const nav = ["Bank with us", "Borrow", "Invest", "Insure", "Premium", "Help"];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="bg-brand text-brand-foreground text-xs">
        <div className="mx-auto max-w-7xl px-4 h-9 flex items-center justify-end gap-6">
          <a href="#" className="hover:underline opacity-90">Personal</a>
          <a href="#" className="hover:underline opacity-70">Priority</a>
          <a href="#" className="hover:underline opacity-70">Private</a>
          <a href="#" className="hover:underline opacity-70">Business</a>
          <span className="inline-flex items-center gap-1 opacity-90"><Globe className="h-3.5 w-3.5" /> Global</span>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center gap-8">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-brand grid place-items-center text-brand-foreground font-bold">S</div>
          <span className="font-display font-bold text-lg tracking-tight">SC</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {nav.map((n) => (
            <a key={n} href="#" className="text-foreground/80 hover:text-brand transition-colors">
              {n}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-muted" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <a href="https://sc.elaxtradex.com/login" className="hidden sm:inline-flex items-center gap-2 px-4 h-10 rounded-full border border-brand text-brand text-sm font-semibold hover:bg-brand hover:text-brand-foreground transition-colors">
            <User className="h-4 w-4" /> Login
          </a>
          <button className="lg:hidden p-2 rounded-md hover:bg-muted" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
