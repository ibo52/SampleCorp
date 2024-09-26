<script setup>
import {ref, reactive, computed} from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot, faMailBulk, faPhoneVolume, faScissors } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookF, faFacebookSquare, faInstagram, faInstagramSquare, faInstalod, faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

const props=defineProps({
  companyName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  mail: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  instagram: {
    type: String,
    required: false
  },
  facebook: {
    type: String,
    required: false
  },
  youtube: {
    type: String,
    required: false
  }
})

//null or undefined
const facebookHrefExists=computed(()=> props.facebook != null )
const instagramHrefExists=computed(()=> props.instagram != null )
const youtubeHrefExists=computed(()=> props.youtube != null )


</script>
<template>
<div class="flex flex-col border-2 transition-all duration-500 overflow-hidden md:hover:scale-110 p-8 rounded-lg shadow-lg w-full h-auto">

    <h2 class="text-end text-4xl text-fuchsia-500">
      <FontAwesomeIcon class="hover:rotate-180 transition-all duration-500" :icon="faScissors"/>

      <p class="text-start font-bold">
        {{ companyName }}
      </p>
    </h2>

    <div class="flex flex-col mt-8 text-end text-fuchsia-400 text-xl gap-2">
      <div class="grid grid-cols-12 hover:text-white hover:bg-fuchsia-500 items-center">
        <FontAwesomeIcon :icon="faMailBulk"/>
        <a class="bg-inherit text-inherit hover:bg-inherit col-span-11" :href="`mailto:${mail}`">
          <p>
            {{ mail }}
          </p>
      </a>
      </div>
      <div class="grid grid-cols-12 hover:text-white hover:bg-fuchsia-500 items-center">
        <FontAwesomeIcon :icon="faPhoneVolume"/>
        <p class="col-span-11">
          {{ phone }}
        </p>
      </div>
      <div class="grid grid-cols-12 hover:text-white hover:bg-fuchsia-500 items-center">
        <FontAwesomeIcon :icon="faLocationDot"/>
        <p class="col-span-11">
          {{ address }}
        </p>
      </div>

      <!-- social media links-->
      <div v-if="instagramHrefExists" class="grid grid-cols-12 hover:text-white hover:bg-fuchsia-500 items-center">
        <FontAwesomeIcon :icon="faInstagram"/>
        <a class="bg-inherit text-inherit hover:bg-inherit col-span-11" :href="`${instagram}`">
          <p>
            @Instagram
          </p>
      </a>
      </div>

      <div v-if="facebookHrefExists" class="grid grid-cols-12 hover:text-white hover:bg-fuchsia-500 items-center">
        <FontAwesomeIcon :icon="faFacebookSquare"/>
        <a class="bg-inherit text-inherit hover:bg-inherit col-span-11" :href="`${facebook}`">
          <p>
            @Facebook
          </p>
      </a>
      </div>

      <div v-if="youtubeHrefExists" class="grid grid-cols-12 hover:text-white hover:bg-fuchsia-500 items-center">
        <FontAwesomeIcon :icon="faYoutubeSquare"/>
        <a class="bg-inherit text-inherit hover:bg-inherit col-span-11" :href="`${youtube}`">
          <p>
           @YouTube
          </p>
      </a>
      </div>

    </div>

  </div>

</template>

<style scoped>
</style>
