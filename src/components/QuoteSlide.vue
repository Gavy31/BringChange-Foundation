<script setup>
import { useDisplay } from 'vuetify'
import { defineProps } from 'vue';

const { mdAndUp,smAndDown } = useDisplay()
defineProps({anecs:Object})


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
        <v-img cover :src="require('@/assets/homequote/'+anec.img)"></v-img>
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
