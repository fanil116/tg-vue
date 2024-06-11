<template>
  <div>
    <div v-if="currentMaster">
    <div :class="currentMaster.fullClass" class="masters__full"></div>
    <h1>Master Detail</h1>
    <p>ID: {{ id }}</p>
    <p>{{currentMaster.name}}</p>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MastersStoreModule, GetterType as MastersGetterType,} from "@/store/masters/types/MastersStoreModule";
import type {Master} from "@/models/masters"
export default Vue.extend({
  name: 'MasterView',
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
  mounted() {
    // Show main button
        Telegram.WebApp.BackButton.setParams({
            text: 'Записаться'
        });
        Telegram.WebApp.BackButton.onClick(function () {
            Telegram.WebApp.showAlert('Не смотри еще не готово')
        });	
        Telegram.WebApp.BackButton.show();
  }
});
</script>

<style scoped>
/* Стили для вашей страницы Master */
</style>