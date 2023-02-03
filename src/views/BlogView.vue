<script setup>
import HeadBanner from '@/components/HeadBanner.vue';

const blogheads=[{src:"1.jpeg",
  Title: "Guardianship Provisions in Indian law for Minors and Persons with Disabilities!"
},{src:"1.jpeg",
  Title: "Guardianship Provisions in Indian law for Minors and Persons with Disabilities!"
},{src:"1.jpeg",
  Title: "Guardianship Provisions in Indian law for Minors and Persons with Disabilities!"
},{src:"1.jpeg",
  Title: "Guardianship Provisions in Indian law for Minors and Persons with Disabilities!"
},{src:"1.jpeg",
  Title: "Guardianship Provisions in Indian law for Minors and Persons with Disabilities!"
},{src:"1.jpeg",
  Title: "Guardianship Provisions in Indian law for Minors and Persons with Disabilities!"
},{src:"1.jpeg",
  Title: "Guardianship Provisions in Indian law for Minors and Persons with Disabilities!"
},{src:"1.jpeg",
  Title: "Guardianship Provisions in Indian law for Minors and Persons with Disabilities!"
},{src:"1.jpeg",
  Title: "Guardianship Provisions in Indian law for Minors and Persons with Disabilities!"
},{src:"1.jpeg",
  Title: "Guardianship Provisions in Indian law for Minors and Persons with Disabilities!"
},{src:"1.jpeg",
  Title: "Guardianship Provisions in Indian law for Minors and Persons with Disabilities!"
},{src:"1.jpeg",
  Title: "Guardianship Provisions in Indian law for Minors and Persons with Disabilities!"
},{src:"1.jpeg",
  Title: "Guardianship Provisions in Indian law for Minors and Persons with Disabilities!"
},{src:"1.jpeg",
  Title: "Guardianship Provisions in Indian law for Minors and Persons with Disabilities!"
}]


</script>

<template>
  <v-container class="pa-0 ma-0 first-card" fluid>
    <v-img :src="require('@/assets/' + 'banner_blog.jpeg')" aspect-ratio="16/9" cover gradient="to top left,rgba(0,0,0,.4),rgba(0,0,0,.4)">
    <v-row align="center first-card small-card" >
    <v-col align="center">
        <slot/>     
        <div class="text-center text-h6 text-md-h4">Blogs and Articles</div>
    
    </v-col>
    </v-row>
</v-img>


</v-container>
    <HeadBanner src="banner_blog.jpeg" align="center">
    <div class="text-center text-h6 text-md-h4">Blogs and Articles</div>
    </HeadBanner>
    <v-container align="center" justify="center" class="mt-n16 pt-n16">
    <v-row class="pa-0 ma-0">
    <v-col 
   md=4 xl=3 cols=12
    v-for="(blogs,i) in blogheads"
    :key="i">
      <v-card to="About" >
      <v-img :src="require('@/assets/Blog/'+blogs.src)">
      </v-img>
      <v-card-text>{{blogs.Title}}</v-card-text> 
      </v-card>
      </v-col>
    </v-row>
    </v-container>
</template>

<style scoped>
@media screen and (min-width:960px) {
    .first-card {
        border-bottom-left-radius: 25% 2%;
        border-bottom-right-radius: 25% 2%;
        height:40vh;
    }
}
@media screen and (max-width:960px){
    
.small-card{
        height:50vh;
    }
}
</style>
  