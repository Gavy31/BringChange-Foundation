<template>
<v-app class="bg-grey-lighten-1">
    <Navigationdrawer />
    <Navbar />

    <v-footer app color="black" dark>
        <FooterInf />
    </v-footer>
</v-app>
</template>

  
  
<script>
import Navbar from './components/NavBar.vue'
import FooterInf from './components/Footer.vue';
import Navigationdrawer from './components/Navigationdrawer.vue';
export default {
    name: 'App',
    components: {
        Navbar,
        FooterInf,
        Navigationdrawer
    },
    data: () => ({
        //
    }),
}
</script>
