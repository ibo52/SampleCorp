<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot, faMailBulk, faPhoneVolume, faScissors } from '@fortawesome/free-solid-svg-icons';

defineProps({
  companyName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  googleMapsEmbedAddress: {
    type: String,
    required: true
  }

})
</script>
<template>

<div class="flex flex-col border overflow-hidden transition-all duration-500 hover:scale-125 p-8 rounded-lg drop-shadow-lg w-11/12 md:w-2/4 h-auto">

    <h2 class="text-end text-4xl text-fuchsia-500">
      <FontAwesomeIcon class="hover:rotate-180 transition-all duration-500" :icon="faScissors"/>

      <p class="text-start font-bold">
        {{ companyName }}
      </p>
    </h2>

    <div class="flex flex-col mt-8 text-end text-xl gap-2">

      <a target="_blank" rel="noopener">
        {{ mail }}
        <FontAwesomeIcon :icon="faMailBulk"/>
      </a>
      <a target="_blank" rel="noopener">
        {{ phone }}
        <FontAwesomeIcon :icon="faPhoneVolume"/>
      </a>
      <a target="_blank" rel="noopener">
        {{ address }}
        <FontAwesomeIcon :icon="faLocationDot"/>
      </a>
    </div>

  </div>

   <!-- address location on maps-->
  <div class="grid grid-cols-1 p-10">

    <iframe :src="googleMapsEmbedAddress" class=" h-96 md:w-80 lg:w-[40rem] lg:h-[32rem]" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
