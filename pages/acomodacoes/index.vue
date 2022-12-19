<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <v-parallax src="corredor-quartos.jpg" height="550" class="elevation-24" />
      </v-flex>
    </v-layout>
    <br />
    <br />
    <br />

    <v-container fluid style="display: flex">
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="text-h4 mb-4">
            Acomodações
          </h1>
          <h4 class="subheading">
            Hotel Dela Inn
          </h4>
        </v-col>
      </v-row>
    </v-container>
    <br />
    <br />

    <v-container>
      <v-row>
        <v-card-quarto :quarto-to="quartoTo" width="100%" />
      </v-row>
    </v-container>


    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator';
import VCardQuarto from "~/components/shared/VCardQuarto.vue";
import {Quarto} from "~/model/types/Quarto";

@Component({
  components: { VCardQuarto }
})
export default class IndexAcomodacoes extends Vue {

  quartoTo: Quarto = {
    nomeQuarto: 'Luxo Casal - 1 ou 2 Pessoas',
    descricao: 'UMA CAMA CASAL \n' +
      'AR CONDICIONADO\n' +
      'FRIGOBAR\n' +
      'TELEVISÃO 40 POLEGADAS\n' +
      'SECADOR DE CABELO\n' +
      'WI-FI\n' +
      'VOLTAGEM 220V\n' +
      'ESTACIONAMENTO \n' +
      'Dimensão: 24 m²',
    imagens: ['luxo-casal-1.jpg', 'luxo-casal-2.jpg'],
    maximoPessoas: 2
  };

}

</script>

<style>

</style>
