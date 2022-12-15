<template>
  <v-row align="center">
    <v-btn
      class="ma-2"
      text
      icon
      color="primary"
      @click="somar"
    >
      <v-icon>mdi-plus-thick</v-icon>
    </v-btn>
    <v-text-field
      :label="label"
      class="input-quantidade shrink text-center"
      type="number"
      v-model="valorQuantidade"
      readonly
    />
    <v-btn
      class="ma-2"
      text
      icon
      color="primary"
      @click="subtrair"
    >
      <v-icon>mdi-minus-thick</v-icon>
    </v-btn>
  </v-row>
</template>

<script lang="ts">

import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator';

@Component
export default class VQuantityEntryInput extends Vue {

  @Prop({ required: true })
  label: string = '';

  valorQuantidade = 0;

  somar(): void {
    this.valorQuantidade += 1;
  }

  subtrair(): void {
    this.valorQuantidade -= 1;
  }

  @Watch('valorQuantidade')
  aoMudarValorQuantidade(): void {
    if (this.valorQuantidade < 0) this.valorQuantidade = 0;
  }

}

</script>

<style scoped>

/deep/ .v-text-field {
  width: 5rem;
  text-align: center;
}

/deep/ input[type='number'] {
  -moz-appearance:textfield;
}

/deep/ input::-webkit-outer-spin-button,
/deep/ input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

</style>
