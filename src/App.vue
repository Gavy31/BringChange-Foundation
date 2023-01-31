<template>
<v-app class="bg-grey-lighten-3">
    <NavBar />
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer absolute color="black" dark>
        <FooterInf />
    </v-footer>
</v-app>
</template>

<script>
import FooterInf from './components/Footer.vue';
// import HomeView from './views/HomeView.vue'
import NavBar from './components/NavBar.vue';
export default {
    name: 'App',
    components: {

         FooterInf,
         NavBar
        // HomeView

    },
    data: () => ({
        
    }),

  
}
</script>
