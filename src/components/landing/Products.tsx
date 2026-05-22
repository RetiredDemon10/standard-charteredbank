import card from "@/assets/credit-card.jpg";
import loan from "@/assets/home-loan.jpg";
import travel from "@/assets/travel.jpg";
import { ArrowRight } from "lucide-react";

const products = [
  {
    img: card,
    tag: "Credit cards",
    title: "Earn 5% cashback on every swipe",
    desc: "No annual fee for the first year. Welcome bonus up to $300.",
    cta: "Apply now",
  },
  {
    img: loan,
    tag: "Home loans",
    title: "Mortgages from 4.25% p.a.",
    desc: "Flexible repayment plans tailored to your dream home.",
    cta: "Check eligibility",
  },
  {
    img: travel,
    tag: "Travel",
    title: "Spend abroad with zero FX fees",
    desc: "Hold 12+ currencies and get the best mid-market rates.",
    cta: "Get the card",
  },
];

export function Products() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-sm font-semibold text-brand uppercase tracking-wider">What's new</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Designed around your life</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-1 text-brand font-semibold hover:underline">
            View all offers <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-accent-green uppercase tracking-wider">{p.tag}</span>
                <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{p.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-brand font-semibold hover:gap-2 transition-all">
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}