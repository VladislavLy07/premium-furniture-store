export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  rating: string;
  image: string;
  hit?: boolean;
};

export type Collection = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Кресло "Элегант"',
    description: 'Мягкое кресло с уютной посадкой для спокойных вечеров и чтения.',
    price: '19 900 ₽',
    rating: '4.9',
    image: '/products/elegant-chair.svg',
    hit: true
  },
  {
    id: 2,
    name: 'Диван "Норфолк"',
    description: 'Просторный диван с глубоким сиденьем и износостойкой обивкой.',
    price: '79 900 ₽',
    rating: '4.8',
    image: '/products/norfolk-sofa.svg',
    hit: true
  },
  {
    id: 3,
    name: 'Шкаф "Лофт"',
    description: 'Шкаф из шпона ореха с мягкой подсветкой и модульными секциями.',
    price: '64 900 ₽',
    rating: '4.7',
    image: '/products/loft-wardrobe.svg',
    hit: true
  },
  {
    id: 4,
    name: 'Стол обеденный "Норд"',
    description: 'Лаконичный стол из тёплого дерева для семейных ужинов.',
    price: '54 900 ₽',
    rating: '4.9',
    image: '/products/nord-table.svg'
  }
];

export const collections: Collection[] = [
  {
    id: 1,
    title: 'Скандинавская коллекция',
    subtitle: 'Светлые формы, натуральный текстиль и баланс простоты.',
    image: '/collections/scandi.svg'
  },
  {
    id: 2,
    title: 'Минимализм',
    subtitle: 'Чистые линии и спокойная палитра для современного дома.',
    image: '/collections/minimal.svg'
  },
  {
    id: 3,
    title: 'Тёплое дерево',
    subtitle: 'Фактурный орех и дуб в премиальном исполнении.',
    image: '/collections/wood.svg'
  }
];
