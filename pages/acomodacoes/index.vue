<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <v-parallax src="recepcao-hotel.jpg" class="elevation-24" />
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
          <v-styled-divider /> <br />
          <h1 class="font-weight-light">
            Acomodações
          </h1>

          <div class="font-weight-light">
            <br />

            Você já teve uma experiência desagradável durante uma hospedagem? <br /> <br />
            Algumas experiências e memórias incríveis podem ser afetadas pela falta de qualidade em serviços de hospedaria! <br /> <br />

            O Hotel Dela investe no seu bem-estar. Nosso objetivo é que você aproveite ao máximo sua viagem, sem se preocupar com coisas básicas, mas tão importantes. <br /> <br /> <br />

            Nosso foco é atingir você oferecendo do melhor: <br /> <br />

          </div>

            <br />

            <v-list-item class="flex-row justify-center">
              &nbsp;
              <div class="valores-icons">
                <v-icon size="32" color="#9c8f54">mdi-sleep</v-icon> <br /> <br />
                <span>Repouso</span>
              </div>
              &nbsp;
              <div class="valores-icons">
                <v-icon size="32" color="#9c8f54">mdi-television</v-icon> <br /> <br />
                <span>Conforto</span>
              </div>
              <div class="valores-icons">
                <v-icon size="32" color="#9c8f54">mdi-shield-lock-outline</v-icon> <br /> <br />
                <span>Segurança</span>
              </div>
            </v-list-item>

            <br /> <br />

          <div class="font-weight-light">

            Possuímos acomodações para todos os gostos sem deixar de proporcionar cada um de nossos valores! <br /> <br />

            Você merece uma noite de sono agradável e um ambiente revigorante. <br /> <br />
          </div>

          <br />
          <v-styled-divider />
          <br />

          <h1 class="font-weight-light">
            Tipos de <br /> Acomodações
          </h1>

        </v-col>
      </v-row>
    </v-container>
    <br />
    <br />

    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="6" v-for="(quartoTo, key) in quartosTos" :key="key">
          <v-card-quarto :quarto-to="quartoTo" width="40rem" maxHeight="42rem" />
        </v-col>
      </v-row>
    </v-container>

        <!--        <v-col cols="6">-->
<!--          <v-card class="elevation-15" width="40rem">-->
<!--            <v-img :src="require('static/luxo-casal-1.jpg')" />-->

<!--            <v-card-title>Luxo Casal</v-card-title>-->
<!--            <v-card-subtitle>-->
<!--              <v-row class="conteudo-card-acomodacao" align="center">-->
<!--                <span class="caracteristica-acomodacao-icone">-->
<!--                  <v-icon color="#4d2334">mdi-account-multiple</v-icon>-->
<!--                  <span>Capacidade: 2 pessoas</span>-->
<!--                </span>-->
<!--              </v-row>-->
<!--            </v-card-subtitle>-->

<!--            <v-card-text>-->
<!--              oi-->
<!--            </v-card-text>-->
<!--          </v-card>-->
<!--        </v-col>-->
    <br /> <br />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator';
import VCardQuarto from "~/components/shared/VCardQuarto.vue";
import {Quarto} from "~/model/types/Quarto";
import VStyledDivider from "~/components/shared/VStyledDivider.vue";

@Component({
  components: { VStyledDivider, VCardQuarto },
  head: {
    title: 'Acomodações | Hotel Dela Inn',
    titleTemplate: 'Acomodações | Hotel Dela Inn',
    meta: [
      { hid: 'description', name: 'description', content: 'Acomodações Standart à Quartos de Luxo estão esperando você e sua família em Andradas!' },
      { hid: 'robots', name: 'robots', content: 'index' }
    ]
  }
})
export default class IndexAcomodacoes extends Vue {

  quartosTos: Array<Quarto> = [
    {
      nomeQuarto: 'Standard Twin',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['standart-twin.jpg'],
      maximoPessoas: 2,
      dimensao: '18 m²'
    },
    {
      nomeQuarto: 'Standard Casal',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['standart-casal.jpg'],
      maximoPessoas: 2,
      dimensao: '18 m²'
    },
    {
      nomeQuarto: 'Luxo Twin',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['luxo-twin.jpg'],
      maximoPessoas: 2,
      dimensao: '24 m²'
    },
    {
      nomeQuarto: 'Luxo Casal',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['luxo-casal.jpg'],
      maximoPessoas: 2,
      dimensao: '24 m²'
    },
    {
      nomeQuarto: 'Luxo Triplo Solteiro',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['luxo-triplo-solteiro.jpg'],
      maximoPessoas: 3,
      dimensao: '24 m²'
    },
    {
      nomeQuarto: 'Luxo Triplo Casal',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['luxo-triplo-casal.jpg'],
      maximoPessoas: 3,
      dimensao: '24 m²'
    },
    {
      nomeQuarto: 'Super Luxo Casal',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['super-luxo-casal.jpg'],
      maximoPessoas: 2,
      dimensao: '32 m²'
    },
    {
      nomeQuarto: 'Suíte Master Duplo',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['not-found.png'],
      maximoPessoas: 2,
      dimensao: '42 m²'
    },
    {
      nomeQuarto: 'Suíte Presidencial',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['quarto-suite-presidencial.jpg', 'visao-banheira-suite-presidencial.jpg', 'banheira-suite-presidencial.jpg'],
      maximoPessoas: 2,
      dimensao: '48 m²'
    },
  ];

}

</script>

<style scoped>

.valores-icons:not(:first-child) {
  margin-left: 4rem;
}

.conteudo-card-acomodacao {
  padding: 1rem;
}

.caracteristica-acomodacao-icone:not(:first-child) {
  margin-left: 1rem;
}

</style>
