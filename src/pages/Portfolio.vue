<script setup>
import Gallery from '@/components/Gallery.vue';
import Title from '@/components/Title.vue';
</script>
<template>

    <div class="flex flex-col w-full items-center gap-20 pt-20">

        <div class="grid grid-cols-12 w-full h-full">
            <div class="col-span-5 h-dvh w-full
            bg-[url('/src/assets/resources/img/portfolio.jpg')] bg-fixed bg-center">

            </div>
            <div class="col-span-7">
                <p class="text-6xl pt-32 text-center font-bold font-dancing-script">Fatoş Moda Evi</p>
                <p class=" text-2xl m-2 text-center">Is a small business for all your tailoring needs</p>
            </div>
        </div>
        <!-- parallax-->

        <div class="grid grid-cols-12 w-full h-full gap-8">

            <div class="col-span-7">
                <p class="text-6xl pt-32 text-center font-bold font-dancing-script">Since 2005</p>
                <p class=" text-2xl m-2 text-center">Working with passion through the years..</p>
            </div>

            <div class="col-span-5 h-dvh w-full
            bg-[url('/src/assets/resources/img/taylor-swift-header-2.jpg')] bg-fixed bg-center -rotate-12">



            <img src="/src/assets/resources/img/sample-p2.jpg" class="absolute inset-0 bg-fixed w-fit md:w-8/12 bg-center rotate-[24deg]">

            <img src="/src/assets/resources/img/marilyn-monroe.jpg" class="absolute inset-0 translate-y-[8rem]  md:inset-32 bg-fixed w-fit md:w-7/12 bg-center rotate-[36deg]">

            <img src="/src/assets/resources/img/bihter-ziyagil.jpg" class="absolute inset-0 translate-y-[16rem] md:inset-64 md:-translate-x-[8rem] md:translate-y-[8rem] bg-fixed w-fit md:w-5/12 bg-center ">
            </div>
        </div>
        <!-- parallax-->

        <Gallery></Gallery>
    </div>
</template>