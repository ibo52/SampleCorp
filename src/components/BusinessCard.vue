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
  }

})
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
        <p class="col-span-11">
          {{ mail }}
        </p>
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
    </div>

  </div>

</template>

<style scoped>
</style>
