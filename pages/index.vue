<template>
  <div>
    <div>
      <v-carousel
        :cycle="true"
        :hide-delimiter-background="!isMobile()"
        :show-arrows="false"
        height="100%"
        class="elevation-24"
      >
        <v-carousel-item v-for="(imagem, key) in imagensCarrosselInicial" :key="key">
          <v-parallax :src="imagem.url" :alt="imagem.alt" class="parallax-inicial elevation-24" />
        </v-carousel-item>
      </v-carousel>
    </div>

    <div>
      <br />
      <br />

      <v-container class="text-center descricao-central-landing-page">
        <v-styled-divider :h-level="4" />
        <br />

        <h2 class="font-weight-light titulo">{{ this.$t('tituloLandingPage') }}</h2>

        <div class="font-weight-light texto-normal-ligth">
          <br />
          <br />

          <p v-for="(texto, index) in $t('textoLandingPage')" :key="index">
            {{ texto }}
            <br />
          </p>
        </div>

        <v-list-item class="lista-icones-landing-page texto-normal">
          <div v-for="(icon, index) in iconsLandingPage" :key="index">
            <div class="icon-landing-page">
              <v-icon size="32" color="#9c8f54">{{ icon.url }}</v-icon> <br /> <br />
              <span>{{ icon.alt }}</span>
            </div>
          </div>
        </v-list-item>

        <br />
        <br />
        <v-styled-divider :h-level="4" />
      </v-container>

      <br />
    </div>

    <div class="container-quartos-landing-page">
      <v-container fluid class="lista-quartos-landing-page">
          <v-card-quarto v-for="(quarto, key) in quartosTos" :key="key"
                         class="lista-quartos-landing-page__quarto"
                         :quarto-to="quarto"
                         width="25rem"
                         :simplificado="true"
          />
      </v-container>

      <v-container>
        <v-carousel
          class="slide-quartos-landing-page"
          :cycle="true"
          :show-arrows="false"
          hide-delimiters
          hide-delimiter-background
          height="420"
          interval="3000"
        >
          <v-carousel-item v-for="(quarto, key) in quartosTos" :key="key">
            <v-card-quarto :quarto-to="quarto" width="25rem" :simplificado="true" />
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </div>

    <v-styled-divider :h-level="4" />

    <br />

    <v-container fluid>
      <h1 class="text-center font-weight-light titulo">{{ $t('tituloConhecaNossoHotel') }}</h1>
      <br />

      <div class="text-center texto-normal font-weight-light">
      <p>{{ $t('introducaoConhecaNossoHotel') }}</p>
        <br />

        <p v-for="(texto, index) in $t('listaTextosConhecendoHotel')" :key="index">
          {{ texto }}
          <br />
        </p>

        <br />
        <p v-for="(texto, index) in $t('textoChamadaConhecendoHotel')" :key="index">
          {{ texto }}
          <br />
        </p>
      </div>
      <v-row class="row-reviews-video" align="center" justify="center">
        <v-col cols="6">
          <v-carousel
            v-if="reviews.length"
            :cycle="true"
            :show-arrows="false"
            hide-delimiters
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

      <v-container class="row-reviews-video__mobile" fluid>
        <v-row align="center" justify="center">
          <v-carousel
            v-if="reviews.length"
            :cycle="true"
            :show-arrows="false"
            hide-delimiters
            hide-delimiter-background
            interval="8000"
            height="100%"
          >
            <v-carousel-item
              v-for="(review, key) in reviews" :key="key"
            >
              <v-quote :citacao="review.citacao" :autor="review.autor" />
            </v-carousel-item>
          </v-carousel>
        </v-row>
        <br />
        <br />
        <v-row align="center" justify="center" class="video-hotel-mobile">
          <iframe width="700" height="405" src="https://www.youtube-nocookie.com/embed/menra41-M4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-row>
      </v-container>

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
import VCardQuarto from '~/components/shared/VCardQuarto.vue';
import { Quarto } from '~/model/types/Quarto';
import BrowserService from '~/services/BrowserService';

