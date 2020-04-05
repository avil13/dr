<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column">
          <HeaderComponent title="***" subtitle="..." ></HeaderComponent>
          <!--  -->
          <div class="columns">
            <div class="column">
              <!--  -->
              <div class="card events-card">
                <header class="card-header">
                  <p class="card-header-title">
                    {{ title }}
                  </p>
                  <a
                    href="#"
                    class="card-header-icon"
                    aria-label="more options"
                  >
                    <span class="icon">
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div class="card-table">
                  <div class="content">
                    <QuestionCard
                    v-if="question"
                    @submit="submitHandler"
                    :q="question" ></QuestionCard>
                    <div v-else>
                      <h4>У меня нет больше вопросов</h4>
                    </div>
                    <pre>{{ state }}</pre>
                  </div>
                </div>
                <!--  -->
                <!-- <footer class="card-footer">
                  <a href="#" class="card-footer-item">todo pagination </a>
                </footer> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IListenerArgs } from 'vue-act-master';

import { getState, setState } from './base-process';
import { IState, IQuestion, ISubmitQuery } from './types/state-types';

import HeaderComponent from './components/header-component.vue';
import QuestionCard from './components/question-card.vue';
import { queryList } from './constants';

const components = {
  HeaderComponent,
  QuestionCard,
};

@Component({
  components,
})
export default class AppComponent extends Vue {
  state: IState | null = null;

  get currentStep(): number {
    const s = this.state?.step || 0;
    return s;
  }

  title: string = 'Список вопросов';

  get question(): IQuestion {
    return queryList[this.currentStep];
  }

  submitHandler(ev: ISubmitQuery | null) {
    if (ev === null) {
      return;
    }
    //
    this.$act.exec(setState.name, ev)
  }

  updateState(data: IListenerArgs) {
    const { value } = data;
    if (value && this.state) {
      this.state.step = value.step;
      this.state.scoreMap = value.scoreMap;
    }
  }

  async mounted() {
    const actions = [setState, getState];
    this.$act.addActions(actions);
    this.state = await this.$act.exec(getState.name);
    this.$act.subscribe(setState.name, this.updateState);
  }
}
</script>
