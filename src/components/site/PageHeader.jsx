export default function PageHeader({ eyebrow, title, intro, children }) {
  return (
    <section className="border-b border-ivory/10 bg-deep text-ivory">
      <div className="wrap py-14 lg:py-20">
        {eyebrow && <p className="eyebrow text-ivory/55">{eyebrow}</p>}
        <h1 className="mt-4 max-w-[26ch] font-heading text-[clamp(2.1rem,5.2vw,3.9rem)] font-medium leading-[1.02]">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.7] text-ivory/70">{intro}</p>
        )}
        {children}
      </div>
    </section>
  );
}