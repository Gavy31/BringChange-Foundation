<script setup>
import HeadBanner from '@/components/HeadBanner.vue';
import CurvedCard from '@/components/CurvedCard.vue';
import CarouselPartner from '@/components/CarouselPartner.vue';

const logos=[{src:"kbs.png"},{src:"sofina.png"},{src:"unicef.png"}]
</script>

<template>
    <HeadBanner src="banner_unicef.jpg" align="center">
    <v-img src="@/assets/unicef.png" height="8vh"></v-img>
    </HeadBanner>
    <CurvedCard>
    <v-card-text class="text-h6 text-md-h5 text-black mt-5">
        Mental Health and Psychosocial Support (MHPSS)
    </v-card-text>
    <v-card-text class="text-body-2 text-md-body-1 w-75">
       
        Mental Health and Psychosocial Support (MHPSS) is an
            institutional priority for the UN and for UNICEF, and is
            critical to the achievement of the 2030 Sustainable Development
            Goals. The UNICEF Strategic Plan 2018-2021 identifies MHPSS as a
            priority area, building upon existing programming through child
            protection, education and health, shaped by actions and
            standards set out in the Child Protection Minimum Standards
            (CPMS), Core Commitments for Children in Humanitarian Action
            (CCCs) and the IASC Guidelines on Mental Health and Psychosocial
            Support in Emergencies.
    </v-card-text>
<v-row align="center" justify="center" class="mb-2">
    <v-btn flat size="large">
    <v-icon color="blue">mdi-motion-play</v-icon><span class="text-lowercase">Watch Video</span>
    </v-btn>
</v-row>
    </CurvedCard>
<v-container align=center justify=center class="px-0">
    <v-card flat align="center" justify="center">
    <v-avatar size="12vh" class="my-3">
    <v-img src="@/assets/Partners/trustcircle.png" cover></v-img>
    </v-avatar>
    <v-card-text class="text-h6 text-md-h5">
    Unicef's MHPSS AI-Driven Social-Emotional Learning Platform
    </v-card-text>
    <a href="https://mhpss.trustcircle.co" target="_blank">https://mhpss.trustcircle.co</a>
    <v-card-text class="text-body-2 text-md-body-1 w-75">
       
        BringChange Foundation Inc. in collaboration with TrustCircle has implemented an evidence-based, globally-acclaimed Social-Emotional Learning platform for Unicef's MHPSS initiative that empower individuals to understand their emotions, self-reflect, grow and seek help when in need.
   </v-card-text>
   <a href="https://mhpss.trustcircle.co/" target="_blank">
   <v-card class="bg-black pa-1 ma-2">
   <v-img cover src="@/assets/mhpss.png">
   </v-img>
   </v-card>
   </a>
    </v-card>
    </v-container>
    <CarouselPartner heading="Supported By" :logosrc=logos />

</template>
