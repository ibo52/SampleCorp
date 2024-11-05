<script setup>
defineProps({
    companyName:{
        type: String,
        required: false
    },
    companyLogo:{
        type: String,
        required: false
    },
    companyDescription:{
        type: String,
        required: false
    },
    companyWebsite:{
        type: String,
        required: false
    },
    websiteOwnerInfo:{
        type: String,
        required: false
    },
    websiteOwnerLogo:{
        type: String,
        required: false
    }
})
</script>
<template><!--bg-[url('../resources/sample.jpg')]-->
    <div class="flex flex-row justify-between bg-theme-color text-center p-2">

        <!--website owner info-->
        <div class="flex flex-col">
            <img src="../resources/logo.svg" fill="#fff" class="w-40 h-full">
            <p class="text-start font-bold text-lg">{{ websiteOwnerInfo }}</p>
        </div>
        <div class="flex flex-row ml-2 mr-2 lg:ml-8 lg:mr-8">
            <!--website agency link-->
            <a class="flex flex-row items-center gap-4 text-thin text-center" v-bind:href="companyWebsite">
                <!--website agency logo-->
                <img class="w-8 rounded-full" v-bind:src="companyLogo" alt="Company logo">
                <!--website agency info-->
                <div class="flex flex-col">
                    <p class="md:flex md:flex-row hidden font-semibold">
                        <p class="font-thin" >Designed by|</p> {{companyName}}
                    </p>
                    <p class="font-extralight hidden md:flex">{{ companyDescription }}</p>
                </div>
            </a>
        </div>

    </div>
</template>