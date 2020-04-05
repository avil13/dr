import { IState, IScoreMap } from '../types/state-types';
import { storeName, userNames, UserNamesType } from '../constants';

const scoreMap = {} as IScoreMap;
//@ts-ignore
Object.keys(userNames).forEach((key: UserNamesType) => {
  scoreMap[key] = 0;
});

export const get = (): IState => {
  const res = sessionStorage.getItem(storeName);

  if (res) {
    return JSON.parse(res);
  }

  return {
    init: false,
    step: 0,
    scoreMap,
  };
};

export const set = (state: IState): void => {
  if (typeof state === 'object' && state !== null) {
    sessionStorage.setItem(storeName, JSON.stringify(state));
  }
};
