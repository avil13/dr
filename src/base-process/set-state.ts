import { UserNamesType } from './../constants/index';
import { get, set } from '../utils/storage';
import { ISubmitQuery, IState, IScoreMap } from './../types/state-types';
import { ActMasterActionNamed } from 'vue-act-master';

export const setState: ActMasterActionNamed = {
  name: 'setState',

  // тут вся бизнеслогика по вычислению персонажа
  exec(data: ISubmitQuery): IState {
    const result: IState = get();

    this.updateScore(result.scoreMap, data);

    result.step += 1;

    set(result);

    return result;
  },

  updateScore(scoreMap: IScoreMap, data: ISubmitQuery) {
    const plusNames = data.plusItems;
    const minusNames = data.minusItems;
    const ratio = data.ratio || 1;

    if (data.isValidChoose) {
      this.addScoreByNames(ratio, plusNames, scoreMap);
    } else {
      this.addScoreByNames(ratio, minusNames, scoreMap);
    }

    data.answers.forEach((answer) => {
      //@ts-ignore
      if (typeof answer !== 'string' && !!answer.answerNick) {
        //@ts-ignore
        this.addScoreByNames(ratio, answer.answerNick, scoreMap);
      }
    });
  },

  addScoreByNames(
    score: number,
    names: (keyof IScoreMap)[],
    scoreMap: IScoreMap
  ) {
    names.forEach((name) => {
      this.addScore(score, name, scoreMap);
    });
  },

  addScore(score: number, name: keyof IScoreMap, scoreMap: IScoreMap) {
    this.checkName(name, scoreMap);
    scoreMap[name] += score;
  },

  checkName(name: keyof IScoreMap, scoreMap: IScoreMap) {
    if (typeof scoreMap[name] === 'undefined') {
      console.warn('=>', `Invalid name "${name}"`);
    }
  },
};
