<template>
  <div
    class="flex flex-col w-10/12 lg:w-8/12 rounded-lg px-2 mb-3"
    :class="chat.userName === 'currentUser' ? 'user__box' : 'currentuser__box'"
  >
    <div class="flex justify-between py-2">
      <p class="text-xs font-bold">{{ chat.userName }}</p>
      <p class="text-xs">{{ chat.sent_at }}</p>
    </div>
    <div class="mb-2">
      {{ chat.message }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chat: {
      type: [Object, Array],
      default: () => ({
        userName: 'User',
        sentAt: '23/08/2020',
        message: 'This is the message of the text and can be varied in length.',
      }),
    },
  },
  mounted() {
    console.log(this.chat)
  },
}
</script>

<style>
.currentuser__box {
  box-shadow: inset -5px -5px 5px rgba(255, 255, 255, 0.6),
    inset 5px 5px 5px rgba(0, 0, 0, 0.2);
}
.user__box {
  box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.6),
    5px 5px 5px rgba(0, 0, 0, 0.2);
}
</style>
