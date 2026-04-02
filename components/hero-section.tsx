import { Award } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="container-card relative grid gap-8 overflow-hidden p-6 md:grid-cols-2 md:p-10" id="top">
      <div className="relative z-10 flex flex-col justify-center gap-7">
        <div className="space-y-4">
          <h1 className="max-w-lg font-serif text-4xl leading-tight tracking-tight md:text-6xl">
            Мебель, которая формирует характер интерьера
          </h1>
          <p className="max-w-xl text-lg text-[#6f5b4b]">
            Премиальная мебель из натуральных материалов для вашего комфорта и уюта.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-2xl bg-[#4a3528] px-6 py-3 text-base font-medium text-[#fff8ef] transition-colors hover:bg-[#362419]"
          >
            Смотреть каталог
          </button>
          <button
            type="button"
            className="rounded-2xl border border-[#decdb6] bg-[#f7eee3] px-6 py-3 text-base font-medium text-[#4a3528] transition-colors hover:bg-[#efe0cf]"
          >
            Новая коллекция
          </button>
        </div>
      </div>

      <div className="relative">
        <img
          src="/hero-interior.svg"
          alt="Светлый интерьер с диваном и журнальным столиком"
          className="h-[360px] w-full rounded-[30px] object-cover md:h-full"
        />
      </div>

      <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl border border-[#eadcc9] bg-[#f8f1e7]/95 px-4 py-3 text-[#5f4937] shadow-soft">
        <Award aria-hidden="true" className="text-[#b18b5f]" size={20} />
        <span className="text-sm font-medium md:text-base">Премиальная коллекция 2026</span>
      </div>
    </section>
  );
}
