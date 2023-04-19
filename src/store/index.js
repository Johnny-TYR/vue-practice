import Vue from "vue"
import Vuex from "vuex"

import todo from "./modules/todo";
import fruitShop from "./modules/fruitShop"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo,
    fruitShop
  }
})