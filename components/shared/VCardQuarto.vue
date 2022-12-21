<template>
  <div>
    <v-card class="elevation-15" :width="width" :max-height="maxHeight">
      <div>
        <v-imagem-container :src="quartoTo.imagens"  max-height="20rem" />
      </div>

      <v-card-title>{{ quartoNome }}</v-card-title>
      <v-card-subtitle>
        <v-row class="conteudo-card-acomodacao" align="center">
          <span>
            <v-icon color="#4d2334">{{ iconNumeroPessoas }}</v-icon>
            <span>Capacidade máxima: {{ `${quartoMaximoPessoas} ${quartoMaximoPessoas === 1 ? 'pessoa' : 'pessoas'}` }}</span>
          </span>
          <span>
            &nbsp;&nbsp;&nbsp;
            <v-icon color="#4d2334">mdi-angle-right</v-icon>
            <span>Dimensão: {{ quartoTo.dimensao }}</span>
          </span>
        </v-row>
      </v-card-subtitle>

      <v-card-text>
        {{ quartoDescricao }}
      </v-card-text>

      <v-container style="display: flex !important; flex-direction: row-reverse !important; align-items: center">
        <v-btn color="primary" width="30%">Reservar</v-btn>
      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">


import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Quarto } from '~/model/types/Quarto';
import VDinheiroFormatado from '~/components/shared/VDinheiroFormatado.vue';
import VImagemContainer from '~/components/shared/VImagemContainer.vue';

@Component({
  components: { VImagemContainer, VDinheiroFormatado }
})
export default class VCardQuarto extends Vue {

  @Prop({ required: true })
  quartoTo!: Quarto;

  @Prop({ required: false, default: '100%' })
  width!: string;

  @Prop({ required: false, default: '100%' })
  maxHeight!: string;

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

}

</script>

<style scoped>

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

</style>
