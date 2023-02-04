<script setup>
import HeadBanner from '@/components/HeadBanner.vue';
import { useDisplay} from 'vuetify';
const {mdAndUp} = useDisplay()
</script>

<template>
    <HeadBanner src="banner_mission.jpg" offsetmd="6">
      <div class="text-md-h6 text-body-1">we exist to foster emotional resilience and 
      wellbeing at scale - globally and to serve those who are impacted by 
      emotional health issues</div>
    </HeadBanner>

<v-container align="center" :class="mdAndUp ? 'px-0' :'ma-0 pa-0' ">
    <v-card height=auto flat :class="mdAndUp ?'second-card my-n10 mx-auto justify-center' : 'ma-0 pa-0 justify-center'">
    <v-sheet class=" text-h6 text-md-h5 text-black pt-2">
      Our Journey
    </v-sheet>
    <v-sheet class="text-subtitle-2 text-md-subtitle-1 py-2">
      inspired by personal adversity, driven by purpose, fueled by passion
    </v-sheet>

    <v-avatar rounded="1" size="300">

    <v-img cover src="@/assets/sachin.jpg" style="filter:grayscale(90%)"></v-img>

    </v-avatar>
    <v-card-text align="center" class="text-caption pt-2">
    
      Founder Sachin Chaudhry with his younger brother
      <br>
      Salil Chaudhry - year 1982
        
    </v-card-text>
    <v-card-text align="center" class="text-body-2 text-md-body-1 text-black mx-auto w-75 pt-7 font-weight-light">
            
      "Our founder's brilliant brother - Salil Chaudhry, was bullied in
            school, had an emotional breakdown, and was further diagnosed
            with mental health issue. Family, Teachers, and Friends missed
            early signs of risks and hence missed early interventions. What
            happened with the founder's brother should never happen with
            anyone else, is the heart of BringChange Foundation's mission.
            The challenge is to identify these emotional risks proactively
            and that too at scale. To achieve this audacious mission
            BringChange Foundation in collaboration with TrustCircle is
            inspiring systemic change and fostering emotional resilience,
            prevention, and early Interventions at scale, globally."
        
      </v-card-text>
      
    </v-card>
</v-container>
<v-container class="px-0">
<v-card class="mt-3 text-center">
<v-card-text flat class="text-body-2 text-md-body-1 font-italic">
<p>
  <span class="font-weight-bold text-blue text-h6">“ </span>We exists to serve 
  the United Nations Sustainable Development Goals 
  (SDG #3 & #4) - to promote quality education, health, 
  and well-being -
  at scale and together with public, private, and 
  government partnerships we strive to go far in 
  achieving our mission.<span class="font-weight-bold text-blue text-h6"> ”</span>
</p>
        
</v-card-text>
<v-card-text class="font-weight-light">
-Sachin Chaudhry
<br>
Founder, BringChange Foundation Inc.
    

</v-card-text>

</v-card>

</v-container>
</template>
<style scoped>
.second-card {
        border-top-left-radius: 50% ;
        border-top-right-radius: 50% ;
    }

</style>