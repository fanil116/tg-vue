<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="header">
    <h1 class="header_title">{{ msg }}</h1>
    <h3 class="header_subtitle">
      В нашей студии Вы можете подчеркнуть свою красоту с помощью перманентного макияжа.
    </h3>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
