<template>
  <div>
    <v-container class="text-center">
      &nbsp; &nbsp;
      <v-styled-divider /> <br />

      <h1 class="font-weight-light">Nossa localização:</h1>
      <br />

      <span>Você pode acessar o nosso estacionamento através do Centro ou pelo bairro Jardim Mantiqueira, recomendável até às 19hrs.</span> <br /> <br />
      <span>O uso do estacionamento é gratuito, sujeito à disponibilidade de vagas.</span> <br />

      <br />
      <br />

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1848.6880602049034!2d-46.57759907331751!3d-22.073448471806163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9bd61763916c5%3A0x2a4adaceafd56d28!2sHotel%20Dela%20Inn!5e0!3m2!1spt-BR!2sbr!4v1671078772754!5m2!1spt-BR!2sbr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

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
