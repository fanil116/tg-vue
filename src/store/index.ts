import Vue from 'vue';
import type { StoreOptions } from 'vuex';
import Vuex from 'vuex';
import type { RootState } from './types'; // Импортируйте типы для корневого состояния
import masters from './masters';

Vue.use(Vuex);

const storeOptions: StoreOptions<RootState> = {
  modules: {
    masters
  }
};

export default new Vuex.Store<RootState>(storeOptions);