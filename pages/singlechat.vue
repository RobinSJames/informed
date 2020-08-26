<template>
  <div class="h-full w-full flex flex-row justify-end">
    <div
      :class="$route.name === 'singlechat-id' ? 'hidden sm:flex' : ''"
      class="h-full w-full sm:w-2/5 lg:w-1/4 pt-0"
    >
      <div class="w-full h-full border-r px-4 overflow-y-auto">
        <CurrentChatsContainer class="md:w-full" />
      </div>
    </div>
    <div
      class="w-full sm:w-3/5 lg:3/4 px-2 sm:px-4 pt-4 overflow-y-auto"
      :class="$route.name === 'singlechat' ? 'hidden sm:flex' : 'flex'"
    >
      <nuxt-child :key="$route.params.id" />
    </div>
  </div>
</template>

<script>
import CurrentChatsContainer from '../components/CurrentChats/CurrentChatsContainer'
export default {
  components: { CurrentChatsContainer },
  mounted() {
    console.log(this.$route)
  },
}
</script>

<style></style>
