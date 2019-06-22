import Vue from "vue";
import Vuex from "vuex";
import {genres} from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    genres: {

    }
  },
  mutations: {},
  actions: {
    getGenres({state}) {
      genres().then(data => state.genres = data.results)
    }
  },
  getters: {
    films(state){
      return state.genres
    }
  }
});
