<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import TheWelcome from '@/components/TheWelcome.vue';
export default Vue.extend({
  name: 'HomeView',
  components: {
      TheWelcome,
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
  },
  beforeDestroy() {
    Telegram.WebApp.MainButton.hide();
  }
});
</script>
