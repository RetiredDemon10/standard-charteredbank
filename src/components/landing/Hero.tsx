import hero from "@/assets/hero-banking.jpg";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand text-brand-foreground">
      <div className="absolute inset-0 opacity-30" style={{
        background: "radial-gradient(ellipse at top right, oklch(0.62 0.18 145 / 0.5), transparent 60%)",
      }} />
      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-accent-green text-accent-green-foreground text-xs font-semibold uppercase tracking-wider">
            New · Limited time
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05]">
            Banking that moves <span className="text-accent-green">with you.</span>
          </h1>
          <p className="mt-6 text-lg text-brand-foreground/85 max-w-xl">
            Open an account in minutes. Earn rewards on every spend. Manage your wealth across borders — all from one trusted app.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 px-6 h-12 rounded-full bg-accent-green text-accent-green-foreground font-semibold hover:opacity-90 transition">
              Open an account <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-6 h-12 rounded-full border border-brand-foreground/40 font-semibold hover:bg-brand-foreground/10 transition">
              Explore products
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 text-sm text-brand-foreground/80">
            <div><div className="text-2xl font-bold text-brand-foreground">170+</div>Years of trust</div>
            <div><div className="text-2xl font-bold text-brand-foreground">59</div>Markets worldwide</div>
            <div><div className="text-2xl font-bold text-brand-foreground">24/7</div>Customer support</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-accent-green/30 blur-2xl" />
          <img
            src={hero}
            alt="Customer using mobile banking"
            width={1536}
            height={1024}
            className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}