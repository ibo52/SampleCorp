<script setup>
import Title from '@/components/Title.vue';
</script>
<template>
    <Title
        title="Who are we?"
        description="We bring our customers' desires to life."
        background-image="../src/tailoring.jpg"
        />

        <div class="container grid grid-cols-2 gap-6 gap-y-8">

            <div class="grid grid-cols-12 col-span-2 gap-6 content-start m-8"><!-- bg-[url('../resources/sample.jpg')] bg-center bg-cover -->

                <h1 class="col-span-12 text-4xl mt-12 mb-2 font-bold">
                    We are stitching the world with our passion...
                </h1>

                <!-- image at left-->
                <img alt="album image" class="col-span-12 lg:col-span-5 lg:row-span-2 rounded-xl object-cover h-auto w-full" src="../resources/patoz.jpg"/>

                <!-- passages between images and albums-->
                <p class="text-xl col-span-12 lg:col-span-7">
                    We’re all about making good, lovely custom clothing to
                    be worn on most memorable days. We’re passionate about
                    changing the way you look at clothing. We want to share
                    our years of experience of cutting and sewing to suit your appearance.
                    It’s time to start wearing clothes that fashionable,
                    share your enthusiasm of trends with us.
                </p>

                <p class="text-xl col-span-12 sm:col-span-7 lg:col-span-4">
                    <b>Lorem ipsum dolor sit amet</b>
                    consectetur adipiscing elit.
                    Sed pulvinar quam et dolor fringilla elementum. Vestibulum
                    accumsan bibendum ante et bibendum. Aliquam et cursus metus.
                    Aliquam erat volutpat. Suspendisse aliquam tellus diam,
                    ac rutrum mi volutpat in. Phasellus vehicula justo felis,
                    vel elementum urna euismod at. Etiam sit amet dolor nibh.
                    Nulla id odio id tellus mattis porta tempor at sem.

                    Duis id massa sit amet tellus dapibus posuere.
                    Vestibulum sed eros eget elit rhoncus pellentesque
                    ac placerat turpis. Suspendisse facilisis, leo et luctus aliquet.
                </p>

                <!--album collage at right-->
                <div class="grid grid-cols-12 col-span-12 sm:col-span-5 lg:col-span-3 gap-4">

                    <img alt="album image" class="col-span-5 rounded-sm object-cover h-auto w-full" src="../resources/sample.jpg"/>
                    <img alt="album image" class="col-span-7 rounded-sm object-cover h-auto w-full" src="../resources/hazelnut.jpg"/>
                    <img alt="album image" class="col-span-12 rounded-sm object-cover h-auto w-full" src="../resources/ordu-cambasi.jpg"/>
                </div>

            </div>
        </div>

</template>