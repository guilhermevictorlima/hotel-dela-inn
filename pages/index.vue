<template>
  <div>
    <div>
      <v-carousel
        :cycle="true"
        hide-delimiter-background
        :show-arrows="false"
        height="100%"
        class="elevation-24"
      >
        <v-carousel-item v-for="(imagem, key) in imagensCarrosselInicial" :key="key">
          <v-parallax :src="imagem.url" :alt="imagem.alt" class="parallax-inicial elevation-24" />
        </v-carousel-item>
      </v-carousel>
      <v-container class="container-card-reserva texto-normal">
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="10"
          >
            <v-card
              outlined
              flat
              style="padding: 1rem; color: white; background-color: #70364e"
              max-width="1000"
              width="60%"
            >
              <h1 class="text-h5 mb-4">
                Hotel Dela Inn
              </h1>
              <h5 class="subheading" style="margin-top: -1rem">
                O Hotel Dela renova o conceito da hotelaria em Andradas - MG!
              </h5>
            </v-card>
            <v-card
              outlined
              elevation="24"
              flat
              max-width="1000"
              width="60%"
              height="380"
              class="card-reserva"
            >
              <v-card-title>Faça sua reserva</v-card-title>

              <v-check-in-check-out-picker />

              <br />
              <v-row align="center">
                <v-col cols="5">
                  <v-quantity-entry-input label="Adultos" />
                </v-col>
                <v-col cols="5">
                  <v-quantity-entry-input label="Crianças" />
                </v-col>
              </v-row>

              <br />
              <br />

              <v-btn
                width="90%"
                outlined
                large
                color="primary"
              >
                Reservar
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div>
      <br />
      <br />

      <v-container class="text-center descricao-central-landing-page">
        <v-styled-divider :h-level="4" />
        <br />

        <h2 class="font-weight-light titulo">Somos Referência em Hospedagem!</h2>

        <div class="font-weight-light texto-normal-ligth">
          <br />
          <br />

          Para você que busca conforto e atendimento de qualidade, o Dela Inn está pronto para atender! <br /> <br />

          Com excelente localização no centro da cidade, o Hotel dispõe de 132 novos apartamentos nas categorias Standard, Luxo e Super Luxo. <br /> <br />

          Nos importamos com seu bem-estar e entretenimento! <br /> <br /> <br />
        </div>

        <v-list-item class="flex-row justify-center texto-normal">
          <v-spacer />
          <div>
            <v-icon size="32" color="#9c8f54">mdi-dumbbell</v-icon> <br /> <br />
            <span>Academia</span>
          </div>
        <v-spacer />
          <div>
            <v-icon size="32" color="#9c8f54">mdi-glass-wine</v-icon> <br /> <br />
            <span>Bar</span>
          </div>
        <v-spacer />
          <div>
            <v-icon size="32" color="#9c8f54">mdi-coffee-maker</v-icon> <br /> <br />
            <span>Café da manhã</span>
          </div>
        <v-spacer />
          <div>
            <v-icon size="32" color="#9c8f54">mdi-wifi</v-icon> <br /> <br />
            <span>Wi-Fi</span>
          </div>
        <v-spacer />
          <div>
            <v-icon size="32" color="#9c8f54">mdi-bed-king</v-icon> <br /> <br />
            <span>Quartos de luxo</span>
          </div>
        <v-spacer />
          <div>
            <v-icon size="32" color="#9c8f54">mdi-car-arrow-left</v-icon> <br /> <br />
            <span>Estacionamento</span>
          </div>
          <v-spacer />
        </v-list-item>

        <br />
        <br />
        <v-styled-divider :h-level="4" />
      </v-container>

      <br />
      <br />
    </div>
    <div class="elevation-24">
      <v-row class="elevation-24">
        <v-parallax src="luxo-triplo-solteiro.jpg" class="parallax-meio-tela elevation-10" />
        <v-sheet elevation="5" width="50%" color="#4d2535">
          &nbsp;
        </v-sheet>
      </v-row>
      <v-row>
        <v-sheet elevation="5" width="50%" color="#592e40">
          &nbsp;
        </v-sheet>
        <v-parallax src="luxo-casal-1.jpg" class="parallax-meio-tela elevation-10" />
      </v-row>
    </div>

    <br />
    <br />
    <br />

    <v-container fluid>
      <v-row align="center" justify="center">
        <h1 class="text-center font-weight-light titulo">Conheça nosso hotel</h1>
        <br />
        <br />
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="6">

          <v-carousel
            v-if="reviews.length"
            :cycle="true"
            :show-arrows="false"
            hide-delimiter-background
            interval="8000"
          >
            <v-carousel-item
              v-for="(review, key) in reviews" :key="key"
            >
              <v-quote :citacao="review.citacao" :autor="review.autor" />
            </v-carousel-item>
          </v-carousel>
          </v-col>
          <v-col cols="5">
            <iframe width="700" height="405" src="https://www.youtube-nocookie.com/embed/menra41-M4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator';
