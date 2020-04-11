<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ q.title }}</p>
          <p class="subtitle is-6">{{ q.question }}</p>
        </div>
      </div>

      <div class="content">
        <div class="control checkbox-list">
          <label
            v-for="(v, i) in q.answers"
            :key="`${i}-${v.text || v}`"
            class="checkbox"
          >
            <input v-model="listOrAnswers[i]" type="checkbox" :name="i" />
            {{ v['text'] || v }}
          </label>
        </div>
      </div>
      <div class="card-footer footer-pad-top">
        <button
          @click="submit"
          type="button"
          class="button is-info is-large card-footer-item"
        >
          Далее
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { IQuestion, ISubmitQuery } from '../types/state-types';

@Component({
  watch: {
    '$props.q': {
      handler() {
        (this as QuestionCard).reset();
      },
      immediate: true,
    },
  },
})
export default class QuestionCard extends Vue {
  @Prop({ type: Object, required: true })
  q!: IQuestion;

  // список ответов
  listOrAnswers: boolean[] = [];

  reset() {
    this.listOrAnswers = this.q.answers.map(() => false);
  }

  @Emit()
  submit(): ISubmitQuery {
    return {
      question: this.q,
      listOrAnswers: this.listOrAnswers,
    };
  }
}
</script>

<style lang="scss">
$label-indent: 0.7rem;

.checkbox-list {
  .checkbox {
    display: block;
    padding-top: $label-indent;
    padding-bottom: $label-indent;
  }
}
.footer-pad-top {
  padding-top: 4rem;
}
</style>
