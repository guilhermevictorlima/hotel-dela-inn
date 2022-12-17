<template>
  <header class="abs-header">
    <v-toolbar class="default-layout__header elevation-24"
               height="120"
               dark
    >
      <v-container fluid>
        <v-row
          justify="center"
        >
          <div>
            <nuxt-link to="/">
              <v-img :src="require('static/logo-horizontal.svg')" class="default-layout__header__logo" width="250"/>
            </nuxt-link>
          </div>
        </v-row>
        <v-row
          justify="center"
        >
          <nav class="nav-social-media">
            <span style="">
              <a href="https://www.instagram.com/hoteldelainn/" target="_blank">
                  <v-icon color="#4d2334">mdi-instagram</v-icon>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=553537318400&text&type=phone_number&app_absent=0" target="_blank">
                  <v-icon color="#4d2334">mdi-whatsapp</v-icon>
              </a>
              <a href="https://www.facebook.com/hoteldelainn" target="_blank">
                  <v-icon color="#4d2334">mdi-facebook</v-icon>
              </a>
            </span>
          </nav>
        </v-row>
      </v-container>
      <v-divider />
    </v-toolbar>
    <v-toolbar class="dela-inn-subheader elevation-24">
      <v-container fluid>
        <v-row
          justify="center"
        >
          <v-item-group class="default-layout__header__links">
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
                Eventos
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
          </v-item-group>
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

}

</script>

<style scoped>

.abs-header {
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
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

</style>
