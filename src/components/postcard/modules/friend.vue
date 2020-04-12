<template>
  <div>
    Friend
    {{ name }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FriendPostcard extends Vue {
  @Prop({ type: String, required: true })
  name!: string;
}
</script>
