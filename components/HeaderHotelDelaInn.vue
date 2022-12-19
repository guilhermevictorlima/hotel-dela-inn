<template>
  <header>
    <v-app-bar class="default-layout__header elevation-24"
               height="100"
               dark
               fixed
               :extension-height="subHeaderHeight"
               :app="app"
    >
      <v-container  >
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

      <template #extension>
        <v-app-bar
          class="dela-inn-subheader elevation-24"
          :height="subHeaderHeight"
          absolute
        >
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
                    to="/ofertas"
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
                    to="/localizacao"
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
<!--                <span v-if="reverse" style="display: flex; flex-direction: column">-->

<!--                  <span class="footer-info">-->
<!--                    <v-icon color="#dfddde">mdi-google-maps</v-icon> &nbsp;-->
<!--                    <span>R. Maj. Bonifácio, 670 - Andradas, MG</span>-->
<!--                  </span>-->

<!--                  <span class="footer-info">-->
<!--                    <v-icon color="#dfddde">mdi-phone</v-icon> &nbsp;-->
<!--                    <a href="tel:3537318400" style="color: white; text-decoration: underline">(35) 3731-8400</a>-->
<!--                  </span>-->
<!--                </span>-->
              </nav>
            </v-row>
          </v-container>
        </v-app-bar>
      </template>
    </v-app-bar>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class HeaderHotelDelaInn extends Vue {

  @Prop({ required: false, default: true })
  app!: boolean;

  @Prop({ required: false, default: '90' })
  subHeaderHeight!: string;

}

</script>

<style scoped>

.v-toolbar__content, .v-toolbar__extension {
  padding: 0;
}

.v-toolbar__extension {
  width: 100% !important;
}

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
