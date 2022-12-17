<template>
  <div>

    <v-card class="elevation-24">
      <v-container fluid>
        <br />
        <v-row align="center" justify="center" align-content="center" align-content-lg="center">
          <v-col cols="5">
            <v-check-in-check-out-picker
              :datas="[dataChegada, dataSaida]"
            />
          </v-col>
          <v-col cols="2">
            <v-quantity-entry-input :value="parseInt($route.params.adultos) || 0" label="Adultos" />
          </v-col>
          <v-col cols="2">
            <v-quantity-entry-input :value="parseInt($route.params.criancas) || 0" label="Crianças" />
          </v-col>
          <v-col cols="2">
            <v-btn large width="200" color="primary">Pesquisar</v-btn>
            <span>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
            </span>
          </v-col>
        </v-row>
        <br />
      </v-container>
    </v-card>
      <v-overlay :value="false">
        <v-progress-circular
          indeterminate
          size="64"
        />
      </v-overlay>

    <br />
    <br />
    <br />

      <v-container>
        <v-row align="center" align-content="center">
          <v-col cols="15">
            <v-card-quarto width="70%" :data-chegada="dataChegada" :quarto-to="quartoTo" />
          </v-col>
          <v-col cols="15">
            <v-card-quarto width="70%" :data-chegada="dataChegada" :quarto-to="{...quartoTo, imagens: ['standart-twin.jpg', 'standart-casal.jpg'], maximoPessoas: 1}" />
          </v-col>
          <v-col cols="15">
            <v-card-quarto width="70%" :data-chegada="dataChegada" :quarto-to="{...quartoTo, imagens: ['standart-twin.jpg', 'standart-casal.jpg'], maximoPessoas: 3}" />
          </v-col>
          <v-col cols="15">
            <v-card-quarto width="70%" :horizontal="true" :quarto-to="{...quartoTo, imagens: ['standart-twin.jpg', 'standart-casal.jpg'], maximoPessoas: 3}" />
          </v-col>
        </v-row>
      </v-container>

    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts">

// http://localhost:3000/reserva/2022-12-20/2022-12-26/1/1

import { Component, Vue } from 'nuxt-property-decorator';
import VQuantityEntryInput from '~/components/shared/VQuantityEntryInput.vue';
import VCheckInCheckOutPicker from '~/components/shared/VCheckInCheckOutPicker.vue';
import VCardQuarto from '~/components/shared/VCardQuarto.vue';
import { Quarto } from '~/model/types/Quarto';
import VDinheiroFormatado from "~/components/shared/VDinheiroFormatado.vue";

@Component({
  components: {VDinheiroFormatado, VCardQuarto, VCheckInCheckOutPicker, VQuantityEntryInput }
})
export default class ReservaIndex extends Vue {

  buscandoQuartos = false;

  get dataChegada(): Date {
    return new Date(this.$route.params.dataChegada);
  }

  get dataSaida(): Date {
    return new Date(this.$route.params.dataSaida);
  }

  quartoTo: Quarto = {
    id: 1,
    nomeQuarto: 'Standard Twin - 2 pessoas',
    descricao: 'DUAS CAMAS DE SOLTEIRO, \n AR CONDICIONADO, \n FRIGOBAR, \n TELEVISÃO 40 POLEGADAS, \n SECADOR DE CABELO, \n WI-FI, \n VOLTAGEM 220V, \n ESTACIONAMENTO, \n Dimensão: 18 m², \n Pay per view, \n Ar Condicionado, \n Telefone, \n Camareira/Serviço de arrumação de quarto (diário), \n Produtos de higiene pessoal gratuitos, \n Secador de Cabelo, \n Cofre no quarto, \n Televisão, \n Chave Eletrônica, \n Acesso à Internet - livre, \n Minibar, \n Tamanho do quarto 18 m² \n',
    imagens: ['standart-twin.jpg'],
    valorNominal: 898.08,
    valorTotalTaxas: 35.92,
    tarifasPorNoite: [
      {
        dia: '3 Jan',
        valorTarifa: 218.27
      },
      {
        dia: '4 Jan',
        valorTarifa: 218.27
      },
      {
        dia: '5 Jan',
        valorTarifa: 218.27
      },
      {
        dia: '6 Jan',
        valorTarifa: 243.27
      },
    ],
    maximoPessoas: 2
  };


}

</script>

<style>

</style>
