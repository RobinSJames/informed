<template>
  <div class="flex flex-col justify-center items-center h-full">
    <div class="w-4/5 sm:w-3/5">
      <MeetingsContainer />
    </div>
  </div>
</template>

<script>
import MeetingsContainer from '../components/Meeting/MeetingsContainer'
export default {
  components: { MeetingsContainer },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
