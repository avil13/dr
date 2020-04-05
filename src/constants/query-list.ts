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
    answers: [
      { text: 'Аня', answerNick: ['Lena'] },
      {text: 'Юля', answerNick: ['SeregaSav', 'LenaSav', 'Monah']},
      {text: 'Лена', answerNick: ['otherName']},
      {text: 'Леха', answerNick: ['Ula', 'Munser', 'Monah'] },
      {text: 'Егор', answerNick: ['Ula', 'Munser'] },
      {text: 'Сергей', answerNick: ['otherName'] },
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
    title: 'Очередной вопрос вопрос',
    question: 'Где ты родилась?',
    answers: [
      {
        text: 'Питер',
        answerNick: ['LenaSav', 'Monah', 'Dismas', 'SeregaSav', 'otherName'],
      },
      {
        text: 'Владимир',
        answerNick: ['Ula', 'Munser', 'Monah', 'Dismas', 'Tanya', 'otherName'],
      },
      { text: 'Ульяновск', answerNick: ['LenaSav', 'SeregaSav', 'otherName'] },
      { text: 'Оренбург', answerNick: ['Lena'] },
    ],
  },
  //
  {
    title: 'Еще парочку вопросов',
    question: 'А какое у Лены отчество?',
    plusItems: [],
    minusItems: ['otherName'],
    answers: [
      'Ивановна',
      'Сергеевна',
      'Петровна',
      { text: 'Владимировна', isValid: true },
    ],
  },
  //
  {
    title: 'Еще парочку вопросов',
    question: '?',
    plusItems: [],
    answers: ['', { text: '--- что то надо придумать еще --- ', isValid: true }],
  },
];
