<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <v-parallax :src="require('@/static/vista-hotel.jpg')" class="elevation-24" />
      </v-flex>
    </v-layout>
    <br />
    <br />

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
          {{ $t('tituloGaleria') }}
        </h1>
      </v-col>
    </v-row>
    <br />

    <v-container fluid>
      <v-tabs centered mobile-breakpoint="3">
        <v-tab>{{ $t('tabHotel') }}</v-tab>
        <v-tab>{{ $t('tabQuartos') }}</v-tab>
        <v-tab>{{ $t('tabRestaurante') }}</v-tab>

        <v-tab-item v-for="fotos in [fotosHotel, fotosQuartos, fotosRestaurante]" eager>
          <v-container class="galeria-fotos-tab">
            <v-imagem-container class="galeria-fotos-tab__foto" v-for="foto in fotos" :key="foto" :src="foto" max-height="12em" />
          </v-container>
          <v-carousel
            class="galeria-fotos-tab--mobile"
            height="100%"
            hide-delimiters
          >
            <v-carousel-item v-for="foto in fotos" :key="foto" eager>
              <v-imagem-container class="galeria-fotos-tab__foto" :src="foto" />
            </v-carousel-item>
          </v-carousel>
        </v-tab-item>
      </v-tabs>
    </v-container>

    <br />
    <br />
    <br />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import VStyledDivider from '~/components/shared/VStyledDivider.vue';
import VImagemContainer from '~/components/shared/VImagemContainer.vue';
import { GrupoFotos } from '~/model/types/GrupoFotos';

@Component({
  components: { VImagemContainer, VStyledDivider },
  i18n: {
    messages: {
      'pt-BR': {
        tituloHeader: 'Galeria | Hotel Dela Inn',
        descricaoHeader: 'Veja fotos do nosso hotel!',

        tituloGaleria: 'Galeria',

        tabHotel: 'Hotel',
        tabQuartos: 'Quartos',
        tabRestaurante: 'Restaurante',
      },
      en: {
        tituloHeader: 'Gallery | Dela Inn Hotel',
        descricaoHeader: 'See photos of our hotel!',

        tituloGaleria: 'Gallery',

        tabHotel: 'Hotel',
        tabQuartos: 'Rooms',
        tabRestaurante: 'Restaurant',
      }
    }
  }
})
export default class GaleriaIndex extends Vue {

  fotosHotel: Array<string> = [
    'corredor-quartos.jpg',
    'recepcao-4.jpg',
    'recepcao-2.jpg',
    'recepcao-3.jpg',
    'recepcao-5.jpg',
    'recepcao-6.jpg',
    'recepcao-7.jpg',
    'academia-1.jpg',
    'academia-2.jpg',
    'academia-5.jpg',
    'academia-6.jpg',
    'academia-7.jpg',
    'jardim-dela-inn.jpg',
    'sala-1.jpg',
    'sala-2.jpg',
    'sala-hotel.jpg',
    'hotel-por-fora.jpg'
  ];

  fotosQuartos: Array<string> = [
    'standart-twin-1.jpg',
    'standart-twin-2.jpg',
    'standart-twin-3.jpg',
    'standart-casal-1.jpg',
    'standart-casal-2.jpg',
    'standart-casal-3.jpg',
    'standart-casal-4.jpg',
    'luxo-twin-1.jpg',
    'luxo-twin-2.jpg',
    'luxo-casal-1.jpg',
    'luxo-casal-2.jpg',
    'luxo-casal-3.jpg',
    'luxo-triplo-solteiro-1.jpg',
    'luxo-triplo-solteiro-2.jpg',
    'luxo-triplo-solteiro-3.jpg',
    'luxo-triplo-casal-1.jpg',
    'luxo-triplo-casal-2.jpg',
    'luxo-triplo-casal-3.jpg',
    'super-luxo-casal-1.jpg',
    'super-luxo-casal-2.jpg',
    'suite-master-duplo-1.jpg',
    'suite-master-duplo-2.jpg',
    'suite-master-duplo-3.jpg',
    'suite-master-duplo-4.jpg',
    'suite-master-duplo-5.jpg',
    'suite-master-duplo-6.jpg',
    'visao-banheira-suite-presidencial.jpg',
    'banheira-suite-presidencial.jpg',
    'interior-quarto-1.jpg',
    'interior-quarto-2.jpg',
    'interior-quarto-3.jpg',
    'interior-quarto-4.jpg',
    'interior-quarto-5.jpg',
    'interior-quarto-6.jpg',
    'interior-quarto-7.jpg',
    'interior-quarto-8.jpg',
    'interior-quarto-9.jpg',
    'interior-quarto-10.jpg',
    'interior-suite-master-1.jpg',
    'interior-suite-master-2.jpg',
    'entrada-suite-master.jpg',
    'suite-presidencial-7.jpg',
  ];

  fotosRestaurante: Array<string> = [
    'bar-restaurante.jpg',
    'restaurante-e-bar.jpg',
    'cafe-da-manha.jpg',
    'comida-restaurante-2.jpg',
    'comida-restaurante-3.jpg',
    'comida-restaurante-4.jpg',
    'comida-restaurante-5.jpg',
    'comida-restaurante-6.jpg',
    'comida-restaurante-7.jpg',
    'comida-restaurante-8.jpg',
    'comida-restaurante-9.jpg',
    'comida-restaurante-10.jpg',
    'comida-restaurante-11.jpg',
    'comida-restaurante-12.jpg',
    'comida-restaurante-13.jpg',
    'comida-restaurante-14.jpg',
    'comida-restaurante-1.jpg',
    'comida-restaurante-15.jpg',
    'comida-restaurante-16.jpg',
    'comida-restaurante-17.jpg',
    'comida-restaurante-18.jpg',
    'comida-restaurante-19.jpg',
    'comida-restaurante-20.jpg',
    'chopp-dela-inn.jpg',
    'vista-hotel.jpg',
    'vista-hotel-2.jpg'
  ];

  head() {
    return {
      title: this.$t('tituloHeader'),
      titleTemplate: this.$t('tituloHeader'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('descricaoHeader') }
      ]
    };
  }



}

</script>

<style scoped>

@media (max-width: 820px) {

  .galeria-fotos-tab--mobile {
    display: inline-block !important;
    margin-top: 1rem;
  }

  .galeria-fotos-tab {
    display: none !important;
  }

  .galeria-fotos-tab__foto {
    width: 100% !important;
    margin: 0 !important;
  }

}


.galeria-fotos-tab {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
}

.galeria-fotos-tab--mobile {
  display: none;
}

.galeria-fotos-tab__foto {
  margin: 0.5rem;
  width: 30%;
}

</style>
