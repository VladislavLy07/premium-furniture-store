import { Leaf, ShieldCheck, Sparkles, Truck } from 'lucide-react';

const features = [
  {
    title: 'Натуральные материалы',
    description: 'Экологичные ткани и дерево премиального качества.',
    icon: Leaf
    icon: '❦'
  },
  {
    title: 'Современный дизайн',
    description: 'Эстетика минимализма для актуальных интерьеров.',
    icon: Sparkles
    icon: '◻'
  },
  {
    title: 'Доставка по всей стране',
    description: 'Бережная доставка и удобная сборка в вашем городе.',
    icon: Truck
    icon: '◈'
  },
  {
    title: 'Гарантия качества',
    description: 'Контроль производства и сервисная поддержка.',
    icon: ShieldCheck
    icon: '✓'
  }
];

export function FeaturesSection() {
  return (
    <section aria-label="Преимущества" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {features.map(({ title, description, icon: Icon }) => (
        <article key={title} className="container-card p-5">
          <Icon aria-hidden="true" className="mb-3 text-[#97724f]" size={24} />
      {features.map(({ title, description, icon }) => (
        <article key={title} className="container-card p-5">
          <span aria-hidden="true" className="mb-3 inline-block text-2xl text-[#97724f]">{icon}</span>
          <h2 className="mb-2 text-xl font-medium">{title}</h2>
          <p className="text-sm text-[#725c4b]">{description}</p>
        </article>
      ))}
    </section>
  );
}
