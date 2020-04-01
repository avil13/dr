<template>
  <span class="columns">
    <span class="column">{{ user.name }}</span>
    <span class="column inline-block">{{ user.phone }}</span>
    <span class="column">{{ user.password }}</span>
    <span class="column">{{ user.date }}</span>
    <span class="column">
      <a href="#" @click.prevent="getToken" class="button is-link">get token</a>
    </span>
    <span class="column">
      <a href="#" @click.prevent="getOtt" class="button is-link">get ott</a>
    </span>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class UserListItemComponent extends Vue {
  @Prop()
  user: any;

  getToken () {}

  getOtt () {}
}
</script>

<style>
.inline-block {
  display: inline-block;
  white-space: nowrap;
}
</style>
