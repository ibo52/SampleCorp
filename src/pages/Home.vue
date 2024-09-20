<script setup>
import Title from '@/components/Title.vue';
</script>
<template>
    <div class="grid grid-cols-12 w-full lg:h-[39rem] relative">
        <div class="col-span-5 bg-white">

            <Title class="relative bg-transparent my-8 left-16 pr-0"
            title="Your work is unique."
            description="Because we cutting and fitting the fabrics"/>

        </div>

        <!-- right split-->
         <div class="col-span-7 bg-cover bg-center bg-[url('../resources/tailoring.jpg')]">
            <div class="bg-pink-700/80 relative h-full w-full"></div>
         </div>
    </div>
</template>