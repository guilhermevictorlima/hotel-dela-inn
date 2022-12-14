<template>
  <div>
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
          class="text-field-date-picker text-field-on-error"
          :class="!temErro ? 'text-field-on-error' : ''"
          label="Data de check-in e check-out"
          prepend-inner-icon="mdi-calendar"
          outlined
          readonly
          v-bind="attrs"
          v-on="on"
          v-model="visualizacaoDatasSelecionadas"
          :color="temErro ? 'red' : 'primary'"
          @focus="exibirMenu = true"
          :persistent-hint="true"
          :hint="temErro ? mensagemErro : ''"
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
  </div>
</template>

<script lang="ts">

import { Component, Vue, Watch } from 'nuxt-property-decorator';

@Component
export default class VCheckInCheckOutPicker extends Vue {

  exibirMenu = false;
  datasSelecionadas: Array<Date> = [];
  temErro = false;
  mensagemErro = '';

  // TODO criar requisição falsa no fetch
  diasNaoPermitidos: Array<Date> = [new Date('2022-12-20'), new Date('2022-12-21'), new Date('2022-12-22'), new Date('2022-12-23'), new Date('2022-12-24'), new Date('2022-12-25'), new Date('2022-12-27'), new Date('2023-01-01'), new Date('2023-01-02'), new Date('2023-01-03')];

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
    return !this.diasNaoPermitidos.map(val => val.toISOString()).includes(new Date(data).toISOString());
  }

  @Watch('datasSelecionadas', { deep: true })
  validarData(): void {
     if (this.datasSelecionadas.length == 2) {
       this.diasNaoPermitidos.every(diaNaoPermitido => {
         if (diaNaoPermitido.getTime() >= new Date(this.datasSelecionadas[0]).getTime() && diaNaoPermitido.getTime() <= new Date(this.datasSelecionadas[1]).getTime()) {
           this.temErro = true;
           this.mensagemErro = `Escolha um período com dias disponíveis.`;
           this.exibirMenu = false;
           return false;
         } else this.temErro = false;
       });
     }
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

<style>

.text-field-date-picker .v-messages__message {
  color: red !important;
}

</style>
