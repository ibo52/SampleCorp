
<template>
    <div class="flex flex-col container">
    <Title
        class="bg-transparent"
        title="Album"
        description="pieces from our memorable moments.."
        background-image="../src/tailoring.jpg"
        />

        <div class="container grid grid-cols-2 gap-6 gap-y-8">

            <!-- left side-->
            <div class="grid grid-cols-12 gap-6 content-center items-start">

                <!-- image at left of sub-->
                <img alt="album image" class="lg:col-span-5 lg:row-span-2 rounded-xl object-cover h-auto w-full" src="../resources/sample.jpg"/>

                <!--album collage at right of sub-->
                <div class="grid grid-cols-12 col-span-12 sm:col-span-5 lg:col-span-3 gap-4">

                    <img alt="album image" class="col-span-5 rounded-sm object-cover h-auto w-full" src="../resources/sample.jpg"/>
                    <img alt="album image" class="col-span-7 rounded-sm object-cover h-auto w-full" src="../resources/sample.jpg"/>
                    <img alt="album image" class="col-span-12 rounded-sm object-cover h-auto w-full" src="../resources/sample.jpg"/>
                </div>
            </div>
            <!-- right side-->
            <div class="grid grid-cols-12 gap-6 content-start m-8"><!-- bg-[url('../resources/sample.jpg')] bg-center bg-cover -->

            <!-- image at left-->
            <img alt="album image" class="col-span-12 lg:col-span-5 lg:row-span-2 rounded-xl object-cover h-auto w-full" src="../resources/sample.jpg"/>

            <!--album collage at right-->
            <div class="grid grid-cols-12 col-span-12 sm:col-span-5 lg:col-span-3 gap-4">

                <img alt="album image" class="col-span-5 rounded-sm object-cover h-auto w-full" src="../resources/sample.jpg"/>
                <img alt="album image" class="col-span-7 rounded-sm object-cover h-auto w-full" src="../resources/sample.jpg"/>
                <img alt="album image" class="col-span-12 rounded-sm object-cover h-auto w-full" src="../resources/sample.jpg"/>
            </div>
            </div>

        </div>




<div id="gallery" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
        </div>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

    </div>
</template>
<script setup>
import Title from './Title.vue';
console.log("masonry init")
var gallery = document.getElementById("gallery")
console.log('gallery'+ gallery)

</script>