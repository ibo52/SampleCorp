<script setup>
import {ref, reactive} from 'vue';
import Nav2 from '../components/Navbar.vue'
import Footer from '@/components/Footer.vue';

const props=reactive({
  title:'Fatoş Moda Evi',
  logoImage:"src/resources/logo.svg",
  trademarkDescription:"© 2024 Fatoş Moda Evi | Fashionable and Comfortable clothing tailoring",
  designerAgencyName:"HaloSoft Inc.",
  designerAgencyDescription:"All rights reserved",
  designerAgencyRefLink:"https://www.github.com/ibo52",
  designerAgencyLogo:"src/resources/website agency/logo.png"
})

document.title=props.title

</script>

<template>
  <header class="flex flex-col">
      <Nav2
      v-bind:logo-image=props.logoImage
      v-bind:trademark-description=props.trademarkDescriptio
      />
  </header>

  <main>
    <RouterView />
  </main>
  <footer>
    <Footer
    :company-name=props.designerAgencyName
    :company-description=props.designerAgencyDescription
    :company-website=props.designerAgencyRefLink
    :company-logo=props.designerAgencyLogo
    :website-owner-info=props.trademarkDescription
    />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /*padding-right: calc(var(--section-gap) / 2);*/
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
