<template>
  <section class="hero is-info welcome is-small">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HeaderComponent extends Vue {
  @Prop({
    type: String,
  })
  title!: string;

  @Prop({
    type: String,
  })
  subtitle!: string;
}
</script>
