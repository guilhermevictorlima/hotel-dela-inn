<template>
  <div>
    <v-dialog v-model="dialog" width="80vw">
      <v-card>
        <v-carousel height="auto" v-if="isSlideDeImagens()">
          <v-carousel-item v-for="(enderecoImagem, key) in src" :key="key">
            <v-img :src="require(`static/${enderecoImagem}`)" max-height="80vh" />
          </v-carousel-item>
        </v-carousel>

        <v-img v-else :src="require(`static/${src}`)" @click="dialog = false" />
      </v-card>
    </v-dialog>

    <v-carousel height="auto" v-if="isSlideDeImagens()" :hide-delimiters="hideDelimiters">
      <v-carousel-item v-for="(enderecoImagem, key) in src" :key="key">
        <v-img
          class="clickable"
          :src="require(`static/${enderecoImagem}`)"
          :max-height="maxHeight"
          @click="dialog = true"
        />
      </v-carousel-item>
    </v-carousel>

    <v-img
      v-else
      class="clickable"
      :src="require(`static/${src}`)"
      :max-height="maxHeight"
      @click="dialog = true"
    />

  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class VImagemContainer extends Vue {

  @Prop({ required: true })
  src!: string | Array<string>;

  @Prop({ required: false, default: 'auto' })
  maxHeight!: string;

  @Prop({ required: false, default: false })
  hideDelimiters!: boolean;

  dialog = false;

  isSlideDeImagens(): boolean {
    return this.src.length > 1;
  }

}

</script>

<style scoped>

.clickable:hover {
  cursor: zoom-in;
}

</style>
