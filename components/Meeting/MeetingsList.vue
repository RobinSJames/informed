<template>
  <div>
    <MeetingsItem
      v-for="meeting in meetings"
      :key="meeting"
      class="meeting__box rounded-lg py-2 px-4 mb-4 cursor-pointer"
    />
  </div>
</template>

<script>
import MeetingsItem from './MeetingsItem'
export default {
  components: { MeetingsItem },
  data: () => ({
    meetings: [1, 2, 3, 4],
  }),
}
</script>

<style>
.meeting__box {
  box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.6),
    5px 5px 5px rgba(0, 0, 0, 0.2);
}
</style>
