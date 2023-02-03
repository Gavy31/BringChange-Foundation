<script setup>
import { useDisplay } from 'vuetify'
const { mdAndUp,smAndDown } = useDisplay()

const anecs=[{
  
  img:"yana-kachurina.png"
  ,quote:"We are privileged to have BringChange Founation among our grantees. By leveraging the technology, the organization is creating a systemic shift in the way we see and prevent mental health issues. This is of upmost importance, especially in times of isolation and uncertainty that we are all going through. By focusing on youth, the organization is bringing early intervention, preventing further escalation and contributing to a brighter and healthier future for all. This is in line with the Sofina Covid Solidarity Fund mission which seeks to address the adverse consequences the global Covid-19 pandemic has created in education and healthcare sectors."
  ,Name:"Yana Kachurina"
  ,desg:"Management Committee Member, Sofina Covid Solidarity Fund"
},{
  
  img:"jack-sim.jpeg"
  ,quote:"School's stress on the mental health of children can be a silent killer. Teens suicide in Singapore jumped 37.5% in 2020. We need TrustCircle to detect early signs and prevent an explosion of mental health issues among our kids."
  ,Name:"Prof Dr Jack Sim"
  ,desg:"Founder of the World Toilet Organisation and BOP HUB"
},{
  
  img:"bill-drayton.jpg"
  ,quote:"TrustCircle team is developing such powerful tools that are putting power, responsibility, and initiative in the hands of everyone is huge and hugely important contribution"
  ,Name:"Bill Drayton"
  ,desg:"Founder/CEO of Ashoka: Innovators for the Public"
},{
   
  img:"dr-tara.jpg"
  ,quote:"The increasing number of emotional problems among today’s youth combined with their preference to use technology makes TrustCircle an ideal platform for this population."
  ,Name:"Dr. R. Thara"
  ,desg:"Chairman, SCARF - The WHO Collaborating Centre (Mental Health Research, India)"
},{
  
  img:"janet-c-salazar.jpeg"
  ,quote:"TrustCircle is at the forefront of ensuring emotional well-being of our youth at scale, and FSUN is committed to fully support this life-changing initiative."
  ,Name:"Janet C Salazar"
  ,desg:"President and Executive Chairman Foundation for the Support for the United Nations"
},{
  img:"vandana-gopikumar.jpg"
  ,quote:"TrustCircle provides humanistic care and engagement, evidence based integrated care pathways and digital technology - all coming together to help scale models and reach the under-serviced and poorly resourced."
  ,Name:"Dr. Vandana Gopikumar"
  ,desg:"Co-founder -The Banyan and The Banyan Academy of Leadership in Mental Health (BALM)"
},{
  img:"steve.png"
  ,quote:"TrustCircle is one of the most powerful tools I have ever seen for schools to grow students' social emotional wellbeing, it has the potential to inform, transform, and even save lives."
  ,Name:"Stephen Anderson"
  ,desg:"Assistant Principal, Gale Ranch Middle School, CA San Ramon Unified School District, USA"
}]

</script>

<template>
<v-container :class="smAndDown ? 'mx-0 px-0':'mx-auto'">
    <v-carousel
      cycle
      :show-arrows="false"
      height=auto
      hide-delimiter-background="true"
      delimiter-icon="mdi-circle-small"
    >
  <v-card height=auto flat align=center>
<v-carousel-item
v-for="(anec,i) in anecs"
:key="i"
height=auto
>
  
    <v-row align="center" justify=center>
      <v-col md=3 cols="12" >
        <v-avatar size="150" class="mx-0 my-2">
        <v-img :src="require('@/assets/homequote/'+anec.img)"></v-img>
        </v-avatar>
      </v-col>
      <v-col md=9 cols="12" >
     
    <v-card :align="mdAndUp ? 'start': 'center'" class="mx-2 my-2" flat>
       <span class="font-weight-bold text-h5 text-blue" >
        “
       </span>
       <span class="text-body-1">
       {{anec.quote}}&nbsp;
       <span class="font-weight-bold text-h5 text-blue">”</span>
       </span>
      </v-card>
      <v-card  :align="mdAndUp ? 'start': 'center'" class="text-subtitle-2 mx-2 mt-5 mb-10 text-blue" flat>
        {{ anec.Name }}
      <div class="text-caption text-black">
      {{anec.desg}}
      </div>
      </v-card>
      </v-col>
    </v-row>
      </v-carousel-item>
  </v-card>
  </v-carousel>

</v-container>

</template>
