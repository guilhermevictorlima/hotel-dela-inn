<template>
  <v-card class="elevation-15" :width="width" :max-height="maxHeight">
    <div>
      <v-imagem-container :src="quartoTo.imagens"  max-height="20rem" />
    </div>

    <v-card-title class="texto-normal">{{ quartoNome }}</v-card-title>
    <v-card-subtitle class="texto-normal">
      <v-row class="conteudo-card-acomodacao" align="center">
        <span>
          <v-icon color="#4d2334">{{ iconNumeroPessoas }}</v-icon>
          <span><b>{{ $t('capacidadeMaxima') }}</b> {{ `${quartoMaximoPessoas} ${quartoMaximoPessoas === 1 ? $t('pessoa') : $t('pessoas')}` }}</span>
        </span>
        <span v-if="!simplificado" class="dimensao">
          <v-icon color="#4d2334">mdi-angle-right</v-icon>
          <span><b>{{ $t('dimensao') }}</b> {{ quartoTo.dimensao }}</span>
        </span>
      </v-row>
    </v-card-subtitle>

    <v-card-text v-if="!simplificado">
      {{ quartoDescricao }}
    </v-card-text>

    <v-container style="display: flex !important; flex-direction: row-reverse !important; align-items: center">
      <v-btn color="primary" width="30%" @click="abrirReserva">Reservar</v-btn>
    </v-container>
  </v-card>
</template>

<script lang="ts">


import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Quarto } from '~/model/types/Quarto';
import VDinheiroFormatado from '~/components/shared/VDinheiroFormatado.vue';
import VImagemContainer from '~/components/shared/VImagemContainer.vue';

@Component({
  components: { VImagemContainer, VDinheiroFormatado },
  i18n: {
    messages: {
      'pt-BR': {
        capacidadeMaxima: 'Capacidade máxima:',
        dimensao: 'Dimensão:',

        pessoa: 'pessoa',
        pessoas: 'pessoas'
      },
      en: {
        capacidadeMaxima: 'Maximum capacity:',
        dimensao: 'Room size:',

        pessoa: 'person',
        pessoas: 'people'
      }
    }
  }
})
export default class VCardQuarto extends Vue {

  @Prop({ required: true })
  quartoTo!: Quarto;

  @Prop({ required: false, default: '100%' })
  width!: string;

  @Prop({ required: false, default: '100%' })
  maxHeight!: string;

  @Prop({ required: false, default: false })
  simplificado!: boolean;

  get iconNumeroPessoas(): string {
    switch (this.quartoTo.maximoPessoas) {
      case 1: return 'mdi-account';
      case 2: return 'mdi-account-multiple';
      default: return 'mdi-account-group';
    }
  }

  get quartoNome(): string {
    return this.quartoTo.nomeQuarto;
  }

  get quartoDescricao(): string {
    return this.quartoTo.descricao;
  }

  get quartoMaximoPessoas(): number {
    return this.quartoTo.maximoPessoas || 0;
  }

  abrirReserva(): void {
    window.open('https://reservas.desbravador.com.br/hotel-app/hotel-dela-inn', '_blank');
  }

}

</script>

<style scoped>

@media (max-width: 414px) {

  .dimensao {
    margin-left: 0 !important;
    margin-top: 0.5rem;
  }

}

.ver-mais-link {
  color: #918237;
  cursor: pointer;
}

.conteudo-card-acomodacao {
  padding: 1rem;
}

.caracteristica-acomodacao-icone:not(:first-child) {
  margin-left: 1rem;
}

.dimensao {
  margin-left: 1rem;
}

</style>
