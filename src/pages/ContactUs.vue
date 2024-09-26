<script setup lang="ts">
import BusinessCard from '@/components/BusinessCard.vue';
import Title from '@/components/Title.vue';
</script>

<template>
        <Title
        title="Contact with us"
        description="We bring our customers' clothing designs and ideas to life."
        />
        <div class="flex flex-col lg:grid lg:grid-cols-12 justify-items-center items-center">

            <!--left split: 40%-->
            <div class="flex flex-col lg:col-span-5 text-4xl font-bold gap-8 m-8 lg:m-0 lg:ml-24">

                <h1 class="text-fuchsia-600">
                Do you have a design that you like?
                </h1>

                <BusinessCard
                company-name="Fatoş Moda Evi"
                mail="fatoş@fmodaevi.com"
                phone="5AB XXX XX XX"
                address="Fevzi Çakmak, İpekyolu Cd. no 10, 52300 Ünye/Ordu"
                facebook="https://www.facebook.com/people/Fato%C5%9Fmodaevi-%C3%BCnye/100085871311430/"
                />

            </div>

            <!--right split: 60%-->
            <div class="flex flex-col lg:col-span-7">

                <!-- address location on maps-->
                <div class="grid grid-cols-1 p-10">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.84787304175455!2d37.292554421067415!3d41.12216926852457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4062bb8efe8668ff%3A0x6debd9bf1d093f09!2sFato%C5%9Fmodaevi!5e0!3m2!1str!2str!4v1726653321807!5m2!1str!2str" class=" h-96 md:w-80 lg:w-[40rem] lg:h-[32rem]" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </div>
</template>