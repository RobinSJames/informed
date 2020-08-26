<template>
  <div>
    <slot>
      <div
        v-for="DummyChat in DummyChats"
        :key="DummyChat"
        class="flex"
        :class="DummyChat.userName === 'currentUser' ? 'justify-end' : ''"
      >
        <ChatItem :chat="DummyChat" />
      </div>
    </slot>
  </div>
</template>

<script>
import { dummyChats } from '../../utils/dummy'
import ChatItem from './ChatItem'
export default {
  components: { ChatItem },
  props: {},
  data: () => ({
    DummyChats: dummyChats,
  }),
}
</script>

<style></style>
