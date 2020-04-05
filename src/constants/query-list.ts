import { IQuestion } from '@/types/state-types';

export const queryList: IQuestion[] = [
  {
    title: 'Это сайт открытка',
    question: 'Но есть нюанс. Он для именинницы, и только она может ответить на все вопросы правильно. Но ты можешь доказать, что он сделан для тебя 😏',
    plusItems: [],
    answers: [
      { text: 'Да, он для меня!!!', isValid: true },
    ],
  },
  //
  {
    title: 'Первый вопрос',
    question: 'Какое имя того, для кого сделан этот сайт?',
    plusItems: [
      'Lena',
      'LenaSav',
      'Ula',
      'Munser',
      'Monah',
      'SeregaSav',
      'Dismas',
      'Tanya',
    ],
    minusItems: ['otherName'],
    answers: [
      'Ваня',
      'Аня',
      { text: 'Лена', isValid: true },
      'Оля',
      'Катя',
      'Вася',
      'ХЗ...',
    ],
  },
  //
  {
    title: 'Второй вопрос',
    question: 'Балгодаря кому, мы познакомились?',
    plusItems: ['Lena'],
    answers: [
      'Юля',
      'Лена',
      'Оля',
      { text: 'Аня', isValid: true },
      'Таня',
      'Олеся',
    ],
  },
  //
  {
    title: 'Третий вопрос',
    question: 'Выбери два имени, кторорые надо соединить?',
    plusItems: ['Lena'],
    minusItems: ['Monah', 'Munser', 'Ula', 'Dismas'],
    ratio: 2,
    answers: [
      { text: 'Алиса', isValid: true },
      'Оля',
      { text: 'Юля', isValid: true },
      'Олеся',
    ],
  },
  //
  {
    title: 'Четвертый вопрос',
    question: 'Какой национальности была группа, на которую ты получила билет по случаю своего дня рождения?',
    plusItems: ['Lena', 'Monah'],
    answers: [
      'Итальянцы',
      'Грузины',
      { text: 'Армяне', isValid: true },
      'Таджики',
      'Монголы',
    ],
  },
  //
  {
    title: 'Очередной вопрос вопрос',
    question: 'Где ты родилась?',
    plusItems: ['LenaSav', 'Monah', 'Munser', 'Dismas', 'SeregaSav', 'Ula', 'otherName'],
    answers: [
      { text: 'Питер', isValid: true },
      { text: 'Владимир', isValid: true },
      { text: 'Владимир', isValid: true },
      'Ульяновск',
      'Оренбург',
    ],
  },
  //
  {
    title: 'Еще парочку вопросов',
    question: '?',
    plusItems: [],
    answers: [
      '',
      { text: 'Армяне', isValid: true },
    ],
  },
];
