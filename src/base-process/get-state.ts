import { ActMasterActionNamed } from 'vue-act-master';
import { get } from '../utils/storage';

export const getState: ActMasterActionNamed = {
  name: 'getState',
  exec() {
    return get();
  }
};
