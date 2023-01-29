<script setup>
import HeadBanner from '@/components/HeadBanner.vue';
</script>

<template>
    <HeadBanner>
        <v-card class="first-card justify-center align-center" >
    <v-img src="@/assets/banner_mission.jpg">
    </v-img>
</v-card>
    </HeadBanner>

    <v-container align="center" class="mt-n10 px-0 hidden-sm-and-down">
        <v-card class="second-card mx-auto justify-center">
            
              <v-sheet class="justify-center text-h5 my-8 font-weight-light">
                Impact of COVID-19 on mental health
              </v-sheet>
              <v-sheet class="justify-center text-h5 my-7 font-weight-light">
                <span class=text-red-darken-2>'State of Emergency'</span>
                in child and adolescent mental health, globally
              </v-sheet>
            <v-row>
            <v-col col="6">
            <v-sheet>
                 <v-row>
                    <v-col v-for="age in agegroups"
                    :key=age
                    md="6"
                    sm="6"
                    >
                        <v-sheet class="mx-auto my-5 text-h5 justify-center" flat>
                          <div>
                          Mental Health Emergencies
                          </div>
                          <div class=text-red-darken-2>
                          {{ age }}
                          </div>
                        </v-sheet>
                    </v-col>
                  </v-row>
                </v-sheet>
                <v-sheet>
                Hello
                </v-sheet>
            </v-col>
            </v-row>
        </v-card>
</v-container>
</template>
<style scoped>
.second-card {
        border-top-left-radius: 50% ;
        border-top-right-radius: 50% ;
    }

</style>