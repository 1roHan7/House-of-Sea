const materials = [
  {
    name: "Gold",
    description: "18K gold-plated brass and vermeil. Warm, enduring, alive.",
    color: "bg-gold/10 border-gold/30",
    textColor: "text-gold-dark",
  },
  {
    name: "Silver",
    description: "925 sterling silver. Cool and honest.",
    color: "bg-ink/4 border-ink/15",
    textColor: "text-ink",
  },
  {
    name: "Oxidised",
    description: "Darkened silver that deepens with age. Time made visible.",
    color: "bg-ink/8 border-ink/20",
    textColor: "text-ink",
  },
];

export default function MaterialHighlight() {
  return (
    <section className="bg-cream-darker py-16 lg:py-20">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <p className="text-center text-[10px] tracking-[0.4em] uppercase text-gold mb-12">
          The Materials
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {materials.map((mat) => (
            <div
              key={mat.name}
              className={`border ${mat.color} px-8 py-10 text-center`}
            >
              <h3
                className={`font-serif text-3xl lg:text-4xl italic mb-3 ${mat.textColor}`}
              >
                {mat.name}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                {mat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
