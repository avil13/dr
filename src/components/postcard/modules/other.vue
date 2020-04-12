<template>
  <div class="card-wrapper">
    <div class="wrap">
      <div class="wrap-item">
        <h1>С днем варенья, не тебя!!!</h1>
        <img
          class="wrap-item-img"
          src="../../../../src/assets/cat-happy.jpg"
          alt=""
        />
      </div>
      <div class="wrap-item wrap-item-text">
        <p>Поздравляю и тебя "{{ name }}", с этим праздничным днем.</p>
        <p>
          Совсем недавно(в прошлом веке), в этот чудесный день, на свет появилcя
          замечательный человек.
        </p>
        <p>
          Ты кончено понимаешь кого я имею в виду
          <span class="normal-t">😉</span>
        </p>
        <p>
          Поэтому не тяни и поздравь, она это заслуживает!!!
        </p>
        <p class="smile">
          😁
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class OtherPostcard extends Vue {
  @Prop({ type: String, required: true })
  name!: string;
}
</script>

<style scoped lang="scss">
$col1: #3298dc;
$col2: #00d1b2;

.card-wrapper {
  padding: 0em 2em 1.7em 2em;
}
.wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.wrap-item {
  width: 50%;
  box-sizing: border-box;
  padding: 10px;

  h1 {
    text-align: center;
    font-weight: bold;
  }
}

.wrap-item-text {
  font-style: italic;
  .normal-t {
    font-style: normal;
  }
  .smile {
    font-style: normal;
    font-size: 3rem;
  }
}

@media screen and (max-width: 768px) {
  .wrap {
    display: block;
  }
  .wrap-item {
    width: 100%;
  }
  .wrap-item-img {
    width: 200px;
    margin: 0 auto;
    display: block;
  }
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
