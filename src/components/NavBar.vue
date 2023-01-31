<script setup>
import { ref } from 'vue'
import ExtendMenu from './ExtendMenu.vue';

const drawer =ref(false);
const navbuttons=[{
                title: 'Home',
                value: '/'
            },
            {
                title: 'Mission',
                value: 'Mission'
            },
            {
                title: 'Blog',
                value: 'Blog'
        }]
const Inititatives=[{
                title: 'Unicef',
                value: 'Unicef'
            },
            {
                title: 'Malaysia',
                value: 'Malaysia'
            }]
</script>

<template>
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
        <!-- <v-btn :v-for="(nutton,i) in navbuttons"
        :key="i">
        {{ nutton.title }}
      </v-btn> -->
        <!-- <v-btn variant="plain" to="/" class="hidden-sm-and-down"> -->
          <v-btn variant="plain" to="/" class="hidden-sm-and-down"> Home</v-btn>

<v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          variant="plain"
          v-bind="props"
        >
          Initiatives
        </v-btn>
      </template>

      <v-list class="bg-black dark">
        <v-list-item
          v-for="(item, index) in Inititatives"
          :key="index"
          :to="item.value"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        <v-btn  variant="plain" to="Mission" class="hidden-sm-and-down"> Mission</v-btn>
        <!-- <v-btn variant="plain" class="hidden-sm-and-down"> About</v-btn> -->
        <ExtendMenu Name="About" :Exmenu=Inititatives />
        <v-btn variant="plain" class="hidden-sm-and-down"> Blog</v-btn>
        <v-btn class="bg-blue-darken-2" rounded="lg"> Donate</v-btn>
        <v-app-bar-nav-icon class="hidden-md-and-up" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <Navigationdrawer />
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" location="right" class="bg-black dark">
        <v-btn icon color="black" @click.stop="drawer = !drawer">
            <v-icon size="large" color="white">
                mdi-close
            </v-icon>
        </v-btn>
        <v-list>
        <v-list-item
          v-for="(item,i) in navbuttons"
          :key="i"
          :to="item.value"
          link
          >
          <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>


// <script>
// export default {
//   name: 'App',
//     components: {

//     },
//     data: () => ({
//         drawer: false,
//         group: null,
//         items: [{
//                 title: 'Home',
//                 value: '/'
//             },
//             {
//                 title: 'Mission',
//                 value: 'Mission'
//             },

//             {
//                 title: 'Initiatives',
//                 value: 'Inititatives'
//             },
//             {
//                 title: 'About',
//                 value: 'Inititatives'
//             },
//             {
//                 title: 'Blog',
//                 value: 'Blog'
//             },
//         ],
//     }),

//     watch: {
//         group() {
//             this.drawer = false
//         },
//     },

// }
// </script>

<style scoped>
.navbar-button {
    text-align: center;
    color: antiquewhite;
    padding: 0 30px;
    text-align: center;
}
</style>