@Component({
  layout: 'absolute-header',
  components: { VCardQuarto, VQuote, VStyledDivider, VQuantityEntryInput, VCheckInCheckOutPicker },
  i18n: {
    messages: {
      'pt-BR': {
        metaTitle: 'Hotel Dela Inn',
        metaDescription: 'O Hotel Dela renova o conceito da hotelaria em Andradas - MG! Para você que busca conforto e atendimento de qualidade, o Dela Inn está pronto para atender!',

        tituloLandingPage: 'Seja bem-vindo ao hotel Dela Inn!',
        textoLandingPage: [
          'Você merece todo o conforto e atendimento de qualidade pelo melhor custo benefício.',
          'Com localização privilegiada, bem no centro de Andradas, o Dela Inn dispõe de 135 apartamentos nas categorias suíte máster, presidencial e os apartamentos stardard luxo, luxo triplo e super luxo que irão te proporcionar uma experiência única e inesquecível.',
          'Tudo o que você precisa para uma estadia perfeita por um preço que cabe no seu bolso.'
        ],

        academiaIconTitle: 'Academia',
        barIconTitle: 'Bar',
        cafeDaManhaIconTitle: 'Café da manhã',
        wifiIconTitle: 'Wi-Fi',
        quartosLuxoIconTitle: 'Quartos de luxo',
        estacionamentoIconTitle: 'Estacionamento',

        quartoLuxoTriploSolteiro: 'Luxo Triplo Solteiro',
        quartoLuxoTriploCasal: 'Luxo Triplo Casal',
        quartoSuperLuxoCasal: 'Super Luxo Casal',

        tituloConhecaNossoHotel: 'Conheça nosso hotel',
        introducaoConhecaNossoHotel: 'O Dela Inn é a melhor opção para você em Andradas. Idealizado para oferecer uma estadia prazerosa com experiências inesquecíveis.',

        listaTextosConhecendoHotel: [
          'São 7 andares com apartamentos aconchegantes e confortáveis. No sétimo andar, temos a suíte master e presidencial e nos demais andares, os apartamentos stardard luxo, luxo triplo e super luxo.',
          'Nosso hotel oferece academia para você manter a sua rotina de exercícios enquanto viaja.',
          'Temos opção de restaurante e uma choperia para você desfrutar de momentos agradáveis com sua família e amigos.',
          'Nossa recepção trabalha 24 horas para te atender com toda atenção e profissionalismo que você merece.',
          'O Dela Inn também dispõe de dois estacionamentos: interno e externo.',
        ],

        textoChamadaConhecendoHotel: [
          'Viu porque o hotel Dela Inn é a sua melhor opção em Andradas?',
          'Venha se hospedar com a gente! Estamos esperado por você!'
        ],

        review1: 'Os quartos são ótimos, camas e chuveiros excelentes! Localização perfeita, central. O staff muito receptivo e simpático, chegamos mais cedo e fizeram nosso check-in na hora! O restaurante no 7° andar foi uma grata surpresa também: ótimo atendimento, chopp gelado e música boa. Foi uma estadia perfeita! Parabéns, super recomendo!',
        autor1: '- Lucia, via Booking',
        review2: 'Hotel digno de cinco estrelas, tudo muito limpo, café da manhã farto e funcionários muito prestativos, voltarei mais vezes.',
        autor2: '- Ana, via Google',
        review3: 'Quartos limpos, amplos, modernos e confortáveis. Excelente custo benefício. Todos os funcionários são muito solícitos e educados. o hotel é lindo, moderno e tudo é impecavelmente limpo. Café da manhã bem servido e com bastante variedade. Quarto possui sistema de iluminação indireta bem agradável e a roupa de cama é de ótima qualidade, com um edredom bem confortável para os dias frios.',
        autor3: '- Gabriel, via Booking',
        review4: 'Hotel novo com conceito de Restaurante no último andar 7, dando uma boa vista aos morros ao redor, Restaurante com ótimo preços e final de semana teve show ao vivo com artistas locais super agradável, volume e mix de músicas, otimo experiência!!!',
        autor4: '- Elias, via Google',
      },
      en: {
        metaTitle: 'Dela Inn Hotel',
        metaDescription: 'Dela Inn Hotel renews the concept of hospitality in Andradas - MG! For those looking for comfort and quality service, the Dela Inn is ready to serve you!',

        tituloLandingPage: 'Welcome to the Dela Inn!',
        textoLandingPage: [
          'You deserve all the comfort and quality service at the best cost benefit.',
          'With a privileged location in the downtown Andradas, Dela Inn has 135 apartments in the master suite, presidential suite and standard luxury, triple luxury and super luxury that will provide you with a unique and unforgettable experience.',
          'Everything you need for a perfect stay at an affordable price.'
        ],

        academiaIconTitle: 'Gym',
        barIconTitle: 'Pub',
        cafeDaManhaIconTitle: 'Breakfast',
        wifiIconTitle: 'Wi-Fi',
        quartosLuxoIconTitle: 'Luxury rooms',
        estacionamentoIconTitle: 'Parking',

        quartoLuxoTriploSolteiro: 'Single\'s Triple Luxury',
        quartoLuxoTriploCasal: 'Couple\'s Triple Luxury',
        quartoSuperLuxoCasal: 'Couple\'s Super Luxury',

        tituloConhecaNossoHotel: 'Discover Dela Inn',
        introducaoConhecaNossoHotel: 'Dela Inn is the best option for you in Andradas. Idealized to offer a pleasant stay with unforgettable experiences.',

        listaTextosConhecendoHotel: [
          'There are 7 floors with cozy and comfortable apartments. On the seventh floor, we have the master and presidential suite and on the other floors, the stardard luxury, triple luxury and super luxury apartments.',
          'Our hotel offers a gym for you to maintain your exercise routine during your trip.',
          'We have a restaurant and a beer garden where you can enjoy pleasant moments with your family and friends.',
          'Our reception works 24 hours a day to serve you with all the attention and professionalism you deserve.',
          'The Dela Inn also has two parking lots: internal and external.'
        ],

        textoChamadaConhecendoHotel: [
          'Did you see why the Dela Inn hotel is your best option in Andradas?',
          'Come stay with us! We\'re waiting for you!'
        ],

        review1: 'Rooms are great, beds and showers are excellent! Perfect location in downtown area. The staff were very welcoming and friendly, we arrived early and they checked-in us on time! The restaurant on the 7th floor was also a pleasant surprise: great service, cold draft beer and good music. It was a perfect stay! Congratulations, highly recommend!',
        autor1: '- Lucia, from Booking review',
        review2: 'Hotel worthy of five stars, everything very clean, hearty breakfast and very helpful staff, I will be back more often.',
        autor2: '- Ana, from Google review',
        review3: 'Clean, spacious, modern and comfortable rooms. Excellent cost benefit. All employees are very helpful and polite. The hotel is beautiful, modern and everything is spotlessly clean. Breakfast well served and with a lot of variety. Room has a very pleasant indirect lighting and the bedding is of great quality, with a very comfortable duvet for cold days.',
        autor3: '- Gabriel, from Booking review',
        review4: 'New hotel with the concept of restaurant on the 7th floor, giving a good view of the hills around. Restaurant with great prices. At weekend there was a live show with local artists, very nice, volume and mix of songs, great experience!!!',
        autor4: '- Elias, from Google review',
      }
    }
  }
})
export default class Index extends Vue {

