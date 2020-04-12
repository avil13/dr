<template>
  <div class="card-wrapper">
    <div id="card" class="open-fully">
      <div id="card-inside">
        <div class="wrap">
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
            Желаю чтобы всегда рядом с тобой были верные друзья и близкие и
            дорогие тебе люди.
          </p>
        </div>
      </div>

      <div id="card-front">
        <div class="wrap">
          <div class="wrap-front">
            <!-- <h1>С днем варенья!!!</h1> -->
            <img src="../../../../src/assets/nami.jpg" alt="">
          </div>
          <div class="wrap-back">
            <!-- <img src="../../../../src/assets/happi.jpg" alt=""> -->
          </div>
        </div>
        <button id="open"></button>
        <button id="close"></button>
      </div>
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
    (function() {
      function $(id: string) {
        return document.getElementById(id);
      }

      const card = $('card') as HTMLElement;
      const openB = $('open') as HTMLElement;
      const closeB = $('close') as HTMLElement;
      let timer: any = null;
      console.log('wat', card);
      openB.addEventListener('click', function() {
        card.setAttribute('class', 'open-half');
        if (timer) clearTimeout(timer);
        timer = setTimeout(function() {
          card.setAttribute('class', 'open-fully');
          timer = null;
        }, 1000);
      });

      closeB.addEventListener('click', function() {
        card.setAttribute('class', 'close-half');
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function() {
          card.setAttribute('class', '');
          timer = null;
        }, 1000);
      });
    })();
  }
}
</script>

<style scoped lang="scss">
$col1: #3298dc;
$col2: #00d1b2;

.card-wrapper {
  padding: 2rem;
}

#card-front {
  color: #ffdfdf;
}

#card,
#card-front,
#card-inside {
  height: 480px;
}

.wrap {
  padding: 1.5em 2.5em;
  height: 100%;
  p {
    font-size: 0.96rem;
  }
}
#card-front .wrap {
  padding: 1em 2em;
}
#card-front,
#card-inside {
  width: 50%;
  -webkit-box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.25),
    0 0 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 50%;
}

#card-inside .wrap {
  background: #ffefef;
  -webkit-box-shadow: inset 2px 0 1px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: inset 2px 0 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 2px 0 1px rgba(0, 0, 0, 0.05);
}
#card {
  max-width: 960px;
  margin: 0 auto;
  transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  perspective: 5000px;
  -moz-perspective: 5000px;
  -webkit-perspective: 5000px;
  position: relative;
}

#card h1 {
  text-align: center;
  font-family: 'Nobile', sans-serif;
  font-style: italic;
  font-size: 70px;
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.15),
    1px 1px 0 rgba(255, 200, 200, 255), 2px 2px 0 rgba(255, 150, 150, 255),
    3px 3px 0 rgba(255, 125, 125, 255);
  color: #fff;
  font-size: 3rem;
}
#card-inside {
  font-size: 1.1em;
  line-height: 1.4;
  font-family: 'Nobile';
  color: #331717;
  font-style: italic;
}

p {
  margin-top: 1em;
}

p:first-child {
  margin-top: 0;
}

p.signed {
  margin-top: 1.5em;
  text-align: center;
  font-family: 'Dancing Script', sans-serif;
  font-size: 1.5em;
}

#card-front {
  background-color: $col1;
  background-image: linear-gradient(top, $col1 0%, $col2 100%);
  background-image: -moz-linear-gradient(top, $col1 0%, $col2 100%);
  background-image: -webkit-linear-gradient(top, $col1 0%, $col2 100%);
  transform-origin: left;
  -moz-transform-origin: left;
  -webkit-transform-origin: left;
  transition: transform 1s linear;
  -moz-transition: -moz-transform 1s linear;
  -webkit-transition: -webkit-transform 1s linear;
  position: relative;
}

#card-front .wrap {
  transition: background 1s linear;
  -moz-transition: background 1s linear;
  -webkit-transition: background 1s linear;
}

#card-front .wrap .wrap-back {
  display: none;
}

#card-front button {
  position: absolute;
  bottom: 1em;
  right: -12px;
  // background: #f44;
  color: #fff;
  font-family: 'Nobile', sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 1.5em;
  padding: 0.5em;
  border: none;
  cursor: pointer;
  // box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.4);
  // -moz-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.4);
  // -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25),
  //   0 0 1px rgba(0, 0, 0, 0.4);

  width: 40px;
  height: 40px;
  background-image: url('../../../../src/assets/arr-right.png');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  border: 0;
  box-shadow: none;
  outline: none;
  transition: 0.3s ease-in-out;
}

#card-front button:hover {
  background-image: url('../../../../src/assets/arr-right.png');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  border: 0;
  box-shadow: none;
  outline: none;
  transform: translate(5px,0);
}

#card-front button:focus {
  outline: none;
}

#close {
  display: none;
}

#card.open-fully #close,
#card-open-half #close {
  display: inline;
}

#card.open-fully #open {
  display: none;
}

#card.open-half #card-front,
#card.close-half #card-front {
  transform: rotateY(-90deg);
  -moz-transform: rotateY(-90deg);
  -webkit-transform: rotateY(-90deg);
}
#card.open-half #card-front .wrap {
  background-color: rgba(0, 0, 0, 0.5);
}

#card.open-fully #card-front,
#card.close-half #card-front {
  background: #ffefef;
}

#card.open-fully #card-front {
  transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -webkit-transform: rotateY(-180deg);
}

#card.open-fully #card-front .wrap {
  background-color: rgba(0, 0, 0, 0);
}

#card.open-fully #card-front .wrap .wrap-front,
#card.close-half #card-front .wrap .wrap-front {
  display: none;
}

#card.open-fully #card-front .wrap .wrap-back,
#card.close-half #card-front .wrap .wrap-back {
  display: block;
  padding: 1.5em 2.5em;
  height: 100%;
  background-image: url('../../../../src/assets/happy-transparent.png');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
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
