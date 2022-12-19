<template>
  <div>
    <v-card class="elevation-15" :width="width" :min-width="width" height="90%" style="padding: 2rem">
      <v-row>
        <v-col cols="5">
          <div>
            <v-carousel height="100%" v-if="quartoPossuiVariasImagens()">
              <v-carousel-item v-for="(enderecoImagem, key) in quartoImagens" :key="key">
                <v-img style="border-radius: 2%" :src="require(`static/${enderecoImagem}`)" />
              </v-carousel-item>
            </v-carousel>

            <v-img style="border-radius: 2%" v-else :src="require(`static/${quartoImagens[0]}`)" />
          </div> <br />

          <v-container>
            <v-card-subtitle>
              <v-row align-content="center" align="center" style="margin-top: -2rem">
                <span v-if="quartoMaximoPessoas">
                  <v-icon color="#4d2334">{{ iconNumeroPessoas }}</v-icon>
                  <span>Capacidade máxima: {{ `${quartoMaximoPessoas} ${quartoMaximoPessoas === 1 ? 'pessoa' : 'pessoas'}` }}</span>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                  <v-icon color="#4d2334">mdi-wifi</v-icon>
                  <span>Acesso livre ao Wi-Fi</span>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <v-breadcrumbs-divider />
                <span>
                  <v-icon color="#4d2334">mdi-smoking-off</v-icon>
                  <span>Proibido fumar</span>
                </span>
              </v-row>
            </v-card-subtitle>
          </v-container>

        </v-col>
        <v-col cols="5">
          <v-container>
            <v-row align="center">
              <v-card-title>{{ quartoNome }}</v-card-title>
            </v-row>
          </v-container>
          <v-container>
            {{ quartoDescricao }}
            <br />
            <br />
            <v-divider />
          </v-container>
          <v-container style="display: flex !important; flex-direction: row-reverse !important; align-items: center">
            <v-btn color="primary" width="30%">Reservar</v-btn>
          </v-container>
          &nbsp;
        </v-col>
      </v-row>
    </v-card>
    &nbsp;
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

  @Prop({ required: false })
  dataChegada?: Date;

  @Prop({ required: false, default: false })
  horizontal!: boolean;

  exibirDialog = false;
  botaoVerMaisDescricao = false;
  exibirDialogDescricao = false;

  rowReverse = false;

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

</style>