  quartosTos: Array<Quarto> = [
    {
      nomeQuarto: this.$t('quartoLuxoTriploSolteiro').toString(),
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['luxo-triplo-solteiro.jpg'],
      maximoPessoas: 3,
      dimensao: '24 m²'
    },
    {
      nomeQuarto: this.$t('quartoLuxoTriploCasal').toString(),
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['luxo-triplo-casal.jpg'],
      maximoPessoas: 3,
      dimensao: '24 m²'
    },
    {
      nomeQuarto: this.$t('quartoSuperLuxoCasal').toString(),
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Consequat mauris nunc congue nisi. Aliquam nulla facilisi cras fermentum. Volutpat commodo sed egestas egestas fringilla phasellus.',
      imagens: ['super-luxo-casal.jpg'],
      maximoPessoas: 2,
      dimensao: '32 m²'
    }
  ];

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
      citacao: this.$t('review1').toString(),
      autor: this.$t('autor1').toString(),
    },
    {
      citacao: this.$t('review2').toString(),
      autor: this.$t('autor2').toString(),
    },
    {
      citacao: this.$t('review3').toString(),
      autor: this.$t('autor3').toString(),
    },
    {
      citacao: this.$t('review4').toString(),
      autor: this.$t('autor4').toString(),
    },
  ];

  get iconsLandingPage(): Array<Imagem> {
    return [
      {
        url: 'mdi-dumbbell',
        alt: this.$t('academiaIconTitle').toString()
      },
      {
        url: 'mdi-glass-wine',
        alt: this.$t('barIconTitle').toString()
      },
      {
        url: 'mdi-coffee-maker',
        alt: this.$t('cafeDaManhaIconTitle').toString()
      },
      {
        url: 'mdi-wifi',
        alt: this.$t('wifiIconTitle').toString()
      },
      {
        url: 'mdi-bed-king',
        alt: this.$t('quartosLuxoIconTitle').toString()
      },
      {
        url: 'mdi-car-arrow-left',
        alt: this.$t('estacionamentoIconTitle').toString()
      },
    ];
  }

  isMobile(): boolean {
    return BrowserService.isMobile();
  }

  head() {
    return {
      title: this.$t('metaTitle'),
      titleTemplate: this.$t('metaTitle'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('metaDescription') },
        { hid: 'robots', name: 'robots', content: 'index, follow' }
      ]
    };
  }

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

@media (max-width: 480px) {

  .lista-icones-landing-page {
    margin-top: 2rem !important;
    flex-wrap: wrap;
  }

  .lista-icones-landing-page div {
    flex-basis: 33%;
  }

  .icon-landing-page {
    margin: 1rem 0.6rem !important;
  }

  .lista-quartos-landing-page {
    display: none !important;
  }

  .container-quartos-landing-page {
    margin-bottom: 2rem !important;
  }

  .slide-quartos-landing-page {
    display: inline-block !important;
  }

  .row-reviews-video {
    display: none;
  }

  .row-reviews-video__mobile {
    display: inline-block !important;
  }

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

.descricao-central-landing-page {
  font-size: 1.1rem;
}

.lista-icones-landing-page {
  margin-top: 4rem;

  display: flex;
  justify-content: center;
}

.icon-landing-page {
  margin: 0 2rem;
}

.lista-quartos-landing-page {
  display: flex;
  justify-content: center;
}

.lista-quartos-landing-page__quarto {
  margin: 1rem
}

.container-quartos-landing-page {
  margin-bottom: 4rem;
}

.slide-quartos-landing-page {
  display: none;
}

.row-reviews-video__mobile {
  display: none;
}

.video-hotel-mobile {
  padding: 0.5rem;
}


</style>
