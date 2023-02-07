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
    const Dropdowns=[{
                title:'Initiatives',
                value:[{
                    title: 'Unicef',
                    value: 'Unicef'
                },
                {
                    title: 'Malaysia',
                    value: 'Malaysia'
                }]},{
                title:'About',
                value:
                [{
                title: 'Partners',
                value: 'Partners'
                
                },
                {
                    title: 'Team',
                    value: 'Team'
                },
                {
                    title: 'Contact',
                    value: 'Contact'
                }]}
            ]

</script>

<template>
<v-navigation-drawer v-model="drawer" app class="bg-black" location="right">
        <v-btn icon color="black" @click.stop="drawer = !drawer">
            <v-icon size="large" color="white">
                mdi-close
            </v-icon>
        </v-btn>
        <v-list>
        
            <v-list-item v-for="(item,i) in navbuttons" :key="i" :to= item.value>
            <v-list-item-title> {{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
        
        <v-list
          dense
          nav
        >
            <v-list-group
            v-for="(dps,i) in Dropdowns"
            :key="i">
              <template v-slot:activator="{ props }">
                <v-list-item
                v-bind="props">
                {{dps.title}}
                </v-list-item>
              </template>
              <v-list-item
                v-for="(item,i) in dps.value"
                :key="i" :to="item.value">
                {{item.title}}
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
<v-app-bar app color="black" dark>
<v-row justify="center" class="mx-0">
    <v-col justify=center md="10" cols="12" class="px-0">
    
    <div class="d-flex" justify="center">
    <router-link to="/">
                <v-avatar >
                <v-img src="@/assets/water-drop.svg" cover></v-img>
                </v-avatar>
    </router-link>
                
        <div justify="center">
        <div class="text-h6 font-weight-bold">BringChange</div>
        <div class="text-caption mt-n2 font-weight-bold">foundation</div>
        </div>
    <v-spacer></v-spacer>

        <v-sheet class="bg-black text-white hidden-sm-and-down">
          <v-btn variant="plain" to="/" > Home</v-btn>
          <v-btn  variant="plain" to="Mission" class="hidden-sm-and-down"> Mission</v-btn>
          <ExtendMenu Name="Initiatives" :Exmenu="Inititatives"/>
         <ExtendMenu Name="About" :Exmenu="About" />
        <v-btn variant="plain" to="Blog" class="hidden-sm-and-down"> Blog</v-btn>
        <v-btn class="bg-blue-darken-2" rounded="lg" size="small" align=center> Donate</v-btn>
        </v-sheet>
        <v-app-bar-nav-icon class="hidden-md-and-up" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </div>
    </v-col>
</v-row>
    </v-app-bar>
</template>



