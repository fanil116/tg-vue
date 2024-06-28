
<template>
  <div class="masters">
  <div class="main_banner"></div>
      <div class="wrapper">
        <HelloWorld msg="Перманентный макияж Казань" />
        <nav class="navigation">
          <router-link to="/">Главная</router-link>
          <router-link to="/about">Отзывы</router-link>
          <router-link to="/about">Прайс</router-link>
          <router-link to="/about">Контакты</router-link>
        </nav>
      </div>
  <h3 class="masters_title">В нашей студии 3 мастера</h3>
  <button @click="shareLink()">Share ref link</button>
  <div class="masters__wrapper">
    <div v-for="master in masters" :key="master.id">
    <router-link :to="`/master/${master.id}`">
      <WelcomeItem>
        <template #image>
          <div :class="master.class"></div>
        </template>
        <template #heading>{{master.name}}</template>
      </WelcomeItem>
      </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import WelcomeItem from './WelcomeItem.vue';
import HelloWorld from './HelloWorld.vue';
import Vue from "vue";
import { MastersStoreModule, GetterType as MastersGetterType,} from "@/store/masters/types/MastersStoreModule";

export default Vue.extend({
    name: "TheWelcome",
    components: {
      WelcomeItem,
      HelloWorld
    },

    computed: {
        masters(): any {
            return MastersStoreModule.get<any>(
                this.$store,
                MastersGetterType.GET_MASTERS
            );
        },

    },
    methods: {
      shareLink() {
        Telegram.WebApp.openTelegramLink('https://t.me/share/url?url=https://t.me/Pizza_apps_bot/testPizza?startapp=T7kgdst2')
      },
    }
});
</script>
