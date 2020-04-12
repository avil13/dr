export const userNames = {
  Lena: 'Лена',
  LenaSav: 'Feima',
  Ula: 'Юля',
  Tanya: 'Таня',
  Munser: 'Мунсер',
  Monah: 'Монах',
  SeregaSav: 'Эл',
  Dismas: 'Дисмас',
  otherBoy: 'Чувак',
  otherGirl: 'Подруга',
};

export type UserNamesType = keyof typeof userNames;

export const storeName = '_store';

export * from './query-list';
