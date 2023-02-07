<script setup>
import { defineProps} from 'vue';

defineProps(['srcbanner', 'srcavatar','name','desg']);

</script>

<template>
<v-container>
<v-card class="py-4 ma-auto">
<v-img :src="require('@/assets/Blog/'+srcbanner)">
</v-img>
<v-card flat class="px-md-12 pt-4">
<v-card-text class="px-2 py-1 text-white bg-blue">
<slot name="button"/>
</v-card-text>
 <v-card-text class="text-md-h5 text-h6 ">
<slot name="heading"/>
</v-card-text>
<v-card-text >
<v-divider thickness="10"></v-divider>
</v-card-text>
<v-card-text class="text-body-2 text-md-body-1">
<slot name="content"/>
</v-card-text>
<v-card-text>
<div class="d-flex align-center">
    <v-avatar>
    <v-img :src="require('@/assets/team/' + srcavatar)" cover></v-img>
    </v-avatar>
    <div class="pl-2">
        <div class="primary--text text-subtitle-1">{{name}}</div>
        <div class="text-caption black--text">Author</div>
    </div>
</div>
</v-card-text>
<v-card-text class="text-body-2 py-1">
{{ desg }}
</v-card-text>
<v-card-text class="text-subtitle-1">Share This Post</v-card-text> -->
    </v-card>
</v-card>
</v-container>



</template>