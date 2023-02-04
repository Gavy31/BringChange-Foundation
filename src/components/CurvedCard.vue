<script setup>

import { useDisplay} from 'vuetify';
const {mdAndUp} = useDisplay()

</script>
<template>
<v-container align="center" :class="mdAndUp ? 'px-0 mb-10' :'ma-0 pa-0' ">
    <v-card height=auto flat :class="mdAndUp ?'second-card my-n10 mx-auto justify-center' : 'ma-0 pa-0 justify-center'">
    <slot/>
    </v-card>
</v-container>

</template>

<style scoped>
.second-card {
        border-top-left-radius: 50% ;
        border-top-right-radius: 50% ;
    }

</style>