import { UserNamesType } from './../constants/index';
import { isIOS, isWin } from './../utils/detect-device';
import { IState } from './../types/state-types';
import { ActMasterActionNamed } from 'vue-act-master';
import { get, set } from '../utils/storage';

export const getState: ActMasterActionNamed = {
  name: 'getState',
  exec(): IState {
    const state = get();

    if (state.init === false) {
      state.init = true;
      this.setIosScore(state);
    }

    set(state);

    return state;
  },

  setIosScore(state: IState) {
    let names: UserNamesType[] = [];

    if (isIOS()) {
      names = ['Munser', 'Ula', 'otherBoy', 'otherGirl'];
    } else if (isWin()) {
      names = ['Monah', 'SeregaSav', 'LenaSav', 'otherBoy', 'otherGirl'];
    }

    names.forEach(name => {
      state.scoreMap[name] += 2;
    });
  },
};
