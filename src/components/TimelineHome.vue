<script setup>
import { reactive } from 'vue'

const timeline=reactive([{
  imgsrc: require("@/assets/innovation.svg"),
  title: "Innovate",
  class:"text-blue-darken-3 text-h5 font-weight-bold",
  description:"Innovate / collaborate for solutions that foster emotional resilience and wellbeing at scale"
},
{
imgsrc:require('@/assets/implement.svg'),
title:"Implement",
class:"text-green-accent-3 text-h5 font-weight-bold",
description:"Implement evidence-based, globally acclaimed solutions that drive systemic change"
},
{
imgsrc:require('@/assets/inspiration.svg'),
title:"Inspire",
class:"text-pink-accent-3 text-h5 font-weight-bold",
description:"Inspire educators/leaders/administrators to introduce 2-3 minutes of self-reflection time daily for their community members"
},
{
imgsrc:require('@/assets/empower.svg'),
title:"Empower",
class:"text-pink-accent-3 text-h5 font-weight-bold",
description:"Empower individuals to self-reflect and express their thoughts, feelings, and emotions by providing them with trusted and secure space"
},
{
imgsrc:require('@/assets/identify.svg'),
title:"Identity",
class:"text-pink-accent-3 text-h5 font-weight-bold",
description:"Identify at-risk individuals and the roots of risks in the environment ( personal, academic, professional, social ) proactively"
},
{
imgsrc:require('@/assets/ondemand.svg'),
title:"Enable",
class:"text-pink-accent-3 text-h5 font-weight-bold",
description:"Enable on-demand care for those who need the most, bridge supply-demand gap in the wellbeing ecosystem, and foster prevention and early intervention at scale"
}
])
console.log(timeline.imgsrc)
</script>
<template>
  <v-sheet class="text-md-h5 my-4 text-center" color="grey-lighten-3">We inspire “systemic change”</v-sheet>
    <v-timeline class="hidden-sm-and-down justify-center ">
      <v-timeline-item 
      v-for="(piece,i) in timeline"
      :key="i"
      size="large"
      class="justify-center">
        <template v-slot:icon>
          <v-avatar color="grey-lighten-3 rounded" :image=piece.imgsrc size="x-large"></v-avatar>
        </template>
        <v-card class="elevation-2">
          <v-card-title :class=piece.class>
            {{piece.title}}
          </v-card-title>
          <v-card-text>{{piece.description}}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-divider></v-divider>
  </template>