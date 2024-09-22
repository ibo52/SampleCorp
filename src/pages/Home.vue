<script setup>
import Title from '@/components/Title.vue';
</script>
<template>

    <div class="w-full items-center">

        <div class="flex flex-col
        lg:grid lg:grid-cols-12
        bg-cover bg-center bg-[url('../resources/tailoring.jpg')] bg-fixed h-[29rem] relative"
        >
                    <!--title positioned as absolute-->
                    <Title class="relative lg:absolute mx-5 my-20 lg:m-20 rounded-md lg:p-2 border-cyan-900 border-[12px] overflow-scroll
                    bg-black/20 z-10 text-white mix-blend-color-dodge"
                                title="Your work is unique."
                                description="Because we cutting and fitting the fabrics."/>

                    <!-- left split when enlarged-->
                    <!-- flex box on small screens-->
                    <div class="absolute lg:static flex lg:col-span-5 bg-black/80 h-full w-full mix-blend-overlay">
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
        We’re all about making good, lovely custom clothing to
        be worn on most memorable days. We’re passionate about
        changing the way you look at clothing. We want to share
        our years of experience of cutting and sewing to suit your appearance.
        It’s time to start wearing clothes that fashionable,
        share your enthusiasm of trends with us.
        We’re all about making good, lovely custom clothing to
        be worn on most memorable days. We’re passionate about
        changing the way you look at clothing. We want to share
        our years of experience of cutting and sewing to suit your appearance.
        It’s time to start wearing clothes that fashionable,
        share your enthusiasm of trends with us.
        We’re all about making good, lovely custom clothing to
        be worn on most memorable days. We’re passionate about
        changing the way you look at clothing. We want to share
        our years of experience of cutting and sewing to suit your appearance.
        It’s time to start wearing clothes that fashionable,
        share your enthusiasm of trends with us.
        </p>
        </div>
</div>
</template>