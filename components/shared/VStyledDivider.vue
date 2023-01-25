<template>
  <p class="styled-divider text-center" :class="nivelTitulo" :style="cor">•────•──────────•────•</p>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class VStyledDivider extends Vue {

  @Prop({ required: false, default: '#70364e' })
  color!: string;

  @Prop({ required: false, default: 5 })
  hLevel!: number;

  get cor(): string {
    return `color: ${this.color}`;
  }

  get nivelTitulo(): string {
    return `text-h${this.hLevel}`;
  }

}

</script>

<style scoped>

@media (max-width: 820px) {
  .styled-divider {
    font-size: 1.5rem !important;
  }
}

</style>
