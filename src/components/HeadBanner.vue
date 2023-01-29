<script setup>
 import {defineProps} from 'vue';
 defineProps({
    src: String
 })
//  const link =(src)=>
//  {
//     return require(src);
//  }
</script>
<template>
    <v-card class="first-card align-center justify-center" >
    <slot/>
        <!-- <v-img :src="require('@/assets/' + src)" >
        <span class="text-white text-h1">Hello</span>
    </v-img> -->
    
</v-card>
</template>

<style scoped>
@media screen and (min-width:960px) {
    .first-card {
        border-bottom-left-radius: 20% 5%;
        border-bottom-right-radius: 20% 5%;
    }
}
</style>