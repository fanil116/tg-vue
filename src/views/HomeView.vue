<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import TheWelcome from '@/components/TheWelcome.vue';
import axios from 'axios';
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
    async registerUser() {
      try {
        const response = await axios.post('http://127.0.0.1:5000/register', {
          username: this.user.user.username,
          id: this.user.user.id,
        });
        this.responseMessage = `Your referral code: ${response.data.referral_code}`;
      } catch (error) {
        this.responseMessage = 'Error registering user: ' + error.response.data.error;
      }
    },
  },
  beforeDestroy() {
    Telegram.WebApp.MainButton.hide();
  }
});
</script>
