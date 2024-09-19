<script setup lang="ts">
import BusinessCard from '@/components/BusinessCard.vue';
</script>

<template>
    <div class="grid grid-cols-1 justify-items-center bg-fuchsia-100">

        <div class="text-4xl text-pink-400 font-bold pt-1 pb-1

            border-t-[5vw] border-t-transparent
            border-l-[50vw] border-l-purple-600
            border-b-[5vw] border-b-transparent
            border-r-[10vw] border-r-transparent">

            <h1 class="">
            Do you have a sewing idea?
            </h1>

        </div>

        <div class="text-4xl text-purple-400 font-bold pt-1 pb-1
            border-t-[5vw] border-t-transparent
            border-l-[0vw] border-r-pink-400
            border-b-[10vw] border-b-transparent
            border-r-[50vw] vorder-r-purple-400">

            <h1 class="">
                or wholesale sewing proposals?
            </h1>

        </div>

        <BusinessCard
        company-name="Fatoş Moda Evi"
        mail="fatoş@fmodaevi.com"
        phone="5AB XXX XX XX"
        address="Fevzi Çakmak, İpekyolu Cd. no 10, 52300 Ünye/Ordu"
        google-maps-embed-address="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.84787304175455!2d37.292554421067415!3d41.12216926852457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4062bb8efe8668ff%3A0x6debd9bf1d093f09!2sFato%C5%9Fmodaevi!5e0!3m2!1str!2str!4v1726653321807!5m2!1str!2str"
        />
    </div>
</template>