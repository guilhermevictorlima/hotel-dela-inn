<template>
  <v-app-bar class="default-layout__header"
             :app="app"
             height="130"
             fixed
             dark
  >
    <v-container>
      <v-row
        justify="center"
      >
        <nuxt-link to="/">
          <v-img :src="require('static/logo-horizontal.svg')" class="default-layout__header__logo" width="250"/>
        </nuxt-link>
      </v-row>
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
    </v-container>
  </v-app-bar>
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

.router-link {
  color: #ffffff;
  text-decoration: none;
}

.router-link:hover {
  color: #c9be89;

  transition: all 0.3s;
}

.default-layout__header {
  background-color: #70364e !important;
}

.default-layout__header__links {
  margin-top: 1rem;
}

.default-layout__header__links v-item:not(:first-child) {
  margin-left: 1rem;
}

</style>
