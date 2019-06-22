<template>
  <div>
    <HeaderComponent />
    <div class="wrapper">
      <header>
        <router-link to="/item"><- Back to main</router-link>
        <h1>So long film name will be here</h1>
      </header>
      <div class="content">
        <div class="cast">
          <header>
            <h1>Cast</h1>
          </header>
          <CastItem />
          <CastItem />
          <CastItem />
          <CastItem />
          <CastItem />
          <CastItem />
          <CastItem />
          <CastItem />
          <CastItem />
        </div>
        <div class="crew">
          <header>
            <h1>Crew</h1>
            <span>Directing</span>
          </header>
          <CastItem />
          <CastItem />
          <CastItem />
          <CastItem />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header_";
import CastItem from "@/components/Cast/CastItem";
export default {
  name: "Cast",
  components: { CastItem, HeaderComponent }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: transparent;
  width: 1100px;
  height: 100%;
  margin: 0 auto;
  overflow: visible;

  header {
    margin: 0 0 20px;
    a {
      color: $secondary-color;
      text-decoration: none;
    }
    h1 {
      margin: 0 0 10px;
    }
    span {
      color: $secondary-color;
      font-weight: bold;
      margin-top: 20px;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    width: 900px;

    & > div {
      width: 440px;
      padding: 20px;
      border-radius: $border-radius;
      border: 1px solid $secondary-color;
    }
  }
}
</style>
