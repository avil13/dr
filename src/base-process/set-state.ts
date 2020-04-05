import { UserNamesType } from './../constants/index';
import { get, set } from '../utils/storage';
import { ISubmitQuery, IState, IScoreMap } from './../types/state-types';
import { ActMasterActionNamed } from 'vue-act-master';

export const setState: ActMasterActionNamed = {
  name: 'setState',

  // тут вся бизнеслогика по вычислению персонажа
  exec(data: ISubmitQuery): IState {
    const result: IState = get();

    if (data.isValidChoose) {
      this.updateScore(result.scoreMap, data.plusItems);
    }

    result.step += 1;

    set(result);

    return result;
  },

  updateScore(scoreMap: IScoreMap, plus: UserNamesType[]) {
    plus.forEach(name => {
      if (typeof scoreMap[name] === 'undefined') {
        console.warn('=>', 'Invalid name');
      }
      scoreMap[name] += 1;
    });

    plus.forEach(name => {
      if (typeof scoreMap[name] === 'undefined') {
        console.warn('=>', 'Invalid name');
      }
      scoreMap[name] += 1;
    });
  },
};
