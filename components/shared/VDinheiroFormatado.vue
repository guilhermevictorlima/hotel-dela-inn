<template>
  <span>
    {{ valorFormatadoEmBRL }}
  </span>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class VDinheiroFormatado extends Vue {

  @Prop({ required: true })
  valor!: number;

  get valorFormatadoEmBRL(): string {
    return this.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

}

</script>

<style scoped>

</style>
