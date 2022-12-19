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
          <h1 class="font-weight-light">
            Acomodações
          </h1>
        </v-col>
      </v-row>
    </v-container>
    <br />
    <br />

    <v-container>
      <v-row v-for="(quartoTo, key) in quartosTos" :key="key">
        <v-card-quarto :quarto-to="quartoTo" width="1000" />
      </v-row>
    </v-container>
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

  quartosTos: Array<Quarto> = [
    {
      nomeQuarto: 'Luxo Casal',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['luxo-casal-1.jpg', 'luxo-casal-2.jpg'],
      maximoPessoas: 2
    },
    {
      nomeQuarto: 'Luxo Twin',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['luxo-twin.jpg'],
      maximoPessoas: 2
    },
    {
      nomeQuarto: 'Suíte Master Duplo',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['not-found.png'],
      maximoPessoas: 2
    },
    {
      nomeQuarto: 'Suíte Presidencial',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['suite-presidencial.webp', 'visao-banheira-suite-presidencial.jpg', 'banheira-suite-presidencial.jpg'],
      maximoPessoas: 2
    },
    {
      nomeQuarto: 'Luxo Triplo Casal',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['luxo-triplo-casal.jpg'],
      maximoPessoas: 3
    },
    {
      nomeQuarto: 'Luxo Triplo Solteiro',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['luxo-triplo-solteiro.jpg'],
      maximoPessoas: 3
    },
    {
      nomeQuarto: 'Standard Twin',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['standart-twin.jpg'],
      maximoPessoas: 2
    },
    {
      nomeQuarto: 'Standard Casal',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['standart-casal.jpg'],
      maximoPessoas: 2
    },
    {
      nomeQuarto: 'Super Luxo Casal',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['super-luxo-casal.jpg'],
      maximoPessoas: 2
    },
  ];

}

</script>

<style>

</style>
