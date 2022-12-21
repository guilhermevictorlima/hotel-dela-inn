<template>
  <div>
    <v-container class="text-center">
      &nbsp; &nbsp;
      <v-styled-divider /> <br />

      <h1 class="font-weight-light titulo">Nossa localização:</h1>
      <br />

      <span class="texto-normal">Você pode acessar o nosso estacionamento através do Centro ou pelo bairro Jardim Mantiqueira, recomendável até às 19hrs.</span> <br /> <br />
      <span class="texto-normal">O uso do estacionamento é gratuito, sujeito à disponibilidade de vagas.</span> <br />

      <br />
      <br />

      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1x5S9RP3V2lnxJkRPT5weMHoIak1NUA8&ehbc=2E312F" width="640" height="480" style="width: 70rem" />
    </v-container>
    <br /> <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import VStyledDivider from "~/components/shared/VStyledDivider.vue";

@Component({
  components: { VStyledDivider },
  head: {
    title: 'Localização | Hotel Dela Inn',
    titleTemplate: 'Localização | Hotel Dela Inn',
    meta: [
      { hid: 'description', name: 'description', content: 'O Hotel Dela Inn' },
      { hid: 'robots', name: 'robots', content: 'index' }
    ]
  }
})
export default class IndexLocalizacao extends Vue{

}

</script>

<style scoped>

</style>
