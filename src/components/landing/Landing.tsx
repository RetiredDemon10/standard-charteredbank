import { Header } from "./Header";
import { Hero } from "./Hero";
import { QuickActions } from "./QuickActions";
import { Products } from "./Products";
import { Promos } from "./Promos";
import { Wealth } from "./Wealth";
import { Trust } from "./Trust";
import { Footer } from "./Footer";

export function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <QuickActions />
        <Products />
        <Promos />
        <Wealth />
        <Trust />
      </main>
      <Footer />
    </div>
  );
}