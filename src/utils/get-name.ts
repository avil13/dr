import { userNames, UserNamesType } from '../constants';
import { IState } from '@/types/state-types';

export const getName = (state: IState) => {
  const storeMap = state.scoreMap;

  let maxKey: UserNamesType | string = '';
  let maxVal: number = -1;

  for (let key in storeMap) {
    if (Object.prototype.hasOwnProperty.call(storeMap, key)) {
      //@ts-ignore
      if (storeMap[key] > maxVal) {
        //@ts-ignore
        maxVal = storeMap[key];
        maxKey = key as UserNamesType;
      }
    }
  }

  return {
    key: maxKey,
    name: userNames[maxKey as UserNamesType],
  };
};
