<script setup>
defineProps({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    backgroundImage:{
        type: String,
        required: false
    }
})
</script>
<template><!--bg-[url('../resources/sample.jpg')]-->
    <div class="flex flex-col font-dancing-script text-center py-10 text-theme-text-color
     drop-shadow-[0_4.8px_1.2px_rgba(255,0,255,0.8)]">
<!-- v-bind:style="{'background-image': new URL(backgroundImage)}" -->
            <h1 class="text-8xl lg:text-9xl font-bold">{{ title }}</h1>
            <p class="text-4xl lg:text-5xl font-light">{{ description }}</p>
    </div>
</template>