export const userNames = {
  Lena: 'Лена',
  LenaSav: 'Feima',
  Ula: 'Юля',
  Tanya: 'Таня',
  Munser: 'Мунсер',
  Monah: 'Монах',
  SeregaSav: 'Эл',
  Dismas: 'Дисмас',
  otherBoy: 'Чувак какой-то',
  otherGirl: 'Телка какая-то',
};

export type UserNamesType = keyof typeof userNames;

export const storeName = '_store';

export * from './query-list';
