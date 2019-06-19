<template>
  <div>
    <HeaderComponent />
    <div class="wrapper">
      <ListComponent />
      <FiltersComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header_";
import ListComponent from "@/components/List/List";
import FiltersComponent from "@/components/List/Filters";
import get from "../api";

export default {
  name: "home",
  components: {
    FiltersComponent,
    ListComponent,
    HeaderComponent
  },
  mounted() {
    get();
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: transparent;
  width: 1100px;
  height: 100%;
  margin: 0 auto;
  overflow: visible;
}
</style>
