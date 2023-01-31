<script setup>

import { defineProps } from 'vue';

defineProps(['Name','Exmenu']);


</script>

<template>
<v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          variant="plain"
          v-bind="props"
        >
          {{Name}}

        </v-btn>
      </template>

      <v-list class="bg-black dark">
        <v-list-item
          v-for="(item, index) in Exmenu"
          :key="index"
          :to="item.value"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

