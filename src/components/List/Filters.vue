<template>
  <aside>
    <div class="radio-btns">
      <button class="isActive"><span>Movie</span></button>
      <button>TV Show</button>
    </div>
    <h2>Year</h2>
    <label>
      <select name="year">
        <option value=""> </option>
      </select>
      <span>—</span>
      <select name="year">
        <option value=""> </option>
      </select>
    </label>

    <h2>Sort by</h2>
    <label>
      <select name="sort">
        <option value=""> </option>
      </select>
    </label>

    <h2>Genres</h2>
    <label>
      <select name="genres">
        <option value=""> </option>
      </select>
    </label>

    <ul>
      <li>Action</li>
      <li>asfasfasfasfaf</li>
      <li>Act</li>
      <li>jopa</li>
      <li>saffasfasf</li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "FiltersComponent"
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

aside {
  width: 280px;
  height: 100%;
  background-color: transparent;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  padding: 20px;
  position: sticky;
  top: 20px;

  h2 {
    color: $secondary-color;
    margin-bottom: 10px;
    margin-top: 24px;
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    select {
      width: 100%;
      height: 34px;
      border-radius: $border-radius;
      border: none;
      background-color: $border-color;
    }
    span {
      color: $secondary-color;
      font-size: large;
      margin: 0 10px;
    }
  }

  .year {
    margin-bottom: 24px;
    .year-inputs {
      display: flex;
    }
  }

  .radio-btns {
    width: 240px;
    height: 30px;
    margin-bottom: 24px;
    display: flex;
    border-radius: 10px;
    border: 2px solid $border-color;
    overflow: hidden;
    background-color: $border-color;

    button {
      width: 120px;
      border: none;
      font-weight: bold;
      font-size: 0.9rem;
      background-color: #242a38;
      color: $secondary-color;

      &.isActive {
        background-color: $secondary-color;
        color: #242a38;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
    li {
      color: $secondary-color;
      display: inline-block;
      margin-right: 8px;
      margin-bottom: 8px;
      border: 2px solid;
      border-radius: 10px;
      font-size: 0.885rem;
      padding: 3.25px 12px 3.25px 12px;
      position: relative;
      overflow: hidden;
      cursor: pointer;

      &:before {
        content: "";
        position: absolute;
        background-color: #242a38;
        transition: 0.3s;
        opacity: 0;
        visibility: hidden;
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
      }
      &:after {
        content: "×";
        position: absolute;
        box-sizing: border-box;
        text-align: center;
        transition: 0.3s;
        padding: 0 6px;
        right: 1%;
        left: 100%;
      }

      &:hover {
        &:before {
          opacity: 1;
          visibility: visible;
        }
        &:after {
          right: -50%;
          left: -50%;
        }
      }
    }
  }
}
</style>
