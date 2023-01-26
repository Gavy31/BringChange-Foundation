<template>
<v-app>
      <Navbar />
    <v-footer
    app
    color="black"
    dark
    >
      <FooterInf />
    </v-footer>
</v-app>
</template>

<script>
import Navbar from './components/NavBar.vue'
import FooterInf from './components/Footer.vue';

export default {
    name: 'App',

    components: {
        Navbar,
        FooterInf
    },

    data: () => ({
        //
    }),
}
</script>
