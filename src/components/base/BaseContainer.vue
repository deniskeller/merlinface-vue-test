<script>
export default {
  props: {
    single: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div :class="{ 'base-container_single': single }" class="base-container">
    <slot />
  </div>
</template>

<style lang="scss">
.base-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  background: #fff;
  padding: 20px;

  &_single {
    display: block;
  }
}
</style>
