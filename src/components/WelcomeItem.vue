<template>
  <div class="item">
    <div class="item_image">
      <slot name="image"></slot>
    </div>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  width: 100%;
  text-align: center;
}

.item_image {
  width: 100%;
}

.details {
  flex: 1;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

</style>
