<template>
  <div>
    <div class="flex flex-row justify-between border-b py-2">
      <div class="flex items-center">
        <Avatar :url="'avatar'" class="mr-3" />
      </div>
      <div class="truncate">
        <p class="w-full text-right font-bold text-xs">{{ Date.now() }}</p>
        <p class="truncate">{{ lastMessage }}</p>
        <p class="text-xs h-4"><span v-if="isTyping">is typing...</span></p>
      </div>
      <div class="flex justify-center items-center w-10">
        R
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '../Avatar'
export default {
  components: { Avatar },
  props: {
    isTyping: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    lastMessage:
      'This is the last message in the chat and should not show everything.',
  }),
}
</script>

<style></style>
