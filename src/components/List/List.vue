<template>
  <section>
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
    <ItemComponent />
  </section>
</template>

<script>
import ItemComponent from "@/components/List/Item";
export default {
  name: "ListComponent",
  components: { ItemComponent }
};
</script>

<style lang="scss" scoped>
section {
  gap: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 760px;
}
</style>
