<script setup>
import HeadBanner from '@/components/HeadBanner.vue';

const logosrc=[{src:'kbs.png'},{src:'sofina.png'},
{src:'trustcircle.png'},{src:'unicef.png'}]
</script>

<template>
<HeadBanner src="banner_Partners.jpg">
<div class="text-h5" align="center">
Our Partners
</div>
    <v-window align="center" class="hidden-sm-and-down pb-2">

<v-row align="center" justify="center">
  <v-col 
  v-for="(logo,i) in logosrc"
  :key="i" md="2" >
        <v-img :src="require('@/assets/Partners/' +logo.src)"
        max-height="10vh" :style=" logo.src=='kbs.png' ? 'filter:invert(1)' :'' "></v-img>
        <div v-if="logo.src == 'trustcircle.png'" class="text-blue text-subtitle-2">
        TrustCircle</div>
      </v-col>
</v-row>
</v-window>
</HeadBanner>
<v-container align="center" :class=" mdAndUp ? 'px-0' :'ma-0 pa-0' ">
        <v-card flat :class="mdAndUp ?'second-card my-n10 mx-auto justify-center' : ' ma-0 pa-0 justify-center'">
        HELLO
        </v-card>
</v-container>
</template>
<style scoped>
@media screen and (min-width:960px) {
    .first-card {
        border-bottom-left-radius: 20% 5%;
        border-bottom-right-radius: 20% 5%;
    }

    .second-card {
        border-top-left-radius: 50% ;
        border-top-right-radius: 50% ;
    }

}
</style>