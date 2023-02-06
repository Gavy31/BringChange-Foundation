<template>
    <v-row justify="center" align="start" class=ma-0 no-gutters> 
<v-col md="10" cols=12 class="px-0">
<div class="d-md-flex justify-center">
<div class="d-flex justify-center">
<router-link to="/">
    <v-avatar>
        <v-img src='@/assets/water-drop.svg' cover></v-img>
    </v-avatar>
</router-link>
    <div class="align-center">
        <div class="text-h6 font-weight-bold">BringChange</div>
        <div class="text-caption mt-n2 font-weight-bold">foundation</div>
        </div>
</div>
   <v-spacer></v-spacer>
    <div class="text-caption text-center text-md-right" >
            <p>
                A California registered not-for-profit company.
            </p>
            <p>
                © 2023 BringChange Foundation Inc. All rights reserved.
            </p>
            <p class="font-weight-bold">
            Terms & Privacy
            </p>

        </div>
    </div>
    </v-col>

    </v-row>


</template>

<script>
export default {
    name: 'Footer-Inf'
}
</script>