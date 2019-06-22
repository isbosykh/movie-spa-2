<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    beforeCreate() {

      log(this.$store)
    }
  }
</script>

<style lang="scss">
  @import url("https://rsms.me/inter/inter.css");
  @import "scss/variables";

  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: $Inter;
    font-feature-settings: "tnum" 1, "case" 1, "ss03" 1, "cv02" 1, "cv03" 1,
    "cv04" 1, "cv05" 1, "cv07" 1, "cv08" 1, "cv09" 1, "cv10" 1, "cv11" 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    * {
      box-sizing: border-box;
    }
  }

  #app {
    padding: 20px 20px 0 20px;
    color: $main-color;
    background-color: #242a38;
    min-height: 100%;
  }
</style>
