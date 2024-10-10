<script setup lang="ts">
import { reactive } from 'vue';
import BusinessCard from '@/components/BusinessCard.vue';
import Title from '@/components/Title.vue';

const props=reactive({
    title:"Make an appointment.",
    Title:{
        title:"Contact us.",
        description:"Tell us about what you have in mind.",
    },
    BusinessCard:{
        name:"Fatoş Moda Evi",
        mail:"fatoş@fmodaevi.com",
        phone:"5AB XXX XX XX",
        address:"Fevzi Çakmak, İpekyolu Cd. no 10, 52300 Ünye/Ordu",
        facebook:"https://www.facebook.com/people/Fato%C5%9Fmodaevi-%C3%BCnye/100085871311430/"
    },
    googleMapsLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.84787304175455!2d37.292554421067415!3d41.12216926852457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4062bb8efe8668ff%3A0x6debd9bf1d093f09!2sFato%C5%9Fmodaevi!5e0!3m2!1str!2str!4v1726653321807!5m2!1str!2str"
})
</script>

<template>
    <div class="flex flex-col items-center w-full bg-cover bg-center bg-fixed bg-[url('../resources/tailoring2.jpg')]">

        <Title
        class="text-gray-800"
        :title=props.Title.title
        :description=props.Title.description
        />

        <div class="items-center w-full lg:mt-[8rem] bg-white">

            <div class="flex flex-col lg:grid lg:grid-cols-12 justify-items-center items-center">

                <!--left split: 40%-->
                <div class="flex flex-col lg:col-span-5 text-4xl font-bold gap-8 m-8 lg:m-0 lg:ml-24">

                    <h1 class="text-fuchsia-600">
                        {{ props.title }}
                    </h1>

                    <BusinessCard
                    :company-name=props.BusinessCard.name
                    :mail=props.BusinessCard.mail
                    :phone=props.BusinessCard.phone
                    :address=props.BusinessCard.address
                    :facebook=props.BusinessCard.facebook
                    />

                </div>

                <!--right split: 60%-->
                <div class="flex flex-col lg:col-span-7">

                    <!-- address location on maps-->
                    <div class="grid grid-cols-1 p-10">

                        <iframe :src=props.googleMapsLink class=" h-96 md:w-80 lg:w-[40rem] lg:h-[32rem]" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>