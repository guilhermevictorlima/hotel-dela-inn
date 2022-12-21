<template>
  <div>
    <v-card class="elevation-15" :width="width" :max-height="maxHeight">
      <div>
        <v-carousel height="auto" v-if="quartoPossuiVariasImagens()" show-arrows-on-hover>
          <v-carousel-item v-for="(enderecoImagem, key) in quartoImagens" :key="key">
            <v-img max-height="20rem" :src="require(`static/${enderecoImagem}`)" />
          </v-carousel-item>
        </v-carousel>

        <v-img :max-height="`${maxHeight / 2}rem`" v-else :src="require(`static/${quartoImagens[0]}`)" />
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
import VDinheiroFormatado from "~/components/shared/VDinheiroFormatado.vue";

@Component({
  components: { VDinheiroFormatado }
})
export default class VCardQuarto extends Vue {

  @Prop({ required: true })
  quartoTo!: Quarto;

  @Prop({ required: false, default: '100%' })
  width!: string;

  @Prop({ required: false, default: '100%' })
  maxHeight!: string;

  @Prop({ required: false })
  dataChegada?: Date;

  @Prop({ required: false, default: false })
  horizontal!: boolean;

  quartoPossuiVariasImagens(): boolean {
    return this.quartoTo.imagens.length > 1;
  }

  get itensDescricao(): Array<string> {
    return this.quartoTo.descricao.split('\n');
  }

  get dataLimiteCancelamento(): string {
    if (this.dataChegada) {
      return new Date(new Date(this.dataChegada!).setDate(this.dataChegada!.getDate() - 2))
        .toISOString()
        .substring(0, 10)
        .split('-')
        .reverse()
        .join('/');
    } else return '';
  }

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

  get quartoImagens(): string | Array<string> {
    return this.quartoTo.imagens;
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
