<script setup>
import { reactive } from 'vue';
import { useDisplay} from 'vuetify';
import HeadBanner from '@/components/HeadBanner.vue';
import TimelineHome from '@/components/TimelineHome.vue';
import CarouselSlide from '@/components/CarouselQuote.vue';
import CarouselPartner from '@/components/CarouselPartner.vue';

const {mdAndUp} = useDisplay()
// const timelinepart = (imgsrc,title,color,description) =>{

//   return {
//     imgsrc : require(imgsrc),
//     title: title,
//     class:color + " text-h6 font-weight-bold",
//     description:description
//   }

// }
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

<HeadBanner src="banner.jpeg" align="center">
  <div class="text-center text-h6 text-md-h4">“Nurturing wellbeing at scale, globally”</div>
  <div class="text-center text-body-1 text-md-h5 pt-1">There is no health or quality education without mental health</div>
</HeadBanner>

 <!-- <v-card class="first-card" >
    <v-img src="@/assets/banner.jpeg">
    </v-img>
</v-card>  -->
<v-container align="center" :class="mdAndUp ? 'px-0' :'ma-0 pa-0' ">
        <v-card flat :class="mdAndUp ?'second-card my-n10 mx-auto justify-center' : ' ma-0 pa-0 justify-center'">
            
              <v-sheet class="justify-center text-h5 my-8 font-weight-light">
                Impact of COVID-19 on mental health
              </v-sheet>
              <v-sheet class="justify-center text-h5 my-7 font-weight-light">
                <span class=text-red-darken-2>'State of Emergency'</span>
                in child and adolescent mental health, globally
              </v-sheet>
    <v-card flat class="text-h5 font-weight-light">
          <v-row align="center" justify="center">
            <v-col md="4" cols="12">
              <div text--centered>
              Mental Health Emergencies
              </div>
              <div class="pt-6">
                  <v-row align=center justify="center">
                      <v-col cols="5">
                        <div>Age 05-11 
                        </div>
                        <div class="pt-1">24
                        </div>
                      </v-col>
                      <v-col cols="5">
                        <div>Age 05-11 
                        </div>
                        <div class="pt-1" >24
                        </div>
                      </v-col>
                  </v-row>
              </div>
            </v-col>
            <v-col md="4" cols="12">
              <div text--centered>
                Suicide Attempts among Girls
              </div>
              <div class="pt-6">
                  <v-row align=center justify="center">
                      <v-col cols="5">
                        Age 12-17
                      
                        <div class="pt-1"><v-badge icon="mdi-trending-up">51</v-badge><span class="text-caption">%</span>
                        </div>
                      </v-col>
                  </v-row>
              </div>
            </v-col>  
        </v-row>
    </v-card>
    </v-card>
</v-container>
<!-- <v-container align="center" class="ma-0 pa-0 hidden-md-and-up">
        <v-card class="second-card ma-0 pa-0 justify-center">
            
              <v-sheet class="justify-center text-h5 my-7 font-weight-light">
                Impact of COVID-19 on mental health
              </v-sheet>
              <v-sheet class="justify-center text-h5 my-7 font-weight-light">
                Impact of COVID-19 on mental health
              </v-sheet>
              <v-sheet class="justify-center text-h5 my-7 font-weight-light">
                <span class=text-red-darken-2>'State of Emergency'</span>
                in child and adolescent mental health, globally
              </v-sheet>
            <v-row>
            <v-col v-for="age in agegroups"
             :key=age
             md="6"
             sm="6"
             >
             <v-sheet class="mx-auto text-red-darken-2 my-5 text-h5 justify-center" flat>
             <div>
             {{ age }}
             </div>
             <div>
             Mental Health Emergencies
             </div>
             
             </v-sheet>
             <v-sheet>
             </v-sheet>
            
            </v-col>

            </v-row>
        </v-card>
</v-container> -->
<v-container align="center" class="hidden-md-and-up mx-0 px-0" >
<v-sheet class="text-h5">We inspire “systemic change”</v-sheet>

<v-sheet flat align="center"
  v-for="(piece,i) in timeline"
  :key="i"
>
<v-img :src=piece.imgsrc max-width="10%" contain class="py-10"></v-img>
<p :class=piece.class>
{{piece.title}}
</p>
<p>{{ piece.description }}</p>
</v-sheet>
</v-container>
<v-container>
  <TimelineHome/>
</v-container>
<CarouselSlide />

<CarouselPartner />

</template>

<style scoped>
@media screen and (min-width:960px) {
    .first-card {
        border-bottom-left-radius: 20% 5%;
        border-bottom-right-radius: 20% 5%;
    }

    .second-card {
        border-top-left-radius: 50% 50%;
        border-top-right-radius: 50%  50%;
    }

}
</style>
