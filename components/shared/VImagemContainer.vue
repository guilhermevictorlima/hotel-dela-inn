<template>
  <div>
    <v-dialog v-model="dialog" width="auto">
      <v-card height="auto">
        <v-carousel height="auto" v-if="isSlideDeImagens()">
          <v-carousel-item v-for="(enderecoImagem, key) in src" :key="key" eager>
            <v-img :src="require(`static/${enderecoImagem}`)" max-height="80vh" eager />
          </v-carousel-item>
        </v-carousel>

        <v-img v-else :src="require(`static/${src}`)" @click="dialog = false" />
      </v-card>
    </v-dialog>

    <v-carousel height="auto" v-if="isSlideDeImagens()" :hide-delimiters="hideDelimiters">
      <v-carousel-item v-for="(enderecoImagem, key) in src" :key="key" eager>
        <v-img
          class="clickable"
          :src="require(`static/${enderecoImagem}`)"
          :max-height="maxHeight"
          @click="dialog = true"
          eager
        />
      </v-carousel-item>
    </v-carousel>

    <v-img
      v-else
      class="clickable"
      :src="require(`static/${src}`)"
      :max-height="maxHeight"
      @click="dialog = true"
      eager
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
    return Array.isArray(this.src) && this.src.length > 1;
  }

}

</script>

<style scoped>

.clickable:hover {
  cursor: zoom-in;
}

</style>
