<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
console.log(Telegram);

// Show main button
        Telegram.WebApp.MainButton.setParams({
            text: 'Записаться'
        });
        Telegram.WebApp.MainButton.onClick(function () {
            Telegram.WebApp.showAlert('Не смотри еще не готово')
        });	
        Telegram.WebApp.MainButton.show();
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
