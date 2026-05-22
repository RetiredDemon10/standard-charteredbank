import wealth from "@/assets/wealth.jpg";
import { Check } from "lucide-react";

const points = [
  "Personalized portfolios built by our investment specialists",
  "Access global markets across stocks, bonds, and funds",
  "Priority banking benefits across 59 markets",
  "Dedicated relationship manager 24/7",
];

export function Wealth() {
  return (
    <section className="py-20 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <img src={wealth} alt="Wealth management" width={800} height={600} loading="lazy" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" />
        <div>
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">Priority Banking</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Grow your wealth with confidence</h2>
          <p className="mt-4 text-muted-foreground">
            Get expert advice and exclusive access to investment opportunities — built on more than a century of global expertise.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-0.5 h-6 w-6 rounded-full bg-accent-green/15 text-accent-green grid place-items-center flex-shrink-0">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="mt-8 inline-flex items-center px-6 h-12 rounded-full bg-brand text-brand-foreground font-semibold hover:opacity-90 transition">
            Become a Priority client
          </a>
        </div>
      </div>
    </section>
  );
}