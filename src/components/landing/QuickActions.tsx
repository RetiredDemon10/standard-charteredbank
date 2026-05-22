import { CreditCard, Wallet, Home, TrendingUp, Plane, Shield } from "lucide-react";

const items = [
  { icon: Wallet, label: "Open account" },
  { icon: CreditCard, label: "Credit cards" },
  { icon: Home, label: "Home loans" },
  { icon: TrendingUp, label: "Investments" },
  { icon: Plane, label: "Travel money" },
  { icon: Shield, label: "Insurance" },
];

export function QuickActions() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-3 md:grid-cols-6 gap-4">
        {items.map(({ icon: Icon, label }) => (
          <a
            key={label}
            href="#"
            className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-background hover:shadow-md transition"
          >
            <div className="h-12 w-12 rounded-full bg-accent grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition">
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-xs md:text-sm font-medium text-center">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}