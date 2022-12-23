<template>
  <v-container fluid>
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
          Galeria
        </h1>
      </v-col>
    </v-row>
    <br />
    <br />

    <div style="width: 100%; margin: auto">
      <v-row
        v-for="(destaque, key) in destaquesGalerias"
        align="center"
        justify="center"
        class="mb-6"
        :class="key % 2 !== 0 ? 'flex-row-reverse' : ''"
      >
        <v-col
          cols="6"
          class="text-center"
        >
          <v-imagem-container :src="destaque.fotos" width="45em" max-height="25em" style="margin: auto" />
        </v-col>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <v-col
          cols="5"
          :class="key % 2 !== 0 ? 'text-right' : ''"
        >
          <h2 class="titulo">
            {{ destaque.nomeGrupo }}
            &nbsp;
            <v-icon color="primary">{{ destaque.icon }}</v-icon>
          </h2>
          <br />
          <h3 class="texto-normal font-weight-regular">{{ destaque.descricaoGrupo }}</h3>
        </v-col>
      </v-row>
    </div>



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
        <h2 class="font-weight-light titulo">
          Veja mais fotos do Hotel
        </h2>
      </v-col>
    </v-row>

    <br />
    <br />

    <v-row
      align="center"
      justify="center"
    >
      <v-col
        v-for="(grupoFotos, key) in gruposFotos"
        :key="key"
        class="text-center texto-normal"
        cols="3"
      >
        <div>
          <v-card color="#70364e">
            <v-card-title>
              <v-row
                align="center"
                justify="center"
              >
                <span class="font-weight-regular white--text">{{ grupoFotos.nomeGrupo }}</span>
              </v-row>
            </v-card-title>
            <v-imagem-container :src="grupoFotos.fotos" max-height="15rem" :hide-delimiters="true" />
          </v-card>
        </div>
      </v-col>
    </v-row>

    <br />
    <br />
    <br />
    <v-styled-divider />
    <br />
    <br />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import VStyledDivider from "~/components/shared/VStyledDivider.vue";
import VImagemContainer from "~/components/shared/VImagemContainer.vue";
import {GrupoFotos} from "~/model/types/GrupoFotos";

@Component({
  components: { VImagemContainer, VStyledDivider },
  head: {
    title: 'Galeria | Hotel Dela Inn',
    titleTemplate: 'Galeria | Hotel Dela Inn',
    meta: [
      { hid: 'description', name: 'description', content: 'O Hotel Dela Inn' },
      { hid: 'robots', name: 'robots', content: 'index' }
    ]
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



}

</script>

<style scoped>

</style>
