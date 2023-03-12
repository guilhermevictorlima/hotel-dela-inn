<template>
  <v-container class="pagina-localizacao">
    <v-container class="text-center">
      &nbsp; &nbsp;
      <v-styled-divider /> <br />

      <h1 class="font-weight-light titulo">{{ $t('nossaLocalizacao') }}</h1>
      <br />

      <p class="texto-normal">{{ $t('textoLocalizacao') }}</p>

      <br />

      <iframe class="responsive-iframe" src="https://www.google.com/maps/d/u/0/embed?mid=1x5S9RP3V2lnxJkRPT5weMHoIak1NUA8&ehbc=2E312F" height="480" />
    </v-container>
    <br />
  </v-container>
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
      { hid: 'robots', name: 'robots', content: 'index' }
    ]
  },
  i18n: {
    messages: {
      'pt-BR': {
        tituloHeader: 'Localização | Hotel Dela Inn',
        nossaLocalizacao: 'Nossa localização:',
        textoLocalizacao: 'Com localização privilegiada, o Dela Inn está no centro de Andradas e você pode acessar nosso estacionamento pelo centro ou pelo bairro Jardim Mantiqueira.'
      },
      en: {
        tituloHeader: 'Location | Dela Inn Hotel',
        nossaLocalizacao: 'Our location:',
        textoLocalizacao: 'With a privileged location, Dela Inn is in the Andradas downtown and you can access our parking lot through the downtown or through the Jardim Mantiqueira neighborhood.'
      }
    }
  }
})
export default class IndexLocalizacao extends Vue{

  head() {
    return {
      title: this.$t('tituloHeader'),
      titleTemplate: this.$t('tituloHeader')
    };
  }

}

</script>

<style scoped>

.pagina-localizacao {
  margin-top: 5rem;
}

.responsive-iframe {
  width: 100%;
}

</style>
