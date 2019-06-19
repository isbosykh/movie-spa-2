<template>
  <router-link to="/item" class="item">
    <article>
      <img
        src="http://cdn.shopify.com/s/files/1/3003/0152/products/Artprints_Kurzgesagt_04_Frame_1200x1200.jpg?v=1540827926"
        alt=""
      />
      <div>
        <h3>Film name</h3>
        <a href="">Genre</a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          quod!
        </p>
        <span><img src="@/assets/rate-star.svg" alt="" /> 8.5</span>
      </div>
    </article>
  </router-link>
</template>

<script>
export default {
  name: "ItemComponent"
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

a {
  text-decoration: none;
  color: inherit;
}

article {
  width: 100%;
  height: 230px;
  background-color: transparent;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  overflow: hidden;
  color: $main-color;
  display: flex;

  img {
    width: 140px;
    height: 100%;
    background: black;
    object-fit: cover;
  }

  div {
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    color: inherit;

    h3 {
      margin: 0;
      max-height: 3rem;
    }
    a {
      color: $secondary-color;
      font-size: 12px;
      font-weight: bold;
      text-decoration: none;
      border: 2px solid;
      border-radius: 999em;
      padding: 0.1px 7px;
      width: max-content;
      margin: 15px 0 10px;
    }
    p {
      font-size: 0.875rem;
      flex: 1;
      margin: 0;
      line-height: 1rem;
      letter-spacing: 0.04em;
    }
    span {
      color: $secondary-color;
      margin-top: 10px;
      font-weight: bold;

      img {
        width: 20px;
        height: 20px;
        background: transparent;
        vertical-align: sub;
        margin-right: 5px;
      }
    }
  }
}
</style>
