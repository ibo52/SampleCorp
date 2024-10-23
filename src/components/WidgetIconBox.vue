<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDotCircle, faScissors } from '@fortawesome/free-solid-svg-icons';

const props=defineProps({
  title: {
    type: String,
    required: false
  },
  icon: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  }
})
</script>
<template>
  <div class="bg-cover bg-center bg-[url('{{props.icon}}')] relative items-center flex flex-col border-2 transition-all duration-500 overflow-hidden lg:hover:scale-110 p-8 rounded-lg shadow-lg w-full h-full">
    <img class="w-24" v-bind:src="props.icon">
      <p class="text-2xl font-bold">
        <FontAwesomeIcon class="text-6xl" :icon="faScissors"/>

          {{ props.title }}
      </p>


          <p class=" self-start text-xl mt-8 text-start gap-2">
            <FontAwesomeIcon :icon="faDotCircle"/>
            {{ props.description }}
          </p>

  </div>

</template>
