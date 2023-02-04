<script setup>

import { defineProps } from 'vue';
defineProps({logosrc:Object,heading:String})


</script>

<template>
<v-card class="ma-0 pa-0" fluid height=auto
align="center">
<v-card flat align="center" class="text-md-h5 text-h6 pa-4 ">
{{heading}}
</v-card>
<v-window align="center" class="hidden-sm-and-down pb-2">
<v-row align="center" justify="center">
  <v-col 
  v-for="(logo,i) in logosrc"
  :key="i" md="2" >
        <v-img :src="require('@/assets/Partners/' +logo.src)"
        max-height="10vh"></v-img>
        <div v-if="logo.src == 'trustcircle.png'" class="text-blue text-subtitle-2">
        TrustCircle</div>
      </v-col>
</v-row>
</v-window>
<v-carousel
      cycle
      :show-arrows="false"
      height=auto
      hide-delimiter-background="true"
      delimiter-icon="mdi-circle-small"
      class="hidden-md-and-up"
    >
<v-card align="center" justify=center height="140">
<v-carousel-item
v-for="(logo,i) in logosrc"
:key="i"
height="auto"
>
    <v-row align="center" justify=center>
      <v-col sm=12>
        <v-img max-height="80" :src="require('@/assets/Partners/' +logo.src)" contain  ></v-img>

      <div v-if="logo.src == 'trustcircle.png'" class="text-blue text-subtitle-2">
        TrustCircle</div>
        
      </v-col>
     </v-row>
</v-carousel-item>
</v-card>
</v-carousel>
</v-card>





</template>
