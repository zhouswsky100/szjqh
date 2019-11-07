import Vue from 'vue'
import Vuex from 'vuex'
import System from './modules/System'

Vue.use(Vuex);
let store = new Vuex.Store({
  modules: {
    System,
  }
});

export default store
