<template>
  <v-app-bar class="default-layout__header"
             height="130"
             fixed
  >
    <v-container>
      <v-row
        justify="center"
      >
        <nuxt-link to="/">
          <v-img src="logo.svg" class="default-layout__header__logo" width="250"/>
        </nuxt-link>
      </v-row>
      <v-row
        justify="center"
      >
        <v-item-group class="default-layout__header__links">
          &nbsp;
          &nbsp;
          <v-item>
            Hotel Dela Inn
          </v-item>
          &nbsp;
          &nbsp;
          <v-item>
            Acomodações
          </v-item>
          &nbsp;
          &nbsp;
          <v-item>
            Galeria
          </v-item>
          &nbsp;
          &nbsp;
          <v-item>
            Localização
          </v-item>
        </v-item-group>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderHotelDelaInn"
}
</script>

<style scoped>

.default-layout__header {
  background-color: white !important;
}

.default-layout__header__links {
  margin-top: 1rem;
}

.default-layout__header__links v-item:not(:first-child) {
  margin-left: 1rem;
}

</style>
