<template>
  <v-app>
    <header-hotel-dela-inn />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import HeaderHotelDelaInn from '~/components/HeaderHotelDelaInn.vue';

@Component({
  components: { HeaderHotelDelaInn }
})
export default class LayoutDefault extends Vue {}
</script>

<style>

</style>
