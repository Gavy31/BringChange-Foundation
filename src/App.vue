<template>
<v-app class="bg-grey-lighten-1">
    <v-navigation-drawer v-model="drawer" location="right" class="bg-black dark">
      <v-btn icon color="black" @click.stop="drawer = !drawer">
          <v-icon size="large" color="white">
              mdi-close
          </v-icon>
      </v-btn>
      <v-list :items="items"></v-list>
</v-navigation-drawer>
<v-app-bar app color="black" dark>
    <v-img class="ml-15 mr-n2" src="@/assets/water-drop.svg" max-width="5%" contain></v-img>
    <div class="d-flex justify-center">
        <v-card width="200px" class="bg-black my-1">
            <v-card-title class="text-h6 font-weight-bold">BringChange</v-card-title>
            <v-card-text class="text-subtitle mt-n3">
                Foundation
            </v-card-text>
        </v-card>
    </div>
    <v-spacer></v-spacer>
    <!-- <div :v-for="navItem in navItems">
        {{ navItem }}
      </div> -->
    <!-- <v-btn variant="plain" > {{navItem}}</v-btn> -->
    <v-btn variant="plain" class="hidden-sm-and-down"> Mission</v-btn>
    <v-btn variant="plain" class="hidden-sm-and-down"> Initiatives</v-btn>
    <v-btn variant="plain" class="hidden-sm-and-down"> About</v-btn>
    <v-btn variant="plain" class="hidden-sm-and-down"> Blog</v-btn>
    <v-btn class="bg-blue-darken-2" rounded="lg"> Donate</v-btn>
    <v-app-bar-nav-icon class="hidden-md-and-up" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <Navigationdrawer />
</v-app-bar>

    <v-footer app color="black" dark>
        <FooterInf />
    </v-footer>
</v-app>
</template>
<script>
import FooterInf from './components/Footer.vue';
export default {
    name: 'App',
    components: {
  
        FooterInf,

    },
    data: () => ({
        drawer: false,
        group: null,
        items: [{
                title: 'Mission',
                value: 'Mission'
            },
            {
                title: 'Initiatives',
                value: 'Inititatives'
            },
            {
                title: 'About',
                value: 'Inititatives'
            },
            {
                title: 'Blog',
                value: 'Blog'
            },
        ],
    }),

    watch: {
        group() {
            this.drawer = false
        },
    }
}
</script>
