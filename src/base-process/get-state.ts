import { ActMasterAction } from 'vue-act-master';
import { get } from '../utils/storage';

export const getState: ActMasterAction = {
  name: 'getState',
  exec() {
    return get();
  }
};
