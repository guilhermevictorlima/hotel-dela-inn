<template>
  <header :class="classe">
    <v-toolbar class="default-layout__header elevation-24"
               height="100"
               dark
    >
      <v-container fluid>
        <v-row
          justify="center"
        >
          <div>
            <nuxt-link to="/">
              <v-img :src="require('static/logo-horizontal.svg')" class="default-layout__header__logo" width="350"/>
            </nuxt-link>
          </div>
        </v-row>
      </v-container>
      <v-divider />
    </v-toolbar>
    <v-toolbar
      class="dela-inn-subheader"
      :class="!reverse ? 'reverse-subheader elevation-24' : ''"
      :height="subHeaderHeight"
    >
      <v-container fluid>
        <v-row
          justify="center"
        >
          <v-item-group class="default-layout__header__links" v-if="exibirLinks">
            &nbsp;
            &nbsp;
            <v-item>
              <nuxt-link
                to="/"
                class="router-link"
              >
                Hotel Dela Inn
              </nuxt-link>
            </v-item>
            &nbsp;
            &nbsp;
            <v-item>
              <nuxt-link
                to="/acomodacoes"
                class="router-link"
              >
                Acomodações
              </nuxt-link>
            </v-item>
            &nbsp;
            &nbsp;
            <v-item>
              <nuxt-link
                to="/"
                class="router-link"
              >
                Ofertas Especiais
              </nuxt-link>
            </v-item>
            &nbsp;
            &nbsp;
            <v-item>
              <nuxt-link
                to="/"
                class="router-link"
              >
                Galeria
              </nuxt-link>
            </v-item>
            &nbsp;
            &nbsp;
            <v-item>
              <nuxt-link
                to="/"
                class="router-link"
              >
                Localização
              </nuxt-link>
            </v-item>
          </v-item-group>
        </v-row>
        <v-row justify="center">
          <nav class="nav-social-media text-center">
            <span>
              <a href="https://www.instagram.com/hoteldelainn/" target="_blank">
                  <v-icon color="#dfddde">mdi-instagram</v-icon>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=553537318400&text&type=phone_number&app_absent=0" target="_blank">
                  <v-icon color="#dfddde">mdi-whatsapp</v-icon>
              </a>
              <a href="https://www.facebook.com/hoteldelainn" target="_blank">
                  <v-icon color="#dfddde">mdi-facebook</v-icon>
              </a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=reservas@hoteldelainn.com.br&tf=cm" target="_blank">
                  <v-icon color="#dfddde">mdi-gmail</v-icon>
              </a>
            </span>
            <span v-if="reverse" style="display: flex; flex-direction: column">

              <span class="footer-info">
                <v-icon color="#dfddde">mdi-google-maps</v-icon> &nbsp;
                <span>R. Maj. Bonifácio, 670 - Andradas, MG</span>
              </span>

              <span class="footer-info">
                <v-icon color="#dfddde">mdi-phone</v-icon> &nbsp;
                <a href="tel:3537318400" style="color: white; text-decoration: underline">(35) 3731-8400</a>
              </span>
            </span>
          </nav>
        </v-row>
      </v-container>
    </v-toolbar>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class HeaderHotelDelaInn extends Vue {

  @Prop({ required: false, default: true })
  app!: boolean;

  @Prop({ required: false, default: true })
  header!: boolean;

  @Prop({ required: false, default: true })
  exibirLinks!: boolean;

  @Prop({ required: false, default: false })
  reverse!: boolean;

  @Prop({ required: false, default: '90' })
  subHeaderHeight!: string;

  get classe(): string {
    let classe = '';

    if (this.header) classe = classe.concat('abs-header');
    if (this.reverse) classe = classe.concat(' reverse-header');

    return classe;
  }

}

</script>

<style scoped>

.abs-header {
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
}

.reverse-header {
  display: flex;
  flex-direction: column-reverse;
}

.nav-social-media {
  color: black;
  padding-top: 0.5rem;
}

a {
  text-decoration: none;
}

.router-link {
  color: #ffffff;
  text-decoration: none;
}

.router-link:hover {
  color: #d1bd5e;

  transition: all 0.3s;
}

.default-layout__header {
  background-color: #ffffff !important;

}

.dela-inn-subheader {
  width: 100% !important;
  background-color: #70364e !important;
}

.default-layout__header__links {
  margin-top: 1rem;
}

.default-layout__header__links v-item:not(:first-child) {
  margin-left: 1rem;
}

.footer-info {
  display: flex;
  align-self: center;

  padding-top: 1rem;
  color: white;
}

</style>
