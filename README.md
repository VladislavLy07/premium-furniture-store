# Мебель — Premium Furniture Store Homepage

Готовый каркас главной страницы для Next.js (App Router) с русским интерфейсом и локальными статическими ассетами.

## Технологии

- Next.js
- React + TypeScript
- Tailwind CSS

## Локальный запуск

```bash
npm install
npm run dev
```

## Production-сборка

```bash
npm run build
npm run start
```

## Структура

- `app/` — App Router layout + homepage
- `components/` — секции страницы
- `lib/products.ts` — мок-данные
- `public/` — локальные SVG ассеты

## Vercel

Проект совместим с деплоем на Vercel без дополнительной конфигурации.
Репозиторий содержит полную структуру главной страницы мебельного бренда на App Router-структуре (`app/`, `components/`, `lib/`, `public/`) с русским UI-контентом и локальными placeholder-изображениями.

## Что внутри

- Полный набор секций: sticky-header, hero, преимущества, популярные товары, коллекции, блок о бренде и footer.
- Статические мок-данные товаров и коллекций в `lib/products.ts`.
- Локальные SVG-изображения в `public/`.
- Tailwind/Next/TypeScript конфиги добавлены в репозиторий для дальнейшего развития проекта.

## Проверка в текущем окружении

```bash
npm install
npm run build
```

Скрипт `build` выполняет валидацию обязательных файлов и проверяет отсутствие незавершённых пометок.
