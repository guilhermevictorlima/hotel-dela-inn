<template>
  <div>
    <br />
    <br />

    <v-container fluid>
      <v-styled-divider /> <br />
      
      <v-row justify="center" align="center">
        <h1 class="font-weight-light text-center">
          Ofertas Especiais
        </h1>
      </v-row>
      <v-row justify="center" align="center">
        <div v-if="imagensOfertas.length === 0">
          <br />
          <br />

          <v-carousel
            :cycle="true"
            :show-arrows="false"
            hide-delimiters
            height="100%"
          >
            <v-carousel-item>
              <div class="text-center" style="height: 34vh; width: 100vw">
                <h2 class="font-weight-light text-center">
                  Não há nenhuma oferta disponível!
                </h2>
              </div>
            </v-carousel-item>
          </v-carousel>

        </div>

        <div v-else>
          <br />
          <v-row justify="center">
            <v-carousel
              :cycle="true"
              :show-arrows="true"
              height="100%"
              style="width: 60%"
            >
              <v-carousel-item v-for="(imagem, key) in imagensOfertas" :key="key">
                <v-img :src="imagem.url" :alt="imagem.alt" />
              </v-carousel-item>
            </v-carousel>
          </v-row>
          <br />
        </div>
      </v-row>
    </v-container>

    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Imagem } from '~/model/types/Imagem';
import VStyledDivider from "~/components/shared/VStyledDivider.vue";

@Component({
  components: {VStyledDivider}
})
export default class IndexOfertas extends Vue {

  imagensOfertas: Array<Imagem> = [
    {
      url: 'oferta-natal.jpeg'
    }
  ];

}

</script>

<style scoped>

</style>
