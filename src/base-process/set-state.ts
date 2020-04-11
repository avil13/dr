import { get, set } from '../utils/storage';
import {
  ISubmitQuery,
  IState,
  IScoreMap,
  IQuestionAnswers,
} from './../types/state-types';
import { ActMasterActionNamed } from 'vue-act-master';
import { UserNamesType } from '@/constants';

class SetState implements ActMasterActionNamed {
  name = 'setState';

  // тут вся бизнеслогика по вычислению персонажа
  exec(data: ISubmitQuery): IState {
    const result: IState = get();

    if (this.hasAnswer(data.listOrAnswers)) {
      this.updateScore(result.scoreMap, data);

      result.step += 1;

      set(result);
    }

    return result;
  }

  updateScore(scoreMap: IScoreMap, data: ISubmitQuery) {
    const plusNames = data.question.plusItems || [];
    const minusNames = data.question.minusItems || [];
    const ratio = data.question.ratio || 1;
    const allAnswers = data.question.answers;

    const selectedAnswers = this.getSelectedAnswers(
      data.listOrAnswers,
      allAnswers
    );

    if (this.isValidChoose(allAnswers, data.listOrAnswers)) {
      this.addScoreByNames(ratio, plusNames, scoreMap);
    } else {
      this.addScoreByNames(ratio, minusNames, scoreMap);
    }

    selectedAnswers.forEach(answer => {
      //@ts-ignore
      if (typeof answer !== 'string' && !!answer.answerNick) {
        //@ts-ignore
        this.addScoreByNames(ratio, answer.answerNick, scoreMap);
      }
    });

    return scoreMap;
  }

  isValidChoose(
    answers: IQuestionAnswers[],
    listOrAnswers: boolean[]
  ): boolean {
    return answers.every((v, i) => {
      if (typeof v === 'string' && listOrAnswers[i] === false) {
        return true;
      }

      return (v as any).isValid === listOrAnswers[i];
    });
  }

  getSelectedAnswers(
    listOrAnswers: boolean[],
    allAnswers: IQuestionAnswers[]
  ): IQuestionAnswers[] {
    const goodIndexes = this.getAnswersIndexes(listOrAnswers);

    return allAnswers.filter((v, i) => {
      return goodIndexes.includes(i);
    });
  }

  getAnswersIndexes(listOrAnswers: boolean[]): number[] {
    return listOrAnswers
      .map((v, i) => ({ v, i }))
      .filter(el => el.v)
      .map(el => el.i);
  }

  hasAnswer(listOrAnswers: boolean[]): boolean {
    return listOrAnswers.some(v => v === true);
  }

  //

  addScoreByNames(score: number, names: UserNamesType[], scoreMap: IScoreMap) {
    names.forEach(name => {
      this.addScore(score, name, scoreMap);
    });
    return scoreMap;
  }

  addScore(score: number, name: UserNamesType, scoreMap: IScoreMap) {
    this.checkName(name, scoreMap);
    scoreMap[name] += score;
    return scoreMap;
  }

  checkName(name: UserNamesType, scoreMap: IScoreMap) {
    if (typeof scoreMap[name] === 'undefined') {
      return false;
    }
    return true;
  }
}

export const setState = new SetState();