import VCheckInCheckOutPicker from '~/components/shared/VCheckInCheckOutPicker.vue';
import VQuantityEntryInput from '~/components/shared/VQuantityEntryInput.vue';
import VStyledDivider from '~/components/shared/VStyledDivider.vue';
import VQuote from '~/components/shared/VQuote.vue';
import { ReviewCliente } from '~/model/types/ReviewCliente';
import { Imagem } from '~/model/types/Imagem';

@Component({
  layout: 'absolute-header',
  components: { VQuote, VStyledDivider, VQuantityEntryInput, VCheckInCheckOutPicker },
  head: {
    title: 'Hotel Dela Inn',
    titleTemplate: 'Hotel Dela Inn',
    meta: [
      { hid: 'description', name: 'description', content: 'O Hotel Dela renova o conceito da hotelaria em Andradas - MG! Para você que busca conforto e atendimento de qualidade, o Dela Inn está pronto para atender!' },
      { hid: 'robots', name: 'robots', content: 'index, follow' }
    ]
  }
})
export default class Index extends Vue {

  imagensCarrosselInicial: Array<Imagem> = [
    {
      url: 'luxo-casal.jpg'
    },
    {
      url: 'standart-twin.jpg'
    },
    {
      url: 'standart-casal.jpg'
    },
    {
      url: 'vista-hotel.jpg'
    },
  ];

  reviews: Array<ReviewCliente> = [
    {
      citacao: 'Os quartos são ótimos, camas e chuveiros excelentes! Localização perfeita, central. O staff muito receptivo e simpático, chegamos mais cedo e fizeram nosso check-in na hora! O restaurante no 7° andar foi uma grata surpresa também: ótimo atendimento, chopp gelado e música boa. Foi uma estadia perfeita! Parabéns, super recomendo!',
      autor: '- Lucia, via Booking'
    },
    {
      citacao: 'Hotel digno de cinco estrelas, tudo muito limpo, café da manhã farto e funcionários muito prestativos, voltarei mais vezes.',
      autor: '- Ana, via Google'
    },
    {
      citacao: 'Quartos limpos, amplos, modernos e confortáveis. Excelente custo benefício. Todos os funcionários são muito solícitos e educados. o hotel é lindo, moderno e tudo é impecavelmente limpo. Café da manhã bem servido e com bastante variedade. Quarto possui sistema de iluminação indireta bem agradável e a roupa de cama é de ótima qualidade, com um edredom bem confortável para os dias frios.',
      autor: '- Gabriel, via Booking'
    },
    {
      citacao: 'Hotel novo com conceito de Restaurante no último andar 7, dando uma boa vista aos morros ao redor, Restaurante com ótimo preços e final de semana teve show ao vivo com artistas locais super agradável, volume e mix de músicas, otimo experiência!!!',
      autor: '- Elias, via Google'
    },
  ];

}


</script>

<style>

@font-face {
  font-family: 'open-sans';
  src: url("../static/fonts/OpenSans/open-sans-regular.ttf") format('truetype');
}

@font-face {
  font-family: 'open-sans-ligth';
  src: url("../static/fonts/OpenSans/static/OpenSans/OpenSans-Light.ttf") format('truetype');
}

@font-face {
  font-family: 'now';
  src: url("../static/fonts/now/Now-Regular.otf") format('opentype');
}

@font-face {
  font-family: 'moon-time';
  src: url("../static/fonts/MoonTime-Regular/MoonTime-Regular.ttf") format('truetype');
}

@font-face {
  font-family: 'fahkwang';
  src: url("../static/fonts/Fahkwang/Fahkwang-Regular.ttf") format('truetype');
}

.titulo {
  font-family: now;
}

.texto-normal {
  font-family: open-sans;
}

.texto-normal-ligth {
  font-family: open-sans-ligth;
}

.texto-secundario {
  font-family: sans-serif;
}


* {
  --background-main: white;
}

main {
  overflow: hidden;
  background-color: var(--background-main);
}

.parallax-inicial {
  width: 100vw !important;
  height: 100vh !important;
}

.container-card-reserva {
  display: flex;
  position: absolute;
  top: 9%;
  right: -24%;
  color: white;
}

.card-reserva {
  padding: 1rem;
}

.descricao-central-landing-page {
  font-size: 1.1rem;
}

.parallax-meio-tela {
  width: 50vw !important;
}

.quote-icon {
  width: 5rem;
}

</style>
