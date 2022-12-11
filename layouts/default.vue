<template>
  <v-app class="default-layout">
    <v-app-bar class="default-layout__header"
               height="100"
               fixed
               elevate-on-scroll
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-app-bar-title class="default-layout__header__logo">
          <nuxt-link to="/">
            <v-img src="logo.png" class="logo" width="250"/>
          </nuxt-link>
        </v-app-bar-title>
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
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
</script>

<style>

main {
  overflow: hidden;
  
  background-color: #5c2c40;
}

.default-layout__header {
  background-color: #70364e !important;
  color: #dfddde;
}

.default-layout__header__logo {
  margin-right: 40rem;
}

.default-layout__header__links {
  margin-top: 1rem;
}

.default-layout__header__links v-item:not(:first-child) {
  margin-left: 1rem;
}

</style>
