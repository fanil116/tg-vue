// src/store/index.ts
import Vue from 'vue';
import Vuex from 'vuex';
import masters from './masters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    masters
  }
});