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
    <v-responsive aspect-ratio="16/9">
    <v-card class="first-card align-center justify-center bg-black" >
    <slot/>
        <v-img :src="require('@/assets/' + src)" >
    </v-img>
    
</v-card>
    </v-responsive>
</template>

<style scoped>
@media screen and (min-width:960px) {
    .first-card {
        border-bottom-left-radius: 20% 5%;
        border-bottom-right-radius: 20% 5%;
    }
}
</style>