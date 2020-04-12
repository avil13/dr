<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column is-hidden-mobile is-2"></div>
        <div class="column">
          <HeaderComponent title="***" subtitle="..."></HeaderComponent>
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
                      :q="question"
                    ></QuestionCard>
                    <div v-else>
                      <PostcardComponent />
                    </div>

                    <div v-if="isDev">
                      <pre>{{ state }}</pre>
                      <div class="box has-text-centered">
                        <button @click="resetState" type="reset" class="button">
                          reset
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!--  -->
              </div>
            </div>
          </div>
        </div>
        <div class="column is-hidden-mobile is-2"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IListenerArgs } from 'vue-act-master';

import { getState, setState, resetState } from './base-process';
import { IState, IQuestion, ISubmitQuery } from './types/state-types';

import HeaderComponent from './components/header-component.vue';
import QuestionCard from './components/question-card.vue';
import PostcardComponent from './components/postcard/postcard-component.vue';
import { queryList } from './constants';
import { isDev } from './utils/is-dev';

const components = {
  HeaderComponent,
  QuestionCard,
  PostcardComponent,
};

@Component({ components })
export default class AppComponent extends Vue {
  state: IState | null = null;

  get isDev() {
    return isDev();
  }

  resetState() {
    this.$act.exec(resetState.name);
  }

  get currentStep(): number {
    const s = this.state?.step || 0;
    return s;
  }

  title: string = 'Список вопросов';

  get question(): IQuestion {
    return queryList[this.currentStep];
  }

  submitHandler(ev: ISubmitQuery) {
    this.$act.exec(setState.name, ev);
  }

  updateState(data: IListenerArgs) {
    const { value } = data;
    if (value && this.state) {
      this.state.step = value.step;
      this.state.scoreMap = value.scoreMap;
    }
  }

  async mounted() {
    const actions = [setState, getState, resetState];
    this.$act.addActions(actions);
    this.state = await this.$act.exec(getState.name);
    this.$act.subscribe(setState.name, this.updateState);
  }
}
</script>

<style>
.content {
  padding-top: 2rem;
  padding-bottom: 0.2rem;
}
</style>
