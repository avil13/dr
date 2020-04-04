import { IState } from '../types/state-types';
import { storeName } from '../constants/index';

export const get = (): IState => {
  return {
    name: storeName,
    userName: 'Lena',
    score: 0,
    step: 0
  };
};

export const set = (state: IState): void => {
  console.log('=>', state);
};
