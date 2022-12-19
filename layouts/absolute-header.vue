<template>
  <v-app>
    <header-hotel-dela-inn :app="false"  />
    <v-main>
      <Nuxt />
    </v-main>
    <footer-hotel-dela-inn />
  </v-app>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator';
import HeaderHotelDelaInn from '~/components/HeaderHotelDelaInn.vue';

@Component({
  components: { HeaderHotelDelaInn }
})
export default class AbsoluteHeader extends Vue {}

</script>

<style>

</style>
