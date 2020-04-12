<template>
  <div class="card-wrapper">
    <div class="wrap">
      <h1>С днем варенья!!!</h1>
      <p>
        Поздравляю тебя с этим праздничным днем.
      </p>
      <p>
        До сих пор вспоминаю, как мне стукнуло 30. <br />
        Сижу на конференции и тут СМС от тебя, о том что ты в Москве.
        <br />
        А я совершенно не планировал кому то говорить или как то отмечать)))
      </p>
      <p>
        Но тогда я лишний раз убедился, что встретить этот праздник лучше
        всего с друзьями или семьей.
      </p>
      <p>
        Желаю что бы всегда рядом с тобой были верные друзья и близкие и
        дорогие тебе люди.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LenaPostcard extends Vue {
  @Prop({ type: String, required: true })
  name!: string;

  mounted() {
  }
}
</script>

<style scoped lang="scss">
$col1: #3298dc;
$col2: #00d1b2;

.card-wrapper {
  padding: 0em 2em 1.7em 2em;
}

footer {
  max-width: 500px;
  margin: 40px auto;
  font-family: 'Nobile', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #888;
  text-align: center;
}
</style>
