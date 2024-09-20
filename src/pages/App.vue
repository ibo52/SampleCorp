<script setup>
import Nav2 from '../components/Navbar.vue'
import Footer from '@/components/Footer.vue';
</script>

<template>
  <header class="flex flex-col">
      <Nav2
      logo-image="src/assets/logo.svg"
      trademark-description="© 2024 Fatoş Moda Evi | Fashionable and Comfortable clothing tailoring"
      />
  </header>

  <main>
    <RouterView />
  </main>
  <footer>
    <Footer
    company-name="HaloSoft Inc."
    company-description="All rights reserved"
    company-website="https://www.github.com/ibo52"
    company-logo="src/resources/website agency/logo.png"
    website-owner-info="© 2024 Fatoş Moda Evi | Fashionable and Comfortable clothing tailoring"
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
