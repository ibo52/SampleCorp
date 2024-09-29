<script setup>
import { reactive } from 'vue';
import Title from '@/components/Title.vue';
import WidgetIconBox from '@/components/WidgetIconBox.vue';

const props=reactive({
  Title:{
        title:"Your work is unique.",
        description:"Because we cutting and fitting the fabrics.",
    }
})

const whatDoWeDo=reactive(
    [
        {
            title:"Cutting",
            description:"we cut the fabrcs to suit your needs"
        },
        {
            title:"brief title2",
            description:"we prepare the needs to solidify your idea"
        },
        {
            title:"brief title 3",
            description:"we prepare the needs to solidify your idea"
        },
        {
            title:"brief title 4",
            description:"we prepare the needs to solidify your idea longer script text lorem ipsum dolom sit amet lorem ipsum"
        },
        {
            title:"brief title 5",
            description:"we prepare the needs to solidify your idea longer script text lorem ipsum dolom sit amet lorem ipsum"
        }
    ]
)

</script>
<template>

    <div class="w-full items-center">

        <div class="flex flex-col
        lg:grid lg:grid-cols-12
        bg-cover bg-center bg-[url('../resources/tailoring.jpg')] bg-fixed h-[29rem] relative"
        >
                    <!--title positioned as absolute-->
                    <Title class="relative lg:absolute mx-5 my-20 lg:m-20 rounded-md lg:p-2 border-cyan-900 border-[12px] overflow-scroll
                    bg-black/20 z-0 text-white mix-blend-color-dodge"
                            :title=props.Title.title
                            :description=props.Title.description
                    />

                    <!-- left split when enlarged-->
                    <!-- flex box on small screens-->
                    <div class="absolute lg:static flex lg:col-span-5 bg-black/80 h-full w-full mix-blend-overlay">
                    </div>

                    <!-- right split when enlarged-->
                    <div class="hidden lg:flex lg:col-span-7
                    bg-pink-800/90 mix-blend-overlay">
                    </div>
        </div>

        <!--context-->
        <div class="gap-8 p-4 lg:p-8 bg-gradient-to-br from-white from-30% via-sky-300 via-50% to-purple-400 to-70% bg-fixed animate-gradient-xy">

            <!--introduction-->
            <div class="flex flex-col lg:grid lg:grid-cols-12 bg-transparent gap-8">

                <!-- left for visual-->
                <!-- todo: image gallery maybe-->
                <div class="flex flex-col lg:col-span-5">

                    <img src="../resources/tailoring2.jpg"
                    class="rounded-md">


                </div>

                <!-- right for context-->
                <div class="flex flex-col lg:col-span-7">

                    <p class="bg-transparent text-center p-8 lg:pt-40 text-5xl">
                        Let us introduce Ourselves.
                    </p>

                    <p class="text-lg">
                        We’re all about making good, lovely custom clothing to
                        be worn on most memorable days. We’re passionate about
                        changing the way you look at clothing. We want to share
                        our years of experience of cutting and sewing to suit your appearance.
                        It’s time to start wearing clothes that fashionable,
                        share your enthusiasm of trends with us.

                    </p>


                </div>
            </div>

        <!-- brief explanation of what company does-->
        <div class="mt-16 lg:mt-32 gap-8 flex flex-col lg:grid lg:grid-cols-12">
        <!-- left side-->
        <div class="col-span-5">

            <p class="text-4xl p-8 lg:pt-40">What Do We Do</p>

            <p class="text-lg">
                        We’re all about making good, lovely custom clothing to
                        be worn on most memorable days. We’re passionate about
                        changing the way you look at clothing. We want to share
                        our years of experience of cutting and sewing to suit your appearance.
                        It’s time to start wearing clothes that fashionable,
                        share your enthusiasm of trends with us.

            </p>

        </div>

        <!-- right side-->
         <div class="gap-8 items-center flex flex-col col-span-7 lg:grid lg:grid-rows-3">


            <div class="gap-8 items-center flex flex-col col-span-7 lg:grid lg:grid-cols-3">

                <div></div>
                <WidgetIconBox
                id="whatdowedo1"
                class="col-span-2"
                title=""
                description=""
                />
                <WidgetIconBox
                id="whatdowedo2"
                class="col-span-2"
                title=""
                description=""
                />
                <div></div>
                <div></div>
                <WidgetIconBox
                id="whatdowedo3"
                class="col-span-2"
                title=""
                description=""
                />
            </div>
         </div>


        </div>
    </div>
</div>
</template>