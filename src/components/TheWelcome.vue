<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'

</script>

<template>
  <div class="masters">
  <h3 class="masters_title">В нашей студии 3 мастера</h3>
    <WelcomeItem>
      <template #image>
        <div class="master_one"></div>
      </template>

    </WelcomeItem>

    <WelcomeItem>
      <template #image>
      <div class="master_two"></div>
      </template>
      <template #heading>Tooling</template>
    </WelcomeItem>

    <WelcomeItem>
      <template #image>
      <div class="master_three"></div>
      </template>
      <template #heading>Tooling</template>
    </WelcomeItem>
  </div>
</template>
