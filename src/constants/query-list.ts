import { IQuestion } from '@/types/state-types';

export const queryList: IQuestion[] = [
  {
    title: 'Это сайт открытка',
    question:
      'Но есть нюанс. Он для именинницы, и только она может ответить на все вопросы правильно. Но ты можешь доказать, что он сделан для тебя 😏',
    answers: [{ text: 'Да, он для меня!!!', isValid: true }],
  },
  //
  {
    title: 'Вопрос номер ноль!',
    question: 'Ты парень или девушка?',
    ratio: 10,
    answers: [
      {
        text: 'Парень',
        answerNick: ['Munser', 'Monah', 'SeregaSav', 'Dismas', 'otherBoy'],
      },
      {
        text: 'Девушка',
        answerNick: ['Lena', 'LenaSav', 'Ula', 'Tanya', 'otherGirl'],
      },
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
    minusItems: ['otherBoy', 'otherGirl'],
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
    answers: [
      { text: 'Аня', answerNick: ['Lena'] },
      { text: 'Юля', answerNick: ['SeregaSav', 'LenaSav', 'Monah'] },
      { text: 'Лена', answerNick: ['otherBoy', 'otherGirl'] },
      { text: 'Леха', answerNick: ['Ula', 'Munser', 'Monah'] },
      { text: 'Егор', answerNick: ['Ula', 'Munser'] },
      { text: 'Сергей', answerNick: ['otherBoy', 'otherGirl'] },
    ],
  },
  //
  {
    title: 'Третий вопрос',
    question: 'Выбери два имени, кторорые надо соединить?',
    plusItems: ['Lena'],
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
    question:
      'Какой национальности была группа, на которую ты получила билет по случаю своего дня рождения?',
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
    title: 'Очередной вопрос',
    question: 'Где родилась именинница?',
    answers: [
      {
        text: 'Питер',
        answerNick: [
          'LenaSav',
          'Monah',
          'Dismas',
          'SeregaSav',
          'otherBoy',
          'otherGirl',
        ],
      },
      {
        text: 'Владимир',
        answerNick: [
          'Ula',
          'Munser',
          'Monah',
          'Dismas',
          'Tanya',
          'otherBoy',
          'otherGirl',
        ],
      },
      {
        text: 'Ульяновск',
        answerNick: ['LenaSav', 'SeregaSav', 'otherBoy', 'otherGirl'],
      },
      { text: 'Оренбург', answerNick: ['Lena'] },
    ],
  },
  //
  {
    title: 'Еще парочку вопросов',
    question: 'А какое у Лены отчество?',
    plusItems: [],
    minusItems: ['otherBoy', 'otherGirl'],
    answers: [
      'Ивановна',
      'Сергеевна',
      'Петровна',
      { text: 'Владимировна', isValid: true },
    ],
  },
  //
];
