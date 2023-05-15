<script>
import { store } from '../store'

import NavBar from './NavBar.vue';
import ControlHealth from './ControlHealth.vue';
import CardHeader from './CardHeader.vue';
export default {
  name: "HeaderComp",
  components: {
    NavBar,
    ControlHealth,
    CardHeader
  },
  data() {
    return {
      store
    }
  },
  methods: {

  },
}

</script>

<template>
  <NavBar />
  <ControlHealth />
  <section id="section-header-2">
    <div class="container">
      <div class="row justify-content-between" id="container-card" data-aos="fade-up">
        <CardHeader v-for="(elem, index) in store.cardSection_2" :key="index" :infoCard="elem" />
      </div>
      <div class="text-center text-light" id="container-p" data-aos="zoom-in-down">
        <p class="">
          "How you respond to the challenge in the second half will determine what you
          become after
          the game, whether you
          are a winner or a loser."
        </p>
        <img src="/img/image-2.png" alt="image-2">
        <div class="d-flex justify-content-center align-items-center container-brad">
          <img class="rounded-circle" src="/img/avatar-1-2x.jpg" alt="avatar">
          <h4 class="mx-3">Brad Johnson</h4>
          <span>Las Vegas</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;

#section-header-2 {

  padding-bottom: 10%;

  #container-p {

    margin-top: 7%;
    margin-left: 10%;
    margin-right: 10%;
    line-height: 1.2;
    font-weight: 500;

    p {
      font-size: 48px;
    }

    img {
      width: 70px;
    }

    .container-brad {

      img {
        width: 60px;
        height: 60px;
      }
    }


    span {
      color: $testo-argento;
    }

  }



}
</style>