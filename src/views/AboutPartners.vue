<script setup>
import HeadBanner from '@/components/HeadBanner.vue';


</script>

<template>
<HeadBanner src="banner_Partners.jpg">
</HeadBanner>
<v-container align="center" class="ma-0 pa-0 hidden-md-and-up">
        <v-card class="second-card mx-auto justify-center">
        </v-card>
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