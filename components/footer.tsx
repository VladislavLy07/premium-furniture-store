const navLinks = ['Главная', 'Каталог', 'Коллекции', 'О нас', 'Контакты'];

export function Footer() {
  return (
    <footer className="border-t border-[#e5d8c6] bg-[#f8f1e8]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 md:grid-cols-4 md:px-8">
        <div>
          <p className="font-serif text-3xl">Мебель</p>
          <p className="mt-2 text-sm text-[#725c4b]">Премиальная мебель для интерьеров с характером.</p>
        </div>

        <div>
          <h2 className="mb-3 text-sm uppercase tracking-[0.12em] text-[#8c7059]">Навигация</h2>
          <ul className="space-y-2 text-sm text-[#5f4938]">
            {navLinks.map((link) => (
              <li key={link}>
                <a className="transition-colors hover:text-[#2f2118]" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm uppercase tracking-[0.12em] text-[#8c7059]">Контакты</h2>
          <ul className="space-y-2 text-sm text-[#5f4938]">
            <li>+7 (495) 000-00-00</li>
            <li>hello@mebel.ru</li>
            <li>Москва, ул. Интерьерная, 21</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm uppercase tracking-[0.12em] text-[#8c7059]">Соцсети</h2>
          <ul className="space-y-2 text-sm text-[#5f4938]">
            <li>
              <a href="#">Telegram</a>
            </li>
            <li>
              <a href="#">VK</a>
            </li>
            <li>
              <a href="#">Pinterest</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#e5d8c6] px-4 py-4 text-center text-xs text-[#7b6653] md:px-8">
        © 2026 Мебель. Все права защищены.
      </div>
    </footer>
  );
}
