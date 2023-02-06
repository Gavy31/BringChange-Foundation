<script setup>
 import {defineProps} from 'vue';
 defineProps({
    src: String,
    offsetmd: String,
    cardtype: String
 })
//  const link =(src)=>
//  {
//     return require(src);
//  }
</script>
<template>
<v-container class="pa-0 ma-0 " fluid height="auto">

    <v-card class="first-card bg-black ma-0 pa-0" height="auto">

        <v-img height="80vh" :src="require('@/assets/' + src)" cover gradient="to top left,rgba(0,0,0,.4),rgba(0,0,0,.4)">
<v-row justify="center" align="center" style="height :100%">
        <v-col :offset-md="offsetmd">
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
    }
}
</style>