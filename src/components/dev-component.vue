<template>
  <div>
    <pre>{{ state }}</pre>
    <div class="box has-text-centered">
      <button @click="resetState" type="reset" class="button">
        reset
      </button>
      <hr />
      <h4>Выбор персонажа</h4>
      <div class="select">
        <select @change="selectFinalUser" v-model="selectedItem">
          <option value="" selected> --- </option>
          <option v-for="(v, i) in names" :key="i" :value="v.key">
            {{ v.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IState, ISubmitQuery } from '../types/state-types';
import { resetState, setState } from '../base-process';
import { userNames, UserNamesType, queryList } from '../constants';
import { get, set } from '../utils/storage';

@Component
export default class DevComponent extends Vue {
  @Prop()
  state!: IState;

  selectedItem: string = '';

  get names(): { key: string; name: string }[] {
    const result = [];
    for (let k in userNames) {
      if (Object.prototype.hasOwnProperty.call(userNames, k)) {
        //@ts-ignore
        result.push({ key: k, name: userNames[k] });
      }
    }
    return result;
  }

  resetState() {
    this.$act.exec(resetState.name);
  }

  async selectFinalUser(event: Event) {
    const key: UserNamesType = (event.target as any).value;

    if (!key) {
      return;
    }

    const newState: ISubmitQuery = {
      question: {
        title: '',
        question: '',
        plusItems: [key],
        answers: [
          {
            isValid: true,
            text: '',
          },
        ],
        ratio: 100,
      },
      listOrAnswers: [true],
    };

    await this.$act.exec(resetState.name);
    const state: IState = get();
    const step = queryList.length - 1;
    state.step = step;
    set(state);
    await this.$act.exec(setState.name, newState);
  }
}
</script>
