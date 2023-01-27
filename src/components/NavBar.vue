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
</template>


<script>
export default {
    data: () => ({
   
    }),
    name: 'NavBar'

}
</script>

<style scoped>
.navbar-button {
    text-align: center;
    color: antiquewhite;
    padding: 0 30px;
    text-align: center;
}
</style>
