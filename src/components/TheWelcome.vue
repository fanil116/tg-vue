
<template>
  <div class="masters">
  <h3 class="masters_title">В нашей студии 3 мастера</h3>
  <div class="masters__wrapper">
    <div v-for="master in masters" :key="master.id">
      <WelcomeItem>
        <template #image>
          <div :class="master.class"></div>
        </template>
        <template #heading>{{master.name}}</template>
      </WelcomeItem>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import WelcomeItem from './WelcomeItem.vue';
import Vue from "vue";
import { MastersStoreModule, GetterType as MastersGetterType,} from "@/store/masters/types/MastersStoreModule";

export default Vue.extend({
    name: "TheWelcome",
    components: {
      WelcomeItem
    },

    computed: {
        masters(): any {
            return MastersStoreModule.get<any>(
                this.$store,
                MastersGetterType.GET_MASTERS
            );
        },

    },
});
</script>
