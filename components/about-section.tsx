const metrics = [
  '10+ лет опыта',
  '5000+ довольных клиентов',
  '100% натуральные материалы'
];

export function AboutSection() {
  return (
    <section className="container-card grid gap-8 p-6 md:grid-cols-2 md:p-10" aria-labelledby="about-brand">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-[#8e735d]">О бренде</p>
        <h2 id="about-brand" className="font-serif text-4xl leading-tight">
          Мы создаём интерьерные решения, которые остаются актуальными годами
        </h2>
      </div>

      <div className="space-y-5 text-[#624e3d]">
        <p>
          Мебель — российский бренд премиальной мебели. Мы объединяем натуральные материалы, внимание к деталям и
          современный подход к эргономике, чтобы каждый предмет был не только красивым, но и функциональным.
        </p>
        <ul className="space-y-3">
          {metrics.map((metric) => (
            <li key={metric} className="rounded-2xl border border-[#e5d7c2] bg-[#f9f1e6] px-4 py-3 font-medium">
              {metric}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
