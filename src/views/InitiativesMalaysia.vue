<script setup>
import HeadBanner from '@/components/HeadBanner.vue';
import CurvedCard from '@/components/CurvedCard.vue';

</script>

<template>
<HeadBanner src="banner_malaysia.jpeg">
    <v-img src="@/assets/surinacademy.webp" height="20vh"></v-img>
</HeadBanner>
<CurvedCard>
    <v-card-text class="text-h6 text-md-h5 text-black mt-5">
        The Surin Academy
    </v-card-text>
    <v-card-text class="text-body-2 text-md-body-1 w-75" justify="center">
       
        We're a small group of parents who happened to be educators. 
        We started The Surin Academy because we were worried about the many issues facing the world today.
         We wanted our students to grow up to be unafraid of uncertainty and the many changes that will happen in the world. 
         We wanted our students to move with purpose, be resilient, empathetic and brave while also having the confidence to celebrate their own individual uniqueness.
    </v-card-text>
<v-row align="center" justify="center" class="my-3">
    <span class="text-capitalize font-weight-medium text-subtitle-2">We aim to move all of Malaysian education forward.</span>
  
</v-row>
    </CurvedCard>
<v-container align=center justify=center class="px-0">
    <v-card flat align="center" justify="center">
    <v-avatar size="12vh" class="my-3">
    <v-img src="@/assets/Partners/trustcircle.png" cover></v-img>
    </v-avatar>
    <v-card-text class="text-h6 text-md-h5">
    The Surin Academy's AI-Driven Social-Emotional Learning Platform
    </v-card-text>
    <a href="https://tsa.trustcircle.co" target="_blank">https://tsa.trustcircle.co</a>
    <v-card-text class="text-body-2 text-md-body-1 w-75">
        BringChange Foundation Inc. in collaboration with TrustCircle has implemented an evidence-based, 
        globally-acclaimed Social-Emotional Learning platform for the Surin Academy that empower individuals 
        to understand their emotions, self-reflect, grow and seek help when in need.
   </v-card-text>
   <a href="https://tsa.trustcircle.co/" target="_blank">
   <v-card class="bg-black pa-1 ma-2">
   <v-img cover src="@/assets/tsa.png">
   </v-img>
   </v-card>
   </a>
    </v-card>
    </v-container>
</template>