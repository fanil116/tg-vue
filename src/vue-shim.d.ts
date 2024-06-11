import VueRouter, { Route } from 'vue-router';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

declare module 'vue/types/vue' {
  interface Vue {
    $route: Route;
    $store: Store<any>;
  }
}