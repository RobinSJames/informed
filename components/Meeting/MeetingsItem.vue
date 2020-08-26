<template>
  <div class="flex flex-row">
    <!-- <div>
      <Avatar url="avatar" />
    </div> -->
    <div class="w-full">
      <div class="grid grid-rows-1 grid-cols-12">
        <div class="col-span-12 sm:col-span-6 flex flex-row">
          <p class="w-16 sm:w-auto flex items-center uppercase text-xs">
            Date
          </p>
          <p class="flex items-end font-bold text-base ml-2">
            {{ meetings.scheduledDate }}
          </p>
        </div>
        <div class="col-span-12 sm:col-span-6 flex flex-row sm:justify-end">
          <p class="w-16 sm:w-auto flex items-center uppercase text-xs">
            Priority
          </p>
          <p class="flex items-end font-bold text-base ml-2">
            {{ meetings.priority }}
          </p>
        </div>
        <div
          class="col-span-12 sm:col-span-6 w-full flex flex-row w-1/2 truncate"
        >
          <p class="text-base font-normal">{{ meetings.participants }}</p>
        </div>
        <div class="col-span-12">
          <p class="font-medium">{{ meetings.title }}</p>
        </div>
      </div>
      <!-- <div class="flex flex-row w-full text-xs justify-between">
        <div class="flex flex-row w-1/2">
          <p class="text-base font-bold">{{ meetings.participants }}</p>
        </div>
        <div class="flex flex-row">
          <p class="uppercase">
            Priority:
            <span class="font-bold text-sm">{{ meetings.priority }}</span>
          </p>
          <p class="uppercase">
            Date:
            <span class="font-bold text-sm">{{ meetings.scheduledDate }}</span>
          </p>
        </div>
      </div>
      <div>
        <p>{{ meetings.title }}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
// import Avatar from '../Avatar'
export default {
  components: {},
  props: {
    meetings: {
      type: [Object, Array],
      default: () => ({
        title: 'Meeting title',
        priority: 'HIGH',
        participants: 'Dane and 3 others',
        scheduledDate: Date.now(),
      }),
    },
  },
}
</script>

<style></style>
