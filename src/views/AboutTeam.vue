<script setup>

const team=[{ Name:"Susan Goldman",url:"susan-goldman.png",D1:"Board Member",D2:"Educator",
loc:" USA "},{ Name:"Sachin Chaudhry",url:"sachin-chaudhry.png",D1:"Board Member",D2:"Founder, The Ashoka Fellow",
loc:" USA "},{ Name:"Sunil Sharma",url:"sunil-sharma.png",D1:"Board Member",D2:"Ex-Google,Ex-Microsoft,Spotify",
loc:" USA "},{ Name:"Prof. Dr. Jack Sim",url:"jack-sim.png",D1:"Board Advisor",D2:"Founder - The World Toilet Organisation & BOP HUB",
loc:" USA "},{ Name:"Sumitra Pasupathy",url:"sumitra-pasupathy.png",D1:"Board Advisor",D2:"Managing Director Global Partnerships,Ashoka",
loc:"  Singapore "},{ Name:"Matthew Lorin",url:"matthew-lorin.png",D1:"Scale & Strategic Partnerships, Americas",
loc:" USA "},{ Name:"Brian Alston",url:"brian-alston.png",D1:"Scale & Strategic Partnerships, Americas, Africa",
loc:" USA "},{ Name:"Shiva Prasad",url:"shiva-prasad.png",D1:"Product / Engineering",
loc:" India "},{ Name:"Bharat Ranjan",url:"bharat-ranjan.png",D1:"Product / Engineering",
loc:" India "},{ Name:"Tanya",url:"tanya-ranjan.png",D1:"Product / Engineering",
loc:" India "},{ Name:"Shifali Malhotra",url:"shifali-malhotra.png",D1:"Product / Quality",
loc:" India "},{ Name:"Amrit Bakshi",url:"amrit-bakshi.png",D1:"Well-Being / Research",
loc:" India "},{ Name:"Prachi Arshi",url:"prachi-arshi.png",D1:"Well-Being / Content",
loc:" India "},{ Name:"Sakshi",url:"sakshi.png",D1:"Design / Outreach",
loc:" India "},{ Name:"Lakshya",url:"lakshya.png",D1:"Design / Outreach",
loc:" USA "}]

</script>

<template>
<v-container >
<v-sheet align="center" justify="center" class="text-h5 my-5 bg-grey-lighten-3">
Mission-Driven Team
</v-sheet>
<v-row align="center" justify="center">
<v-col
v-for="(mem,i) in team"
:key="i"
md="4" sm="6" col="12" >
    <v-card class="rounded-xl"  align="center" min-height="270">
    <v-avatar color="blue-darken-2" class="my-2" size="138">
        <v-avatar size="130">
      <v-img
        :src="require('@/assets/team/'+mem.url)" min-height="80vh"></v-img>
        </v-avatar>
    </v-avatar>
   <div class="text-subtitle-1"> {{mem.Name}} </div>
   <div class="text-subtitle-2"> {{mem.D1}} </div>
   <div class="text-caption"> {{mem.D2}} </div>
   <div class="text-caption"> {{mem.loc}} </div>
</v-card>
</v-col>
</v-row>
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