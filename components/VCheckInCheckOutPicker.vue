<template>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="auto"
    v-model="exibirMenu"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        label="Data de check-in e check-out"
        prepend-inner-icon="mdi-calendar"
        outlined
        readonly
        v-bind="attrs"
        v-on="on"
        v-model="visualizacaoDatasSelecionadas"
        @focus="exibirMenu = true"
      />
    </template>
    <v-date-picker
      v-model="datasSelecionadas"
      range
      scrollable
      locale="pt-br"
      selected-items-text=""
      :min="new Date().toISOString().substring(0, 10)"
      :allowed-dates="datasPermitidas"
    >
      <v-spacer></v-spacer>
      <v-btn
        text
        @click="cancelarSelecao"
      >
        Cancelar
      </v-btn>
      <v-btn
        text
        @click="confirmarSelecao"
      >
        Ok
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class VCheckInCheckOutPicker extends Vue {

  exibirMenu = false;
  datasSelecionadas: Array<Date> = [];

  // TODO criar requisição falsa no fetch
  diasNaoPermitidos: Array<string> = ['2022-12-20', '2022-12-21', '2022-12-22', '2022-12-23', '2022-12-24', '2022-12-25', '2022-12-27', '2023-01-01', '2023-01-02', '2023-01-03'];

  confirmarSelecao(): void {
    this.exibirMenu = false;
  }

  cancelarSelecao(): void {
    this.exibirMenu = false;
    this.datasSelecionadas = [];
    console.log(this.datasSelecionadas[0])
  }

  formatarData(data: Date): string {
    return new Date(data).toISOString().substring(0, 10).split('-').reverse().join('/');
  }

  datasPermitidas(data: string) {
    return !this.diasNaoPermitidos.includes(data);
  }

  get visualizacaoDatasSelecionadas(): string {
    let visualizacaoDatas = '';

    if (this.datasSelecionadas[0]) {
      visualizacaoDatas += `Check-in: ${this.formatarData(this.datasSelecionadas[0])}`;
    }

    if (this.datasSelecionadas[1]) {
      visualizacaoDatas += `, Check-out: ${this.formatarData(this.datasSelecionadas[1])}`;
    }

    return visualizacaoDatas;
  }

}

</script>

<style scoped>

</style>
