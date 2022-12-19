<template>
  <v-app>
    <header-hotel-dela-inn />
    <v-main>
      <Nuxt />
    </v-main>
    <header-hotel-dela-inn :app="false" :reverse="true" :exibir-links="false" :header="false" sub-header-height="150" />
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
