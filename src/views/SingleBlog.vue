<script setup>

import BlogDesign from '@/components/BlogDesign.vue';
</script>

<template>
<BlogDesign srcbanner="1.jpeg" srcavatar="amrit-bakshi.png" name="Amrit Bakshi" desg="This is designation">
<template #button>
Helo
</template>
<template #heading>
Just Checking
</template>
<template #content>
    This is the content slot
    </template>
</BlogDesign>

</template>