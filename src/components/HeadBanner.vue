<script setup>
 import {defineProps} from 'vue';
 defineProps({
    src: String,
    align: String,
    offsetmd: String,
    cardtype: String
 })
//  const link =(src)=>
//  {
//     return require(src);
//  }
</script>
<template>
<v-container class="pa-0 ma-0 rounded-b-xl" fluid>

    <v-card class="first-card bg-black ma-0 pa-0 ">

        <v-img :src="require('@/assets/' + src)" aspect-ratio="16/9" cover gradient="to top left,rgba(0,0,0,.4),rgba(0,0,0,.4)">
        <v-row align="center first-card small-card" >
        <v-col :align="align" :offset-md="offsetmd">
            <slot/>      
        
        </v-col>
        </v-row>
    </v-img>
</v-card>

    </v-container>
    </template>

<style scoped>
@media screen and (min-width:960px) {
    .first-card {
        border-bottom-left-radius: 25% 2%;
        border-bottom-right-radius: 25% 2%;
        height:80vh;
    }
}
@media screen and (max-width:960px){
    
.small-card{
        height:50vh;
    }
}
</style>