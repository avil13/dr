import { IQuestionAnswers, IScoreMap, ISubmitQuery } from '@/types/state-types';
import { getScoreMap } from '@/utils/storage';
import { UserNamesType } from '@/constants';

export const getIsValid = (): [IQuestionAnswers[], boolean[], boolean][] => [
  //
  [['Ваня', { text: 'Лена', isValid: true }, 'Оля'], [true, true, true], false],
  [
    ['Ваня', { text: 'Лена', isValid: true }, 'Оля'],
    [false, true, false],
    true,
  ],
  [
    ['Майк', { text: 'Лена', answerNick: ['Lena'] }, 'Оля'],
    [true, false, false],
    false,
  ],
  [
    ['Майк', { text: 'Лена', answerNick: ['Lena'] }, 'Оля'],
    [false, true, false],
    false,
  ],
  [
    [{ text: 'Лена', isValid: true }, 'Оля', 'Маша', 'Саша'],
    [true, false, false],
    true,
  ],
];

export const getSelectedAnswers = (): [
  boolean[],
  IQuestionAnswers[],
  IQuestionAnswers[]
][] => [
  //
  [
    [true, true],
    [
      { text: 'name1', isValid: true },
      { text: 'name2', isValid: true },
    ],
    [
      { text: 'name1', isValid: true },
      { text: 'name2', isValid: true },
    ],
  ],
  [
    [true, false],
    [
      { text: 'name1', isValid: true },
      { text: 'name2', isValid: true },
    ],
    [{ text: 'name1', isValid: true }],
  ],
  [
    [false, false],
    [
      { text: 'name1', isValid: true },
      { text: 'name2', isValid: true },
    ],
    [],
  ],
];

export const getAnswersIndexes = (): [boolean[], number[]][] => [
  //
  [
    [true, true, true],
    [0, 1, 2],
  ],
  [
    [false, true, true],
    [1, 2],
  ],
  [[false, true, false], [1]],
  [[false, false, false], []],
];

export const hasAnswer = (): [boolean[], boolean][] => [
  //
  [[true, true], true],
  [[false, true], true],
  [[false, false], false],
];

//

export const addScore = (): [
  [number, UserNamesType, IScoreMap],
  IScoreMap
][] => [
  //
  [[1, 'Lena', getScoreMap()], getScoreMap({ Lena: 1 })],
  [[2, 'otherName', getScoreMap()], getScoreMap({ otherName: 2 })],
];

export const addScoreByNames = (): [
  [number, UserNamesType[], IScoreMap],
  IScoreMap
][] => [
  //
  [
    [1, ['Lena', 'Ula'], getScoreMap()],
    getScoreMap({
      Lena: 1,
      Ula: 1,
    }),
  ],
];

export const checkName = (): [[UserNamesType, IScoreMap], boolean][] => [
  //
  [['Lena', getScoreMap()], true],
  [[<UserNamesType>'Invalid', getScoreMap()], false],
];

//
export const updateScore = (): [[IScoreMap, ISubmitQuery], IScoreMap][] => [
  //
  [
    [
      getScoreMap(),
      {
        listOrAnswers: [true, false],
        question: {
          title: 'xx 1',
          question: 'yyy 1',
          answers: [
            {
              text: 'zz 1',
              isValid: true,
            },
            'str 1',
          ],
          plusItems: ['Lena', 'Ula'],
          minusItems: [],
          ratio: 1,
        },
      },
    ],
    getScoreMap({ Lena: 1, Ula: 1 }),
  ],
  //
  [
    [
      getScoreMap(),
      {
        listOrAnswers: [true, false],
        question: {
          title: 'xx 2',
          question: 'yyy 2',
          answers: [
            {
              text: 'zz 2',
              answerNick: ['Lena', 'Ula'],
            },
            'str 2',
          ],
          plusItems: [],
          minusItems: [],
          ratio: 2,
        },
      },
    ],
    getScoreMap({ Lena: 2, Ula: 2 }),
  ],
  //
  [
    [
      getScoreMap(),
      {
        listOrAnswers: [false, true],
        question: {
          title: 'xx 3',
          question: 'yyy 3',
          answers: [
            {
              text: 'zz 3',
              answerNick: ['Lena', 'Ula'],
            },
            'str 3',
          ],
          plusItems: [],
          minusItems: ['SeregaSav'],
          ratio: 3,
        },
      },
    ],
    getScoreMap({ SeregaSav: 3 }),
  ],
];
