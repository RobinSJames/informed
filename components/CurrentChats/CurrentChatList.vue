<template>
  <div>
    <div v-for="currentChat in currentChats" :key="currentChat">
      <CurrentChatItem />
    </div>
  </div>
</template>

<script>
import CurrentChatItem from './CurrentChatItem'
export default {
  components: { CurrentChatItem },
  data: () => ({
    currentChats: [1, 2, 3, 4, 5, 6, 7, 8],
  }),
}
</script>

<style></style>
