<template>
  <div>
    <v-parallax src="hotel-dela-inn-quarto-super-luxo.png" class="parallax elevation-10">
      <v-container style="display: flex">
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            <h1 class="text-h4 mb-4">
              Hotel Dela Inn
            </h1>
            <h4 class="subheading">
              O Hotel Dela renova o conceito da hotelaria em Andradas - MG!
            </h4>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            <v-card
              outlined
              elevation="24"
              flat
              max-width="1000"
              height="380"
              class="card-reserva"
            >
              <v-card-title>Faça sua reserva</v-card-title>

              <v-check-in-check-out-picker />

              <br />

              <v-row align="center">
                <v-col cols="5">
                  <v-quantity-entry-input label="Adultos" />
                </v-col>
                <v-col cols="5">
                  <v-quantity-entry-input label="Crianças" />
                </v-col>
              </v-row>

              <br />
              <br />

              <v-btn
                width="90%"
                outlined
                large
                color="primary"
              >
                Reservar
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>


    <br />
    <br />
    <br />
    <br />

    <v-container class="text-center descricao-central-landing-page">
      <v-styled-divider :h-level="4" />
      <br />

      <h2 class="font-weight-light">Somos Referência em Hospedagem!</h2>

      <div class="font-weight-light">
        <br />
        <br />

        Para você que busca conforto e atendimento de qualidade, o Dela Inn está pronto para atender! <br /> <br />

        Com excelente localização no centro da cidade, o Hotel dispõe de 132 novos apartamentos nas categorias Standard, Luxo e Super Luxo. <br /> <br />

        Nos importamos com seu bem-estar e entretenimento! <br /> <br /> <br />
      </div>

      <v-list-item class="flex-row justify-center">
        <v-spacer />
        <v-item>
          <div>
            <v-icon color="#9c8f54">mdi-dumbbell</v-icon> <br /> <br />
            <span>Academia</span>
          </div>
        </v-item>
        <v-spacer />
        <v-item>
          <div>
            <v-icon color="#9c8f54">mdi-glass-wine</v-icon> <br /> <br />
            <span>Bar</span>
          </div>
        </v-item>
        <v-spacer />
        <v-item>
          <div>
            <v-icon color="#9c8f54">mdi-coffee-maker</v-icon> <br /> <br />
            <span>Café da manhã</span>
          </div>
        </v-item>
        <v-spacer />
        <v-item>
          <div>
            <v-icon color="#9c8f54">mdi-wifi</v-icon> <br /> <br />
            <span>Wi-Fi</span>
          </div>
        </v-item>
        <v-spacer />
        <v-item>
          <div>
            <v-icon color="#9c8f54">mdi-bed-king</v-icon> <br /> <br />
            <span>Quartos de luxo</span>
          </div>
        </v-item>
        <v-spacer />
        <v-item>
          <div>
            <v-icon color="#9c8f54">mdi-car-arrow-left</v-icon> <br /> <br />
            <span>Estacionamento</span>
          </div>
        </v-item>
        <v-spacer />
      </v-list-item>

      <br />
      <br />
      <v-styled-divider :h-level="4" />
    </v-container>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <v-container>
      <v-row>
        <v-img src="luxo-casal-1.jpg" max-width="800" />
        &nbsp;
        &nbsp;
        &nbsp;
        <v-content>
          <h2>Teste</h2>
        </v-content>
      </v-row>
      <br />
      <br />
      <br />
      <v-row class="flex-row-reverse">
        <v-img src="luxo-triplo-solteiro.jpg" max-width="800" />
        &nbsp;
        &nbsp;
        &nbsp;
        <v-content>
          <h2>Teste</h2>
        </v-content>
      </v-row>

      <br />
      <br />
      <br />
    </v-container>

  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator';
import VCheckInCheckOutPicker from '~/components/shared/VCheckInCheckOutPicker.vue';
import VQuantityEntryInput from '~/components/shared/VQuantityEntryInput.vue';
import VStyledDivider from '~/components/shared/VStyledDivider.vue';

@Component({
  components: {VStyledDivider, VQuantityEntryInput, VCheckInCheckOutPicker }
})
export default class Index extends Vue {

}


</script>

<style>

main {
  overflow: hidden;
}

.parallax {
  width: 100vw !important;
  height: 100vh !important;
}

.card-reserva {
  padding: 1rem;
}

.descricao-central-landing-page {
  font-size: 1.1rem;
}

</style>
