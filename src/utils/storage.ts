import { IState, IScoreMap } from '../types/state-types';
import { storeName, userNames, UserNamesType } from '../constants';

export const getScoreMap = (mock: { [k: string]: number } = {}): IScoreMap => {
  const scoreMap = {} as IScoreMap;
  //@ts-ignore
  Object.keys(userNames).forEach((key: UserNamesType) => {
    scoreMap[key] = 0;
  });

  return { ...scoreMap, ...mock };
};

export const get = (): IState => {
  const res = sessionStorage.getItem(storeName);

  if (res) {
    return JSON.parse(res);
  }

  return {
    init: false,
    step: 0,
    scoreMap: getScoreMap(),
  };
};

export const set = (state: IState): void => {
  if (typeof state === 'object' && state !== null) {
    sessionStorage.setItem(storeName, JSON.stringify(state));
  }
};
