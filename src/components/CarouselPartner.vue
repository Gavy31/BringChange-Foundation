<script setup>

</script>

<template>
<v-card class="ma-0 pa-0" fluid height=200
align="center">
<v-card flat align="center" class="text-md-h5 text-h6 pa-4 ">
Partners
</v-card>
<v-window align="center" class="hidden-sm-and-down">
<v-row align="center" justify="center">
  <v-col 
  v-for="i in 5"
  :key="i" md="2" >
        <v-img src= '@/assets/Partners/kbs.png' ></v-img>
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
v-for="i in 5"
:key="i"
height="auto"
>
    <v-row align="center" justify=center>
      <v-col sm=12>
        <v-img max-height="100" src='@/assets/Partners/kbs.png' contain ></v-img>
      </v-col>
     </v-row>
</v-carousel-item>
</v-card>
</v-carousel>
</v-card>





</template>
