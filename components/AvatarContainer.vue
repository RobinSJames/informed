<template>
  <div class="flex justify-left items-center h-full py-1">
    <div class="flex mx-4">
      <Avatar :url="url" />
    </div>
    <div class="box flex items-center h-10 px-4 rounded-full">
      <p class="">
        {{ userName }}
      </p>
    </div>
  </div>
</template>

<script>
// import image from '../static/'
import Avatar from './Avatar'
export default {
  components: { Avatar },
  props: {
    url: {
      type: String,
      default: 'default',
    },
    userName: {
      type: String,
      default: 'Guest User',
    },
  },
}
</script>

<style>
.box {
  transition: color 4s;
  border: 3px solid rgba(79, 3, 3, 0.1);
  box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.6),
    5px 5px 5px rgba(0, 0, 0, 0.2), inset -5px -5px 5px rgba(255, 255, 255, 0.6),
    inset 5px 5px 5px rgba(0, 0, 0, 0.2);
}
</style>
