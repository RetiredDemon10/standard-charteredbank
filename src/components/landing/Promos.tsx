const promos = [
  { t: "Refer a friend", d: "Earn up to $200 cash reward for every successful referral.", color: "bg-accent-green text-accent-green-foreground" },
  { t: "Fixed deposit @ 5.1% p.a.", d: "Lock in higher returns with our 12-month promotional rate.", color: "bg-brand text-brand-foreground" },
  { t: "0% installment plans", d: "Split big purchases into easy monthly payments at participating merchants.", color: "bg-accent text-accent-foreground" },
];

export function Promos() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-4">
        {promos.map((p) => (
          <div key={p.t} className={`rounded-2xl p-7 ${p.color}`}>
            <h3 className="text-xl font-bold">{p.t}</h3>
            <p className="mt-2 text-sm opacity-90">{p.d}</p>
            <a href="#" className="mt-5 inline-block text-sm font-semibold underline underline-offset-4">Learn more</a>
          </div>
        ))}
      </div>
    </section>
  );
}