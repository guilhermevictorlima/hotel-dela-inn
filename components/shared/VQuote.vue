<template>
  <v-container>
    <v-icon size="70">mdi-format-quote-open</v-icon>
    <br />

    <h1 class="font-weight-light">
      {{ citacao }}

      <br />
      <v-icon size="70">mdi-format-quote-close</v-icon>
      <br />
      <v-subheader style="font-size: 1.5rem">{{ autor }}</v-subheader>
    </h1>

  </v-container>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class VQuote extends Vue {

  @Prop({ required: true })
  citacao: string = '';

  @Prop({ required: true })
  autor: string = '';

}

</script>

<style scoped>

</style>
