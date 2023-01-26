<template>
  <v-app-bar app color="black" dark>
  <v-container class="d-flex flex-row ">
    <v-btn icon="">Title</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn variant="plain"> Mission</v-btn>
      <v-btn  variant="plain"> Initiatives</v-btn>
      <v-btn  variant="plain"> About</v-btn>
      <v-btn variant="plain"> Blog</v-btn>
      <v-btn 
      class="bg-blue-darken-2"
      rounded="lg" size="small" ma-2 pa-2> Donate</v-btn>
      <v-app-bar-nav-icon class="nav-bar-icon"></v-app-bar-nav-icon>
    </v-toolbar-items>

  </v-container>
  </v-app-bar>
    
</template>

<script>

export default {
  name: 'NavBar'

}
</script>
<style scoped>

.navbar-button{
  text-align: center;
  color:antiquewhite;
  padding: 0 30px;
  text-align: center;
}

</style>
