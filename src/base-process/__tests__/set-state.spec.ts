import { setState } from '../set-state'
import * as fixtures from '../__fixtures__/querys'
import { IQuestionAnswers, IScoreMap, ISubmitQuery } from '@/types/state-types'
import { UserNamesType } from '@/constants'

describe('setState helpers', () => {
  it.each<[IQuestionAnswers[], boolean[], boolean]>(fixtures.getIsValid())(
    'isValidChoose',
    (
      answers: IQuestionAnswers[],
      listOrAnswers: boolean[],
      expected: boolean,
    ) => {
      const res = setState.isValidChoose(answers, listOrAnswers)
      expect(res).toBe(expected)
    },
  )

  it.each<[boolean[], IQuestionAnswers[], IQuestionAnswers[]]>(
    fixtures.getSelectedAnswers(),
  )(
    'getSelectedAnswers',
    (
      listOrAnswers: boolean[],
      allAnswers: IQuestionAnswers[],
      expected: IQuestionAnswers[],
    ) => {
      const res = setState.getSelectedAnswers(listOrAnswers, allAnswers)
      expect(res).toEqual(expected)
    },
  )

  it.each<[boolean[], number[]]>(fixtures.getAnswersIndexes())(
    'getAnswersIndexes',
    (listOrAnswers: boolean[], expected: number[]) => {
      const res = setState.getAnswersIndexes(listOrAnswers)
      expect(res).toEqual(expected)
    },
  )

  it.each<[boolean[], boolean]>(fixtures.hasAnswer())(
    'hasAnswer',
    (listOrAnswers: boolean[], expected: boolean) => {
      const res = setState.hasAnswer(listOrAnswers)
      expect(res).toBe(expected)
    },
  )
})

describe('setState score', () => {
  it.each<[[UserNamesType, IScoreMap], boolean]>(fixtures.checkName())(
    'checkName',
    (args: [UserNamesType, IScoreMap], expected: boolean) => {
      const res = setState.checkName(...args)
      expect(res).toEqual(expected)
    },
  )

  it.each<[[number, UserNamesType, IScoreMap], IScoreMap]>(fixtures.addScore())(
    'addScore',
    (args: [number, UserNamesType, IScoreMap], expected: IScoreMap) => {
      const res = setState.addScore(...args)
      expect(res).toEqual(expected)
    },
  )

  it.each<[[number, UserNamesType[], IScoreMap], IScoreMap]>(
    fixtures.addScoreByNames(),
  )(
    'addScoreByNames',
    (args: [number, UserNamesType[], IScoreMap], expected: IScoreMap) => {
      const res = setState.addScoreByNames(...args)
      expect(res).toEqual(expected)
    },
  )
})

describe('setState updateScore', () => {
  it.each<[[IScoreMap, ISubmitQuery], IScoreMap]>(fixtures.updateScore())(
    'updateScore',
    (args: [IScoreMap, ISubmitQuery], expected: IScoreMap) => {
      const res = setState.updateScore(...args)
      expect(res).toEqual(expected)
    },
  )
})
