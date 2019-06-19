<template>
  <div>
    <section class="img"></section>
    <section class="text">
      <h3>So long name of asiante</h3>
      <small>Role</small>
    </section>
  </div>
</template>

<script>
export default {
  name: "CastItem"
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

div {
  width: 400px;
  height: 90px;
  margin-bottom: 20px;
  display: inline-flex;
  border-radius: $border-radius;
  border: 1px solid $secondary-color;
  overflow: hidden;

  .img {
    width: 90px;
    height: 90px;
    background-color: $secondary-color;
    margin: 0;
  }

  .text {
    margin: 20px;

    h3 {
      margin: 0 0 5px;
    }
    small {
      font-weight: bold;
      color: $secondary-color;
    }
  }
}
</style>
