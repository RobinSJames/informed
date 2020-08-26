<template>
  <div class="w-full h-20 flex bg-primary">
    <div class="">
      <AvatarContainer class="" :url="'avatar'" />
      <div class=""></div>
    </div>
  </div>
</template>

<script>
import AvatarContainer from './AvatarContainer'
export default {
  components: {
    AvatarContainer,
  },
}
</script>

<style></style>
