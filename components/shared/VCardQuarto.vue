<template>
  <div>
    <v-dialog v-model="exibirDialogDescricao" width="600">
      <v-card>
        <v-card-title class="text-h5 lighten-2" style="background-color: #70364e; color: #dfddde">
          {{ quartoNome }}
        </v-card-title>
        <br />

        <v-card-text>
          <span v-for="(item, key) in itensDescricao" :key="key">
            {{ item }} <br />
          </span>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="exibirDialogDescricao = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    &nbsp;
    <v-card :width="width">
      <v-row>
        <v-col cols="5">
          <div>
            <v-carousel height="100%" v-if="quartoPossuiVariasImagens()">
              <v-carousel-item v-for="(enderecoImagem, key) in quartoImagens" :key="key">
                <v-img :src="require(`static/${enderecoImagem}`)" />
              </v-carousel-item>
            </v-carousel>

            <v-img v-else :src="require(`static/${quartoImagens[0]}`)" />
          </div>
        </v-col>
        <v-col cols="5">
          <v-container>
            <v-row align="center">
              <v-card-title>{{ quartoNome }}</v-card-title>
              &nbsp;&nbsp;&nbsp;
<!--              <v-breadcrumbs-divider v-if="dataChegada" />-->
<!--              <v-btn-->
<!--                icon-->
<!--                v-if="dataChegada"-->
<!--                @click="exibirDialog = true"-->
<!--              >-->
<!--                <v-icon>mdi-file-document-alert</v-icon>-->
<!--              </v-btn>-->
            </v-row>
          </v-container>
          <v-container>
            <v-card-subtitle>
              <v-row align-content="center" align="center">
            <span>
              <v-icon>{{ iconNumeroPessoas }}</v-icon>
              <span>Capacidade máxima: {{ `${quartoMaximoPessoas} ${quartoMaximoPessoas === 1 ? 'pessoa' : 'pessoas'}` }}</span>
            </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
<!--                <v-breadcrumbs-divider />-->
                <span>
              <v-icon>mdi-wifi</v-icon>
              <span>Acesso livre ao Wi-Fi</span>
            </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
<!--                <v-breadcrumbs-divider />-->
                <span>
              <v-icon>mdi-smoking-off</v-icon>
              <span>Proibido fumar</span>
            </span>
              </v-row>
            </v-card-subtitle>
          </v-container>
          <v-container>
            <v-divider />
          </v-container>

          <v-container>
            <v-card-text>
              <span>
                {{ quartoDescricaoCurta }}
                <span v-if="botaoVerMaisDescricao" class="ver-mais-link" @click="exibirDialogDescricao = true">
                  Ver mais
                </span>
              </span>
            </v-card-text>
          </v-container>

          <v-container style="display: flex !important; flex-direction: row-reverse !important; align-items: center">
            <v-btn color="primary" width="30%">Reservar</v-btn>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
          <strong>A partir de <v-dinheiro-formatado :valor="quartoValorNominal" /> por noite</strong>

        </span>
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

  get quartoId(): number {
    return this.quartoTo.id;
  }

  get quartoNome(): string {
    return this.quartoTo.nomeQuarto;
  }

  get quartoDescricaoCurta(): string {
    if (this.quartoTo.descricao.length > 80) {
      this.botaoVerMaisDescricao = true;
      return this.quartoTo.descricao.substring(0, 80).concat('...');
    }

    return this.quartoTo.descricao;
  }

  get quartoDescricaoCompleta(): string {
    return this.quartoTo.descricao;
  }

  get quartoImagens(): string | Array<string> {
    return this.quartoTo.imagens;
  }

  get quartoMaximoPessoas(): number {
    return this.quartoTo.maximoPessoas;
  }

  get quartoValorNominal(): number {
    return this.quartoTo.valorNominal;
  }

}

</script>

<style scoped>

.ver-mais-link {
  color: #918237;
  cursor: pointer;
}

</style>
