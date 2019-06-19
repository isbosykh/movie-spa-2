<template>
  <div>
    <HeaderComponent />
    <div class="wrapper">
      <article>
        <h1>2018</h1>
        <header>
          <div class="img"></div>
          <div class="info">
            <h2>Film name</h2>
            <ul>
              <li><a href="#">Genre</a></li>
              <li><a href="#">Genre</a></li>
              <li><a href="#">Genre</a></li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, quod!
            </p>
            <button>Show more</button>
            <span><img src="@/assets/rate-star.svg" alt="" /> 8.5</span>
          </div>
        </header>
        <div class="cast">
          <h1>
            Cast & Crew
            <small> <router-link to="/cast">show all -></router-link></small>
          </h1>
          <swiper :options="swiperOption" class="cast">
            <swiper-slide class="castItem">
              <img src="#" alt="" />
              <div>
                <h4>Aloa-sdfh afgg</h4>
                <h5>Saske</h5>
              </div>
            </swiper-slide>
            <swiper-slide class="castItem">
              <img src="#" alt="" />
              <div>
                <h4>Aloa-sdfh afgg</h4>
                <h5>Saske</h5>
              </div>
            </swiper-slide>
            <swiper-slide class="castItem">
              <img src="#" alt="" />
              <div>
                <h4>Aloa-sdfh afgg</h4>
                <h5>Saske</h5>
              </div>
            </swiper-slide>
            <swiper-slide class="castItem">
              <img src="#" alt="" />
              <div>
                <h4>Aloa-sdfh afgg</h4>
                <h5>Saske</h5>
              </div>
            </swiper-slide>
            <swiper-slide class="castItem">
              <img src="#" alt="" />
              <div>
                <h4>Aloa-sdfh afgg</h4>
                <h5>Saske</h5>
              </div>
            </swiper-slide>
            <swiper-slide class="castItem">
              <img src="#" alt="" />
              <div>
                <h4>Aloa-sdfh afgg</h4>
                <h5>Saske</h5>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="media">
          <h1>
            Media
            <a>Videos</a>
            <a class="active">Backdrops</a>
            <a>Posters</a>
          </h1>
          <swiper :options="swiperOption" class="items">
            <swiper-slide class="item"></swiper-slide>
            <swiper-slide class="item"></swiper-slide>
            <swiper-slide class="item"></swiper-slide>
          </swiper>
        </div>
      </article>
      <aside>
        <ul>
          <li>
            <h2>Original title</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <h2>Status</h2>
            <p>Released</p>
          </li>
          <li>
            <h2>Release information</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <h2>Original language</h2>
            <p>Japanese</p>
          </li>
          <li>
            <h2>Runtime</h2>
            <p>124124</p>
          </li>
          <li>
            <h2>Budget</h2>
            <p>—</p>
          </li>
          <li>
            <h2>Revenue</h2>
            <p>—</p>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header_";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "ItemView",
  components: {
    HeaderComponent,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.wrapper {
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: transparent;
  width: 1100px;
  height: 100%;
  margin: 0 auto;
  overflow: visible;

  article {
    width: 600px;
    height: 100%;
    background-color: transparent;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    margin-right: 20px;
    position: relative;
    overflow: hidden;

    & > h1 {
      position: absolute;
      right: 0;
      top: 0;
      margin: -25px -10px;
      font-size: 6rem;
      color: $op-color;
    }

    header {
      display: flex;
      align-items: stretch;

      .img {
        background-color: $secondary-color;
        display: block;
        width: 140px;
        height: 230px;
        float: left;
        margin: 40px;
        border-radius: $border-radius;
        flex-shrink: 0;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-decoration: none;
        color: inherit;
        margin: 40px 40px 40px 0;
        padding: 10px 0;

        h2 {
          margin: 0;
        }
        ul {
          margin: 15px 0 10px;
          padding: 0;
          list-style: none;

          li {
            display: inline-block;
            margin-right: 8px;

            a {
              color: $secondary-color;
              font-size: 12px;
              font-weight: bold;
              text-decoration: none;
              border: 2px solid;
              border-radius: 999em;
              padding: 0.1px 7px;
              width: max-content;
            }
          }
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

        button {
          border-radius: 999em;
          border: none;
          background-color: $main-color;
          color: black;
          font-family: inherit;
          font-weight: bold;
          padding: 6px 25px;
          width: max-content;
          margin: 0 auto;
          cursor: pointer;
        }
      }
    }
    .cast {
      margin-left: 40px;
      overflow: hidden;

      h1 {
        font-size: 2rem;
        margin: 0 40px 20px 0;

        small {
          float: right;

          a {
            font-size: 50%;
            color: $secondary-color;
            cursor: pointer;
            text-decoration: none;
            vertical-align: bottom;
          }
        }
      }

      .cast {
        list-style: none;
        padding: 0;
        margin: 0;
        white-space: nowrap;
        display: flex;
        align-items: stretch;

        .castItem {
          border-radius: $border-radius;
          border: 1px solid $border-color;
          padding: 10px;
          display: inline-flex;
          flex-direction: column;
          margin-right: 20px;
          width: 140px;

          img {
            background-color: $secondary-color;
            display: block;
            width: 118px;
            height: 193px;
            border-radius: $border-radius;
          }

          div {
            padding: 10px;
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1;
            overflow: hidden;
            width: 118px;
            white-space: normal;

            h4 {
              flex: 1;
            }
            h4,
            h5 {
              margin: 0;
            }
            h5 {
              margin-top: 20px;
              color: $secondary-color;
            }
          }
        }
      }
    }
    .media {
      margin: 40px 0 20px 40px;
      overflow: hidden;

      h1 {
        font-size: 2rem;
        margin: 0 0 20px;

        a {
          font-size: 0.575em;
          margin-right: 15px;
          color: $secondary-color;
          cursor: pointer;

          &:first-child {
            margin-left: 40px;
          }
          &.active {
            color: $main-color;
          }
        }
      }

      .items {
        white-space: nowrap;
        border-radius: $border-radius;

        .item {
          width: 290px;
          height: 180px;
          background-color: $secondary-color;
          border-radius: $border-radius;
          border: 1px solid #6c727e;
          margin-right: 20px;
          display: inline-block;
        }
      }
    }
  }

  aside {
    width: 280px;
    height: 920px;
    background-color: transparent;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    padding: 20px;
    position: sticky;
    top: 20px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      color: $secondary-color;

      li {
        margin-bottom: 24px;

        h2 {
          margin: 0;
        }
        p {
          margin: 4px 0;
        }
      }
    }
  }
}
</style>
