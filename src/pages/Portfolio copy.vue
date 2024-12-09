<script setup>
import MasonryGallery from '@/components/MasonryGallery.vue';
import Title from '@/components/Title.vue';
</script>
<template>

    <div class="w-full items-center">

        <div class="flex flex-col
        lg:grid lg:grid-cols-12
        bg-cover bg-center bg-[url('../assets/resources/img/tailoring.jpg')] bg-fixed h-[29rem] relative"
        >
                    <!--title positioned as absolute-->
                    <Title class="m-20 lg:p-2 absolute bg-black/20 text-white backdrop-brightness-100"
                                title="Your work is unique."
                                description="Because we cutting and fitting the fabrics."/>

                    <!-- left split when enlarged-->
                    <!-- flex box on small screens-->
                    <div class="flex lg:col-span-5 bg-black/80 h-full w-full mix-blend-overlay overflow-scroll">
                    </div>

                    <!-- right split when enlarged-->
                    <div class="hidden lg:flex lg:col-span-7
                    bg-pink-800/90 mix-blend-overlay">
                    </div>
        </div>
        <div class="mx-8 my-8 gap-8">

            <Title
            class="bg-transparent"
            title="Let us introduce Ourselves"/>
        <p>
            We’re all about making good, lovely custom clothing to
        be worn on most memorable days. We’re passionate about
        changing the way you look at clothing. We want to share
        our years of experience of cutting and sewing to suit your appearance.
        It’s time to start wearing clothes that fashionable,
        share your enthusiasm of trends with us.
        </p>
        </div>

        <MasonryGallery></MasonryGallery>
</div>
</template>