<script setup>
import { reactive } from 'vue'

const agegroups =reactive({
  
  ageA :"Age 05-11",
  ageB :"Age 12-17"

})
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
    class:"text-blue-darken-3 text-h6 font-weight-bold",
    description:"done"
},
{
  imgsrc:require('@/assets/implement.svg'),
  title:"Implement",
  class:"text-green-accent-3 text-h6 font-weight-bold",
  description:"done"
},
{
  imgsrc:require('@/assets/inspiration.svg'),
  title:"Inspire",
  class:"text-pink-accent-3 text-h6 font-weight-bold",
  description:"done"
},
{
  imgsrc:require('@/assets/empower.svg'),
  title:"Empower",
  class:"text-pink-accent-3 text-h6 font-weight-bold",
  description:"done"
},
{
  imgsrc:require('@/assets/identify.svg'),
  title:"Identity",
  class:"text-pink-accent-3 text-h6 font-weight-bold",
  description:"done"
},
{
  imgsrc:require('@/assets/ondemand.svg'),
  title:"Enable",
  class:"text-pink-accent-3 text-h6 font-weight-bold",
  description:"done"
}
])
console.log(timeline.imgsrc)
</script>

<template>
<v-card class="first-card" >
    <v-img src="@/assets/banner.jpeg" height=100% width="100%">
        <v-card flat color="transparent">
        </v-card>
    </v-img>
</v-card>
<v-container align="center" class="mt-n10 px-0 hidden-sm-and-down">
        <v-card class="second-card mx-auto justify-center">
            
              <v-sheet class="justify-center text-h5 my-8 font-weight-light">
                Impact of COVID-19 on mental health
              </v-sheet>
              <v-sheet class="justify-center text-h5 my-7 font-weight-light">
                <span class=text-red-darken-2>'State of Emergency'</span>
                in child and adolescent mental health, globally
              </v-sheet>
            <v-row>
            <v-col col="6">
            <v-sheet>
                 <v-row>
                    <v-col v-for="age in agegroups"
                    :key=age
                    md="6"
                    sm="6"
                    >
                        <v-sheet class="mx-auto my-5 text-h5 justify-center" flat>
                          <div>
                          Mental Health Emergencies
                          </div>
                          <div class=text-red-darken-2>
                          {{ age }}
                          </div>
                        </v-sheet>
                    </v-col>
                  </v-row>
                </v-sheet>
                <v-sheet>
                Hello
                </v-sheet>
            </v-col>
            </v-row>
        </v-card>
</v-container>
<v-container align="center" class="ma-0 pa-0 hidden-md-and-up">
        <v-card class="second-card mx-auto justify-center">
            
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
</v-container>
<v-container align="center" class="hidden-md-and-up" >
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
