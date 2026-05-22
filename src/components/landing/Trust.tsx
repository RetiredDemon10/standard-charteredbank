import { Lock, Award, Headphones, Globe2 } from "lucide-react";

const items = [
  { icon: Lock, t: "Bank-grade security", d: "256-bit encryption and biometric login keep your money safe." },
  { icon: Award, t: "Award-winning service", d: "Voted best digital bank, 5 years running." },
  { icon: Headphones, t: "24/7 human support", d: "Talk to a real person whenever you need help." },
  { icon: Globe2, t: "Global reach", d: "Banking in 59 markets, one seamless experience." },
];

export function Trust() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center max-w-2xl mx-auto">
          Why millions choose Meridian
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="p-6 rounded-2xl border border-border hover:border-brand transition">
              <Icon className="h-8 w-8 text-brand" />
              <h3 className="mt-4 font-bold text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}