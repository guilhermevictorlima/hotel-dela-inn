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
        <h1 class="font-weight-light">
          Galeria
        </h1>
      </v-col>
    </v-row>
    <br />

    <v-row
      align="center"
      justify="center"
    >
      <v-col
        v-for="(grupoFotos, key) in gruposFotos"
        :key="key"
        class="text-center"
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

//TODO adicionar metatags
@Component({
  components: {VImagemContainer, VStyledDivider}
})
export default class GaleriaIndex extends Vue {

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
    'not-found.png',
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
