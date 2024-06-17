<template>
  <div>
    <div v-if="currentMaster">
      <div :class="currentMaster.fullClass" class="masters__full"></div>
      <button @click="showPrice">Прайс - {{currentMaster.name}}</button>
      <button @click="showPhoto">Фото работ</button>
      <p>{{test}}</p>
      <div v-if="visiblePrice" class="masters__price price">
        <div v-for="(service, index) in currentMaster.services" :key="index">
          <div @click="showCurrentWork(service)" class="price__wrapper">
            <img :src="getImagePath(service.img)" class="price__img" />
            <p class="price__name">{{service.name}}</p>
            <p class="price__price">{{service.price}} ₽</p>
          </div>
        </div>
      </div>
    <PhotoModal v-if="visiblePhoto" :currentMaster="currentMaster"/>
    <CurrentWork v-if="visibleCurrentWork" @close="close" :currentWork="currentWork"/>
      <div class="registration">
        <div class="registration__title">Онлайн запись</div>
        <iframe height="500px" width="320px" scrolling="yes" frameborder="0" allowtransparency="true" id="ms_booking_iframe" src="https://n1163728.yclients.com"></iframe>
      </div>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MastersStoreModule, GetterType as MastersGetterType,} from "@/store/masters/types/MastersStoreModule";
import type {Master, Services} from "@/models/masters"
import PhotoModal from '@/components/modals/PhotoModal.vue';
import CurrentWork from '@/components/modals/CurrentWork.vue';
interface Data {
    test: any;
    visiblePhoto: boolean;
    visiblePrice: boolean;
    currentWork: Services | null;
    visibleCurrentWork: boolean;
}


export default Vue.extend({
  name: 'MasterView',

  components: {
      PhotoModal,
      CurrentWork
    },

   data(): Data {
        return {
          test: null,
          visiblePhoto: false,
          visiblePrice: false,
          currentWork: null,
          visibleCurrentWork: false
        };
    },

  computed: {
    id(): string {
      return this.$route.params.id;
    },

    masters(): Master[] {
      return MastersStoreModule.get<Master[]>(
        this.$store,
        MastersGetterType.GET_MASTERS
      );
    },

    currentMaster(): Master | null {
      console.log(this.masters);
      if (!this.masters) return null;
      return this.masters.find((master: Master) => master.id == parseInt(this.id)) || null;
    }
  },

  methods: {
    getImagePath(image: string): string {
      try {
        return `/tg-vue/img/${image}`;
      } catch (error) {
        console.error("Error loading image:", error);
        return '';
      }
    },
    showPhoto() {
      this.visiblePhoto = !this.visiblePhoto;
      if (this.visiblePhoto) this.visiblePrice = false
    },
    showPrice() {
      this.visiblePrice = !this.visiblePrice;
      if (this.visiblePrice) this.visiblePhoto = false
    },
    showCurrentWork(service: Services) {
      this.currentWork = service;
      this.visibleCurrentWork = true;
    },
    close() {
      this.visibleCurrentWork = false;
    }
  },
  mounted() {
    console.log(Telegram.WebApp.initDataUnsafe);
    this.test = Telegram.WebApp.initDataUnsafe
    // Show main button
        Telegram.WebApp.MainButton.setParams({
            text: 'Назад'
        });
        Telegram.WebApp.MainButton.onClick(() => {
          Telegram.WebApp.MainButton.hide();
            this.$router.go(-1)
        });	
        Telegram.WebApp.MainButton.show();
  },
});
</script>

<style scoped>
/* Стили для вашей страницы Master */
</style>