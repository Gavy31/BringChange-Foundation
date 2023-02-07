<script setup>
import {ref} from 'vue';

const firstName=ref('');
const lastName=ref('');
const email=ref('');
const message=ref('');

const rules = (firstName) =>{
    if(firstName) return
    return "Please Provide us with your name"

}
</script>

<template>
<v-row class="ma-0 pa-0">
<v-col cols="12" md="5">
    <v-card flat>
    <v-card-text class="text-md-h5 text-h6 text-black ">
        Want to be part of our noble mission?
    </v-card-text>
    <v-card-text class="text-body-2 text-md-body-1 text-black">
        
        "Simply fill in the form below and we will reach out to you."
          
    </v-card-text>
    
    </v-card>
</v-col>
<v-col cols=12 md="5">
    <v-form @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules=rules
        label="First name"
        class="bg-white"
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        :rules=rules
        label="Last name"
        class="bg-white"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules=rules
        label="E-Mail"
        class="bg-white"
      ></v-text-field>
      <v-text-field
        v-model="message"
        :rules=rules
        label="Message"
        class="bg-white"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
</v-col>
<v-spacer></v-spacer>
<v-col md="5" cols="12" class="hidden-sm-and-down pa-0">
<v-img src="@/assets/contactus.png" contain></v-img>
</v-col>
</v-row>

</template>