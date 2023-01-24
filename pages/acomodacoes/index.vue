<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <v-parallax :src="require('@/static/recepcao-hotel.jpg')" class="elevation-24" />
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
          <h1 class="font-weight-light titulo">
            {{ $t('tituloAcomodacoes') }}
          </h1>

          <div class="font-weight-light texto-normal-ligth">
            <br />

            <p v-for="texto in $t('textosIntroducao')" :key="texto">
              {{ texto }}
              <br />
            </p>
          </div>

            <br />

            <v-list-item class="flex-row justify-center align-center texto-normal">
              <div class="valores-icons">
                <v-icon size="32" color="#9c8f54">mdi-crown</v-icon> <br /> <br />
                <span>{{ $t('iconeRequinte') }}</span>
              </div>
              <div class="valores-icons">
                <v-icon size="32" color="#9c8f54">mdi-television</v-icon> <br /> <br />
                <span>{{ $t('iconeConforto') }}</span>
              </div>
              <div class="valores-icons">
                <v-icon size="32" color="#9c8f54">mdi-shield-lock-outline</v-icon> <br /> <br />
                <span>{{ $t('iconeSeguranca') }}</span>
              </div>
            </v-list-item>

            <br /> <br />

          <div class="font-weight-light texto-normal-ligth">

            {{ $t('textoIntroducaoAposIcones') }}
          </div>

          <br />
          <v-styled-divider />
          <br />

          <h1 class="font-weight-light titulo">
            {{ $t('tituloTiposAcomodacoes') }}
          </h1>
        </v-col>
      </v-row>
    </v-container>
    <br />

    <v-container fluid class="lista-acomodacoes">
      <v-card-quarto v-for="(quartoTo, index) in quartosTos"
                     :key="quartoTo.descricao + index"
                     :quarto-to="quartoTo"
                     width="40rem"
                     maxHeight="40rem"
                     class="lista-acomodacoes__quarto"
      />
    </v-container>
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
  },
  i18n: {
    messages: {
      'pt-BR': {

        tituloAcomodacoes: 'Acomodações',

        textosIntroducao: [
          'Viva uma experiência extraordinária em um dos nossos 135 apartamentos. Temos a suíte master e presidencial e os apartamentos stardard luxo, luxo triplo e super luxo.',
          'Todos os nossos apartamentos possuem ar condicionado, frigobar, cofre, wifi e tv com canais a cabo.',
          'Temos apartamentos PNE (apartamento equipado para atender pessoas com mobilidade reduzida) com acessibilidade para cadeirantes com barra de proteção.',
        ],

        iconeRequinte: 'Requinte',
        iconeConforto: 'Conforto',
        iconeSeguranca: 'Segurança',

        textoIntroducaoAposIcones: 'Nossas acomodações são feitas para te oferecer uma estadia inesquecível, com requinte, conforto e segurança. Tudo isso pelo melhor custo benefício.',

        tituloTiposAcomodacoes: `Tipos de Acomodações`,

        tituloQuartoStandartTwin: 'Standard Twin',
        tituloQuartoStandartCasal: 'Standard Casal',
        tituloQuartoLuxoTwin: 'Luxo Twin',
        tituloQuartoLuxoCasal: 'Luxo Casal',
        tituloQuartoLuxoTriploSolteiro: 'Luxo Triplo Solteiro',
        tituloQuartoLuxoTriploCasal: 'Luxo Triplo Casal',
        tituloQuartoSuperLuxoCasal: 'Super Luxo Casal',
        tituloQuartoSuiteMasterDuplo: 'Suíte Master Duplo',
        tituloQuartoSuitePresidencial: 'Suíte Presidencial',

        descricaoQuartoStandartTwin: 'Aproveite este apartamento com 18m², banheiro, duas camas de solteiro, ar condicionado, frigobar, televisão de 40 polegadas, secador de cabelo, Wi-Fi, voltagem 220V, estacionamento e café da manhã.',
        descricaoQuartoStandartCasal: 'Relaxe com quem você ama neste aconchegante apartamento de 18m², banheiro, uma cama de casal, ar condicionado, frigobar, televisão de 40 polegadas, secador de cabelo, Wi-Fi, voltagem 220V, estacionamento e café da manhã.',
        descricaoQuartoLuxoTwin: 'Este aconchegante apartamento possui 24m², banheiro, duas camas de solteiro, ar condicionado, frigobar, televisão de 40 polegadas com diversos canais, secador de cabelo, Wi-Fi, voltagem 220V, estacionamento e café da manhã.',
        descricaoQuartoLuxoCasal: 'Aproveite este apartamento confortável e aconchegante com seu amor. Ele possui 24m², banheiro, uma cama de casal, ar condicionado, frigobar, televisão de 40 polegadas com diversos canais, secador de cabelo, Wi-Fi, voltagem 220V, estacionamento e café da manhã.',
        descricaoQuartoLuxoTriploSolteiro: 'Nosso apartamento luxo triplo solteiro, é ideal para você que vem para se hospedar com seus amigos e familiares. Ele possui 24m², banheiro, três camas de solteiro, ar condicionado, frigobar, televisão de 40 polegadas com diversos canais, secador de cabelo, Wi-Fi, voltagem 220V, estacionamento e café da manhã.',
        descricaoQuartoLuxoTriploCasal: 'Você vai vir com sua família? Este apartamento tem dimensão de 24m², um banheiro, uma cama de casal e uma de solteiro, além de ar condicionado, frigobar, televisão de 40 polegadas com diversos canais, secador de cabelo, Wi-Fi, voltagem 220V, estacionamento e café da manhã.',
        descricaoQuartoSuperLuxoCasal: 'Para você que vem com seu amor e procura um apartamento mais espaçoso, este possui 32m², banheiro, uma cama de casal, ar condicionado, frigobar, televisão de 40 polegadas com diversos canais, secador de cabelo, Wi-Fi, voltagem 220V, estacionamento e um delicioso café da manhã.',
        descricaoQuartoSuiteMasterDuplo: 'Relaxe com quem você ama nesta suíte de 42m², banheiro, uma cama de casal, ar condicionado, frigobar, televisão de 50 polegadas com diversos canais, secador de cabelo, Wi-Fi, voltagem 220V, estacionamento e um café da manhã completo e delicioso.',
        descricaoQuartoSuitePresidencial: 'Esta elegante e espaçosa suíte, possui 48m², oferece uma vista privilegiada da cidade, uma cama de casal, banheira, ar condicionado, frigobar, televisão de 50 polegadas com diversos canais, secador de cabelo, Wi-Fi, voltagem 220V, estacionamento e café da manhã completo. Você vai se apaixonar!',

        dimensao18m: '18m²',
        dimensao24m: '24m²',
        dimensao32m: '32m²',
        dimensao42m: '42m²',
        dimensao48m: '48m²',
      },
      en: {

        tituloAcomodacoes: 'Accommodations',

        textosIntroducao: [
          'Live an extraordinary experience in one of our 135 apartments. We have the master and presidential suite and the stardard deluxe, triple deluxe and super deluxe rooms.',
          'All our apartments have air conditioning, minibar, safe, wifi and cable TV.',
          'Our apartments are equipped to serve people with reduced mobility, with accessibility for wheelchair users with a protection bar.'
        ],

        iconeRequinte: 'Refinement',
        iconeConforto: 'Comfort',
        iconeSeguranca: 'Safety',

        textoIntroducaoAposIcones: 'Our accommodations are designed to offer you an unforgettable stay, with refinement, comfort and safety. All this for the best cost benefit.',

        tituloTiposAcomodacoes: 'Accommodation Types',

        tituloQuartoStandartTwin: 'Twin\'s Standart',
        tituloQuartoStandartCasal: 'Couple\'s Standart',
        tituloQuartoLuxoTwin: 'Twin\'s Luxury',
        tituloQuartoLuxoCasal: 'Couple\'s Luxury',
        tituloQuartoLuxoTriploSolteiro: 'Single\'s Triple Luxury',
        tituloQuartoLuxoTriploCasal: 'Couple\'s Triple Luxury',
        tituloQuartoSuperLuxoCasal: 'Couple\'s Super Luxury',
        tituloQuartoSuiteMasterDuplo: 'Double Master Suite',
        tituloQuartoSuitePresidencial: 'Presidential Suite',

        descricaoQuartoStandartTwin: 'Enjoy this 193.7ft² apartment, bathroom, two single beds, air conditioning, minibar, 40-inch TV, hairdryer, Wi-Fi, 220V voltage, parking and breakfast.',
        descricaoQuartoStandartCasal: 'Relax with your loved ones in this cozy 193.7ft² apartment, bathroom, one double bed, air conditioning, minibar, 40-inch TV, hairdryer, Wi-Fi, 220V voltage, parking and breakfast.',
        descricaoQuartoLuxoTwin: 'This beautiful and comfortable apartment has 258.3ft², bathroom, two single beds, air conditioning, minibar, 40-inch TV with several channels, hairdryer, Wi-Fi, 220V voltage, parking and breakfast.',
        descricaoQuartoLuxoCasal: 'Enjoy this comfortable and cozy apartment with your love. It has 258.3ft², bathroom, a double bed, air conditioning, minibar, 40-inch television with several channels, hairdryer, Wi-Fi, 220V voltage, parking and breakfast.',
        descricaoQuartoLuxoTriploSolteiro: 'Our single\'s triple luxury apartment is ideal for you who come to stay with your friends and family. It has 258.3ft², bathroom, three single beds, air conditioning, minibar, 40-inch television with several channels, hairdryer, Wi-Fi, 220V voltage, parking and breakfast.',
        descricaoQuartoLuxoTriploCasal: 'Will you come with your family? This apartment measures 258.3ft², bathroom, one double bed and one single bed, air conditioning, minibar, 40-inch TV with several channels, hairdryer, Wi-Fi, 220V voltage, parking and breakfast',
        descricaoQuartoSuperLuxoCasal: 'For you who come with your loved one and are looking for a more spacious apartment, this one has 344.4ft², bathroom, a double bed, air conditioning, minibar, 40-inch TV with several channels, hairdryer, Wi-Fi, 220V voltage, parking and a delicious breakfast.',
        descricaoQuartoSuiteMasterDuplo: 'Relax with your loved ones in this 452ft² suite, bathroom, a double bed, air conditioning, minibar, 50-inch TV with several channels, hairdryer, Wi-Fi, 220V voltage, parking and a full and delicious breakfast.',
        descricaoQuartoSuitePresidencial: 'This elegant and spacious suite, measuring 516.6ft², offers a privileged view of the city, a double bed, bathtub, air conditioning, minibar, 50-inch TV with several channels, hairdryer, Wi-Fi, 220V voltage, parking and breakfast. You will fall in love!',

        dimensao18m: '18m² / 193.7ft²',
        dimensao24m: '24m² / 258.3ft²',
        dimensao32m: '32m² / 344.4ft²',
        dimensao42m: '42m² / 452ft²',
        dimensao48m: '48m² / 516.6ft²',
      }
    }
  }
})
export default class IndexAcomodacoes extends Vue {

