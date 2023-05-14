<script>
import "@fontsource/barlow-semi-condensed"
import { store } from './store'
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: "App",
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  },
  data() {
    return {
      store
    }
  },
}

</script>

<template>
  <header>
    <HeaderComp />
  </header>
  <main>
    <MainComp />
  </main>
  <footer>
    <FooterComp />
  </footer>
</template>

<style lang="scss">
@use './style/main.scss'
</style>