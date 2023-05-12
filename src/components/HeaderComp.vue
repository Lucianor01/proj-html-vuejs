<script>
import NavBar from './NavBar.vue';
import ControlHealth from './ControlHealth.vue';
export default {
  name: "HeaderComp",
  components: {
    NavBar,
    ControlHealth
  },
  data() {
    return {

    }
  },
  methods: {

  },
}

</script>

<template>
  <NavBar />
  <ControlHealth />
</template>

<style lang="scss" scoped></style>