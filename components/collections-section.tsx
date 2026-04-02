import { collections } from '@/lib/products';

export function CollectionsSection() {
  return (
    <section aria-labelledby="collections" className="space-y-6">
      <h2 id="collections" className="font-serif text-4xl tracking-tight">
        Коллекции
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {collections.map((collection) => (
          <article key={collection.id} className="container-card overflow-hidden">
            <img src={collection.image} alt={collection.title} className="h-48 w-full object-cover" />
            <div className="space-y-2 p-5">
              <h3 className="text-2xl font-medium">{collection.title}</h3>
              <p className="text-sm text-[#6e5949]">{collection.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
