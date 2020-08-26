<template>
  <div>
    <div>
      <h4 class="text-base font-medium text-center mb-2">
        Stay focused. Channel your Energy.
      </h4>
      <p class="text-center text-sm mb-4">
        A summary of upcoming meetings you scheduled:
      </p>
      <MeetingsList />
    </div>
  </div>
</template>

<script>
import MeetingsList from './MeetingsList'
export default {
  components: { MeetingsList },
}
</script>

<style></style>
