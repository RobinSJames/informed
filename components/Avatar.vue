<template>
  <div class="box h-12 w-12 flex justify-center items-center rounded-full">
    <img :src="'@/assets/avatar.jpg'" class="w-10 h-10 rounded-full z-50" />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: 'default',
    },
  },
}
</script>

<style>
.zero__box {
  border: 3px solid rgba(79, 3, 3, 0.1);
  box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.6),
    5px 5px 5px rgba(0, 0, 0, 0.2), inset -5px -5px 5px rgba(255, 255, 255, 0.6),
    inset 5px 5px 5px rgba(0, 0, 0, 0.2);
}
</style>
