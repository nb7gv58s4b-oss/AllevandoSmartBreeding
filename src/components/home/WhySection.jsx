const REASONS = [
  {
    n: "I",
    title: "Fatto dagli allevatori, per gli allevatori",
    text: "Nasce dall'esperienza diretta in allevamento: ogni scelta risponde a un'esigenza reale di chi lavora ogni giorno con le coppie.",
  },
  {
    n: "II",
    title: "Tecnologia discreta",
    text: "Nessun gestionale complicato da imparare. Una scheda, un telefono, un foglio già pronto all'uso.",
  },
  {
    n: "III",
    title: "Il tuo marchio, accanto al nostro",
    text: "Il modello digitale è personalizzato con l'identità ALLEVANDO e può integrare il marchio del tuo allevamento.",
  },
];

export default function WhySection() {
  return (
    <section className="border-b border-deep/10 bg-white">
      <div className="wrap grid gap-12 py-20 lg:grid-cols-[0.8fr_1fr] lg:gap-16 lg:py-28">
        <div>
          <p className="eyebrow text-terracotta">06 — Perché ALLEVANDO</p>
          <h2 className="mt-5 font-heading text-[clamp(2rem,4.6vw,3.5rem)] font-medium leading-[1.02] text-deep">
            Un metodo nuovo, con radici concrete.
          </h2>
          <p className="mt-6 max-w-[42ch] text-[15px] leading-[1.75] text-muted-foreground">
            Smart Breeding™ non sostituisce la tua esperienza: la rende più semplice da
            conservare, leggere e trasmettere.
          </p>
        </div>

        <ol className="space-y-0 divide-y divide-deep/10 border-y border-deep/10">
          {REASONS.map((reason) => (
            <li key={reason.n} className="flex gap-6 py-6">
              <span className="w-8 shrink-0 font-heading text-lg text-terracotta">{reason.n}</span>
              <div>
                <h3 className="font-heading text-xl font-medium text-deep">{reason.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  {reason.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}