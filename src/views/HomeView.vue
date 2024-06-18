<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import TheWelcome from '@/components/TheWelcome.vue';
import { MastersStoreModule, ActionType as MastersActionType,} from "@/store/masters/types/MastersStoreModule";

interface Data {
    name: string;
    email: string;
    referralCode: string;
    responseMessage: string;
    user: any;
}
export default Vue.extend({
  name: 'HomeView',
  components: {
      TheWelcome,
    },

     data(): Data {
        return {
          name: 'test',
          email: 'test email',
          referralCode: '',
          responseMessage: '',
          user: null
        };
    },

  mounted() {
    console.log(Telegram);
// Show main button
        Telegram.WebApp.MainButton.setParams({
            text: 'Записаться'
        });
        Telegram.WebApp.MainButton.onClick(function () {
            Telegram.WebApp.showAlert('Не смотри еще не готово')
        });	
        Telegram.WebApp.MainButton.show();
        this.user = Telegram.WebApp.initDataUnsafe
        this.registerUser();
  },
  methods: {
    registerUser() {
      console.log("asd");
      MastersStoreModule.dispatch(
                    this.$store,
                    MastersActionType.TEST,
                    this.user
                );
    },
  },
  beforeDestroy() {
    Telegram.WebApp.MainButton.hide();
  }
});
</script>
