<template>
  <div v-if="name && componentName">
    <component :is="componentName" :name="name" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LenaComponent from './modules/lena.vue';
import FriendComponent from './modules/friend.vue';
import OtherComponent from './modules/other.vue';
import { IState } from '../../types/state-types';
import { getState } from '../../base-process';
import { getName } from '../../utils/get-name';
import { UserNamesType } from '../../constants';

const components = {
  LenaComponent,
  FriendComponent,
  OtherComponent,
};

type CompName = 'LenaComponent' | 'FriendComponent' | 'OtherComponent' | '';

@Component({ components })
export default class PostcardComponent extends Vue {
  get componentName(): CompName {
    switch (this.key) {
      case 'Lena':
        return 'LenaComponent';
      case 'LenaSav':
      case 'Ula':
      case 'Tanya':
      case 'Munser':
      case 'Monah':
      case 'SeregaSav':
      case 'Dismas':
        return 'FriendComponent';
      default:
        return 'OtherComponent';
    }
  }

  name: string | null = null;
  key: UserNamesType | null = null;

  async mounted() {
    const state: IState = await this.$act.exec(getState.name);
    const res = getName(state);

    this.key = res.key;
    this.name = res.name;
  }
}
</script>
