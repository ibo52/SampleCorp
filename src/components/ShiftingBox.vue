<script setup>
import { reactive } from 'vue';
import ReferenceComment from './ReferenceComment.vue';

const references=[
    {
        "reference":"John smith",
        "img":new URL("@/assets/resources/img/alteration.jpg", import.meta.url).href,
        "comment":"It was a great opportunity to work with her/him."
    },

    {
        "reference":"Jane doe",
        "img":new URL("@/assets/resources/img/tailoring2.jpg", import.meta.url).href,
        "comment":"The dresses have a goergeous design."
    },

    {
        "reference":"Matt hoe",
        "img":new URL("@/assets/resources/img/tailoring.jpg", import.meta.url).href,
        "comment":"Can not be compared to anyone."
    },
    {
        "reference":"Jane Smith",
        "img":new URL("@/assets/resources/img/logo.png", import.meta.url).href,
        "comment":"advanced in terms of fashion and modesty"
    },

    {
        "reference":"Jessie Moe",
        "img":new URL("@/assets/resources/img/sketch3.jpg", import.meta.url).href,
        "comment":"Find by a suggestion of a friend when looking for a capable tailor to make a dress i saw on the net. I totally fell for the dress made."
    }
]

// eslint-disable-next-line no-unused-vars
const props=reactive([
    {
        logoSrc:"",
        name:"",
        description:""
    }
])

</script>
<template>
    <!--scroll view-->
    <div id="viewport" class=" relative w-full h-full items-start flex flex-col overflow-hidden gap-8">
        <!--canvas to put lemeents-->
        <div id="canvas" class="w-max flex gap-8 animate-slider">

            <!--Add reference image and descriptions from work partners or anything-->
                <ReferenceComment class="[&&]:w-[88vw] [&&]:md:w-[31vw] [&&]:xl:w-[22vw] [&&]:2xl:w-[16vw]" v-for="(item, key) in references" v-bind:key="key"
                :img="item.img" :comment="item.comment" :name="item.reference"></ReferenceComment>

            <!--add same references again to make slide animation smooth-->
            <ReferenceComment class="[&&]:w-[44vw] [&&]:md:w-[31vw] [&&]:xl:w-[22vw] [&&]:2xl:w-[16vw]" v-for="(item, key) in references" v-bind:key="key"
                :img="item.img" :comment="item.comment" :name="item.reference"></ReferenceComment>

        </div>

    </div>
</template>