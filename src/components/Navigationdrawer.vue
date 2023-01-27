<template>
<v-navigation-drawer v-model="drawer" location="right" class="bg-black dark">
    <v-btn icon color="black" @click.stop="drawer = !drawer">
        <v-icon size="large" color="white">
            mdi-close
        </v-icon>
    </v-btn>
    <v-list :items="items"></v-list>
</v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
        items: [{
                title: 'Mission',
            },
            {
                title: 'Initiatives',
            },
            {
                title: 'About',
            },
            {
                title: 'Blog',
            },
        ],
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
    name: 'NavigationDrawer'
}
</script>
