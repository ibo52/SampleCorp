<script setup>
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props=defineProps({
    img:{
        type: String,
        required: false
    },
    name:{
        type: String,
        required: false
    },
    comment:{
        type: String,
        required: false
    }
})
</script>
<template>
    <div class="items-center gap-4 p-2 w-full h-full grid grid-cols-3 bg-theme-background-color-mute rounded-2xl">

        <!--
        <div class="bg-cover bg-center bg-[url('src/resources/alteration.jpg')] w-40 h-40 gap-8"></div>
        -->
        <!--image or logo of reference-->
        <img :src="props.img" class="w-full h-full object-contain self-center block col-span-1">

        <!--commments of reference-->
       <div class="col-span-2 flex flex-col self-start gap-1">
        <p class="text-xl font-bold self-end"><FontAwesomeIcon :icon="faQuoteLeft"/> {{ name }} <FontAwesomeIcon :icon="faQuoteRight"/> </p>
        <p class>{{ comment }}</p>
       </div>
    </div>
</template>