  quartosTos: Array<Quarto> = [
    {
      nomeQuarto: this.$t('tituloQuartoStandartTwin').toString(),
      descricao: this.$t('descricaoQuartoStandartTwin').toString(),
      imagens: ['standart-twin.jpg'],
      maximoPessoas: 2,
      dimensao: this.$t('dimensao18m').toString()
    },
    {
      nomeQuarto: this.$t('tituloQuartoStandartCasal').toString(),
      descricao: this.$t('descricaoQuartoStandartCasal').toString(),
      imagens: ['standart-casal.jpg'],
      maximoPessoas: 2,
      dimensao: this.$t('dimensao18m').toString()
    },
    {
      nomeQuarto: this.$t('tituloQuartoLuxoTwin').toString(),
      descricao: this.$t('descricaoQuartoLuxoTwin').toString(),
      imagens: ['luxo-twin.jpg'],
      maximoPessoas: 2,
      dimensao: this.$t('dimensao24m').toString()
    },
    {
      nomeQuarto: this.$t('tituloQuartoLuxoCasal').toString(),
      descricao: this.$t('descricaoQuartoLuxoCasal').toString(),
      imagens: ['luxo-casal.jpg'],
      maximoPessoas: 2,
      dimensao: this.$t('dimensao24m').toString()
    },
    {
      nomeQuarto: this.$t('tituloQuartoLuxoTriploSolteiro').toString(),
      descricao: this.$t('descricaoQuartoLuxoTriploSolteiro').toString(),
      imagens: ['luxo-triplo-solteiro.jpg'],
      maximoPessoas: 3,
      dimensao: this.$t('dimensao24m').toString()
    },
    {
      nomeQuarto: this.$t('tituloQuartoLuxoTriploCasal').toString(),
      descricao: this.$t('descricaoQuartoLuxoTriploCasal').toString(),
      imagens: ['luxo-triplo-casal.jpg'],
      maximoPessoas: 3,
      dimensao: this.$t('dimensao24m').toString()
    },
    {
      nomeQuarto: this.$t('tituloQuartoSuperLuxoCasal').toString(),
      descricao: this.$t('descricaoQuartoSuperLuxoCasal').toString(),
      imagens: ['super-luxo-casal.jpg'],
      maximoPessoas: 2,
      dimensao: this.$t('dimensao32m').toString()
    },
    {
      nomeQuarto: this.$t('tituloQuartoSuiteMasterDuplo').toString(),
      descricao: this.$t('descricaoQuartoSuiteMasterDuplo').toString(),
      imagens: ['quarto-suite-presidencial.jpg'],
      maximoPessoas: 2,
      dimensao: this.$t('dimensao42m').toString()
    },
    {
      nomeQuarto: this.$t('tituloQuartoSuitePresidencial').toString(),
      descricao: this.$t('descricaoQuartoSuitePresidencial').toString(),
      imagens: ['visao-banheira-suite-presidencial.jpg', 'banheira-suite-presidencial.jpg'],
      maximoPessoas: 2,
      dimensao: this.$t('dimensao48m').toString()
    },
  ];

}

</script>

<style scoped>

.valores-icons:not(:first-child) {
  margin-left: 4rem;
}

.lista-acomodacoes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
 }

.lista-acomodacoes__quarto {
  margin: 1rem;
}


</style>
