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
    <div class="flex flex-col bg-fuchsia-200 text-center p-20 bg-cover bg-center">
<!-- v-bind:style="{'background-image': new URL(backgroundImage)}" -->
            <h1 class="text-4xl font-bold">{{ title }}</h1>
            <p class="text-xl font-extralight">{{ description }}</p>
        </div>
</template>