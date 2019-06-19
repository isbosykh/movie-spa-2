<template>
  <header>
    <h1>Movies</h1>
    <nav>
      <ul>
        <li>Search</li>
        <li>Discover</li>
        <li>Log in</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

header {
  background-color: #424b60;
  color: $secondary-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: $border-radius;

  h1 {
    margin-left: 40px;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      padding: 0 30px;
      display: inline-block;
    }
  }
}
</style>
