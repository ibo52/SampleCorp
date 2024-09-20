<script setup>
defineProps({
    companyName:{
        type: String,
        required: true
    },
    companyLogo:{
        type: String,
        required: true
    },
    companyDescription:{
        type: String,
        required: true
    },
    companyWebsite:{
        type: String,
        required: true
    },
    websiteOwnerInfo:{
        type: String,
        required: true
    }
})
</script>
<template><!--bg-[url('../resources/sample.jpg')]-->
    <div class="flex flex-row justify-between bg-fuchsia-200 text-center p-2 bg-cover bg-center">

        <!--website owner info-->
        <p class="text-start font-bold text-lg">{{ websiteOwnerInfo }}</p>

        <div class="flex flex-row ml-2 mr-2 lg:ml-8 lg:mr-8">
            <!--website agency link-->
            <a class="flex flex-row items-center gap-4 text-thin text-center text-black" v-bind:href="companyWebsite">
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