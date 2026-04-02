import type { ReactNode } from 'react';
import { Heart, Search, ShoppingBag } from 'lucide-react';

const menuItems = ['Главная', 'Каталог', 'Коллекции', 'О нас', 'Контакты'];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfce]/90 bg-[#faf5ed]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a className="font-serif text-3xl tracking-tight" href="#top" aria-label="Мебель — на главную">
          Мебель
        </a>

        <nav aria-label="Основная навигация" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-[#6b5443]">
            {menuItems.map((item) => (
              <li key={item}>
                <a className="transition-colors hover:text-[#2f2118]" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <IconButton label="Поиск">
            <Search size={18} />
          </IconButton>
          <IconButton label="Избранное">
            <Heart size={18} />
          </IconButton>
          <IconButton label="Корзина">
            <ShoppingBag size={18} />
          </IconButton>
          <IconButton label="Поиск" icon="⌕" />
          <IconButton label="Избранное" icon="♡" />
          <IconButton label="Корзина" icon="🛒" />
        </div>
      </div>
    </header>
  );
}

function IconButton({ children, label }: { children: ReactNode; label: string }) {
function IconButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="rounded-full border border-[#e3d4bf] bg-[#fffaf3] p-2.5 text-[#5d4736] transition-colors hover:bg-[#f1e4d2]"
    >
      {children}
      <span aria-hidden="true" className="inline-block min-w-5 text-center text-base">
        {icon}
      </span>
    </button>
  );
}
