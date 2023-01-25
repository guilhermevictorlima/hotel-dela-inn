<template>
  <header>
    <v-app-bar class="default-layout__header elevation-24"
               height="100"
               dark
               fixed
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
          :height="isMobile() ? '75' : '100'"
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
                    :to="localePath('/')"
                    class="router-link"
                  >
                    Hotel Dela Inn
                  </nuxt-link>
                </v-item>
                &nbsp;
                &nbsp;
                <v-item>
                  <nuxt-link
                    :to="localePath('/acomodacoes')"
                    class="router-link"
                  >
                    Acomodações
                  </nuxt-link>
                </v-item>
                &nbsp;
                &nbsp;
                <v-item>
                  <nuxt-link
                    :to="localePath('/galeria')"
                    class="router-link"
                  >
                    Galeria
                  </nuxt-link>
                </v-item>
                &nbsp;
                &nbsp;
                <v-item>
                  <nuxt-link
                    :to="localePath('/localizacao')"
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
                      <v-icon class="icon-social-media" color="#dfddde">mdi-instagram</v-icon>
                  </a>
                  &nbsp;&nbsp;
                  <a href="https://api.whatsapp.com/send/?phone=553537318400&text&type=phone_number&app_absent=0" target="_blank">
                      <v-icon class="icon-social-media" color="#dfddde">mdi-whatsapp</v-icon>
                  </a>
                  &nbsp;&nbsp;
                  <a href="https://www.facebook.com/hoteldelainn" target="_blank">
                      <v-icon class="icon-social-media" color="#dfddde">mdi-facebook</v-icon>
                  </a>
                  &nbsp;&nbsp;
                  <a href="https://mail.google.com/mail/u/0/?fs=1&to=reservas@hoteldelainn.com.br&tf=cm" target="_blank">
                      <v-icon class="icon-social-media" color="#dfddde">mdi-gmail</v-icon>
                  </a>
                </span>
              </nav>
            </v-row>
          </v-container>

          <template #extension>
            <v-app-bar
              absolute
              color="primary"
              elevation="0"
              :extension-height="isMobile() ? '30' : '0'"
            >
              <v-container fluid>
                <v-row
                  justify="center"
                >
                  <v-btn
                    outlined
                    large
                    @click="abrirReserva"
                    class="botao-reservar-header"
                  >
                    Reservar
                  </v-btn>
                </v-row>
              </v-container>

              <template #extension>
                <v-app-bar
                  absolute
                  elevation="0"
                  color="#401d2c"
                  class="extension-links-mobile"
                  :height="isMobile() ? '30' : '0'"
                  @click="exibirDialogLinksMobile = true"
                >
                  <v-container fluid>
                    <v-row
                      justify="center"
                    >
                      <v-btn
                        icon
                        class="menu-links-mobile"
                      >
                        <v-icon size="15">mdi-menu</v-icon>
                      </v-btn>
                    </v-row>
                  </v-container>
                </v-app-bar>
              </template>

            </v-app-bar>
          </template>

          <v-dialog v-model="exibirDialogLinksMobile" overlay-color="primary">
            <v-card color="#401d2c" class="dialog-mobile-links-card">
              <v-item-group class="default-layout__header__links--mobile">
                <v-item>
                  <nuxt-link
                    :to="localePath('/')"
                    class="router-link"
                    @click="exibirDialogLinksMobile = false"
                  >
                    Hotel Dela Inn
                  </nuxt-link>
                </v-item>
                <v-item>
                  <nuxt-link
                    :to="localePath('/galeria')"
                    class="router-link"
                    @click="exibirDialogLinksMobile = false"
                  >
                    Galeria
                  </nuxt-link>
                </v-item>
                <v-item>
                  <nuxt-link
                    :to="localePath('/acomodacoes')"
                    class="router-link"
                    @click="exibirDialogLinksMobile = false"
                  >
                    Acomodações
                  </nuxt-link>
                </v-item>
                <v-item>
                  <nuxt-link
                    :to="localePath('/localizacao')"
                    class="router-link"
                    @click="exibirDialogLinksMobile = false"
                  >
                    Localização
                  </nuxt-link>
                </v-item>
              </v-item-group>
            </v-card>
          </v-dialog>
        </v-app-bar>
      </template>
    </v-app-bar>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import VStyledDivider from "~/components/shared/VStyledDivider.vue";
import BrowserService from '~/services/BrowserService';

@Component({
  components: {VStyledDivider}
})
export default class HeaderHotelDelaInn extends Vue {

  @Prop({ required: false, default: true })
  app!: boolean;

  exibirDialogLinksMobile = false;

  abrirReserva(): void {
    window.open('https://reservas.desbravador.com.br/hotel-app/hotel-dela-inn', '_blank');
  }

  isMobile(): boolean {
    return BrowserService.isMobile();
  }


}

</script>

<style scoped>

@media (max-width: 480px) {

  .icon-social-media {
    font-size: 1.8em;
  }

  .default-layout__header__links {
    display: none !important;
  }

  .default-layout__header__links--mobile {
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }

  .router-link {
    padding: 1rem;
    color: #dbc451 !important;
  }

  .botao-reservar-header {
    width: 100% !important;
    font-size: 1rem !important;
  }

  .extension-links-mobile {
    display: block !important;
  }

  .menu-links-mobile {
    display: inline-block !important;
  }

  .dialog-mobile-links-card {
    padding: 2rem 0;
  }
}

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
  padding-top: 0.6rem;
  margin-bottom: 1.5rem;
}

a {
  text-decoration: none;
}

.router-link {
  color: #ffffff;
  text-decoration: none;

  font-family: now, sans-serif;
  text-transform: uppercase;
  font-size: 16px;
}

.router-link:hover {
  color: #e3cf6f;

  transition: all 0.3s;
}

.default-layout__header {
  background-color: #ffffff !important;

}

.dela-inn-subheader {
  background-color: #70364e !important;
}

.default-layout__header__links {
  display: flex;
  margin-top: 1rem;
}

.default-layout__header__links v-item:not(:first-child) {
  margin-left: 1rem;
}

.default-layout__header__links--mobile {
  display: none;
}

.botao-reservar-header {
  width: 20%;
  margin-bottom: 2rem;
}

.extension-links-mobile {
  display: none;
}

.menu-links-mobile {
  display: none;
}

</style>
