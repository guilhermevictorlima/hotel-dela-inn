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

        <v-tab-item v-for="fotos in [fotosHotel, fotosQuartos, fotosRestaurante]">
          <v-container class="galeria-fotos-tab">
            <v-imagem-container class="galeria-fotos-tab__foto" v-for="foto in fotos" :key="foto" :src="foto" max-height="12em" />
          </v-container>
          <v-carousel
            class="galeria-fotos-tab--mobile"
            height="100%"
          >
            <v-carousel-item v-for="foto in fotos" :key="foto">
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

  destaquesGalerias: Array<GrupoFotos> = [
    {
      nomeGrupo: 'Não saia de sua rotina',
      descricaoGrupo: 'Aqui você pode aproveitar nossa moderna área fitness para manter sua saúde em dia.',
      icon: 'mdi-dumbbell',
      fotos: ['academia.jpg']
    },
    {
      nomeGrupo: 'Comece o dia com um café da manhã especial',
      descricaoGrupo: 'Aqui no Dela Inn é tudo preparado com muito amor e carinho, especialmente pra você!',
      icon: 'mdi-coffee',
      fotos: ['cafe-da-manha.jpg']
    },
    {
      nomeGrupo: 'Requinte, conforto e segurança',
      descricaoGrupo: 'Aqui no Dela Inn temos diferentes opções de suítes. Mas, em todas elas, proporcionar requinte, conforto e segurança são as nossas prioridades.',
      icon: 'mdi-key-chain-variant',
      fotos: ['visao-banheira-suite-presidencial.jpg']
    },
  ];

  fotosHotel: Array<string> = [
    'corredor-quartos.jpg',
    'recepcao-hotel.jpg',
    'recepcao-hotel-2.jpg',
    'recepcao-hotel-3.jpg',
    'recepcao-hotel-4.jpg',
    'academia.jpg',
    'jardim-dela-inn.jpg',
    'sala-hotel.jpg',
    'hotel-por-fora.jpg'
  ];

  fotosQuartos: Array<string> = [
    'standart-twin.jpg',
    'standart-casal.jpg',
    'luxo-twin.jpg',
    'luxo-casal.jpg',
    'luxo-triplo-solteiro.jpg',
    'luxo-triplo-casal.jpg',
    'super-luxo-casal.jpg',
    'quarto-suite-presidencial.jpg',
    'visao-banheira-suite-presidencial.jpg',
    'banheira-suite-presidencial.jpg'
  ];

  fotosRestaurante: Array<string> = [
    'bar-restaurante.jpg',
    'restaurante-e-bar.jpg',
    'cafe-da-manha.jpg',
    'comida-restaurante.jpg',
    'chopp-dela-inn.jpg',
    'vista-hotel.jpg',
    'vista-hotel-2.jpg'
  ];

  get gruposFotos(): Array<GrupoFotos> {
    return [
      {
        nomeGrupo: 'Hotel',
        fotos: this.fotosHotel
      },
      {
        nomeGrupo: 'Quartos',
        fotos: this.fotosQuartos
      },
      {
        nomeGrupo: 'Restaurante',
        fotos: this.fotosRestaurante
      }
    ];
  }

  head() {
    return {
      title: this.$t('tituloHeader'),
      titleTemplate: this.$t('tituloHeader'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('descricaoHeader') },
        { hid: 'robots', name: 'robots', content: 'index' }
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
