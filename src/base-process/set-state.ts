import { ActMasterAction } from 'vue-act-master';
import { set } from '../utils/storage';

export const setState: ActMasterAction = {
  name: 'setState',
  exec(data) {
    return set(data);
  }
};
