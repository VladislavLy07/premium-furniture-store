import { Heart, ShoppingCart, Star } from 'lucide-react';
import { products } from '@/lib/products';

export function ProductGrid() {
  return (
    <section aria-labelledby="popular-products" className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 id="popular-products" className="font-serif text-4xl tracking-tight">
          Популярные товары
        </h2>
        <a className="rounded-full border border-[#decfbb] px-4 py-2 text-sm text-[#5f4938] transition-colors hover:bg-[#f2e5d5]" href="#">
          Все товары
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="container-card overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-2xl">
              <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
              {product.hit ? (
                <span className="absolute left-3 top-3 rounded-full bg-[#4d3728] px-3 py-1 text-xs font-semibold text-[#fff7ec]">
                  Хит
                </span>
              ) : null}
            </div>

            <h3 className="mt-4 text-2xl font-medium leading-tight">{product.name}</h3>
            <p className="mt-2 text-sm text-[#6e5949]">{product.description}</p>
            <div className="mt-3 flex items-center gap-1 text-sm text-[#a27647]">
              <Star aria-hidden="true" size={14} fill="currentColor" />
              <span aria-hidden="true">★</span>
              <span>{product.rating}</span>
            </div>

            <p className="mt-2 text-3xl font-semibold text-[#2f2118]">{product.price}</p>

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#4a3528] px-4 py-3 text-sm font-semibold text-[#fff8ef] transition-colors hover:bg-[#3a281d]"
              >
                <ShoppingCart aria-hidden="true" size={16} />
                <span aria-hidden="true">🛒</span>
                В корзину
              </button>
              <button
                type="button"
                aria-label={`Добавить ${product.name} в избранное`}
                className="rounded-xl border border-[#e0d0bb] bg-[#f8efe3] px-3 text-[#5f4938] transition-colors hover:bg-[#efdfcf]"
              >
                <Heart aria-hidden="true" size={18} />
                <span aria-hidden="true">♡</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
