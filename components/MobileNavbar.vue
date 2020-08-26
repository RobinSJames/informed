<template>
  <div class="flex flex-row justify-around bg-primary py-2">
    <nuxt-link to="/singlechat">
      <div>
        <MessageIcon class="h-10 text-secondary fill-current" />
      </div>
    </nuxt-link>
    <nuxt-link to="/groupchat">
      <div>
        <GroupIcon class="h-10 text-secondary fill-current" />
      </div>
    </nuxt-link>
    <nuxt-link to="meetings">
      <div>
        <CalendarIcon class="h-10 text-secondary fill-current" />
      </div>
    </nuxt-link>
    <nuxt-link to="settings">
      <div>
        <SettingIcon class="h-10 text-secondary fill-current" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import MessageIcon from '~/assets/icons/message-circle-outline.svg'
import GroupIcon from '~/assets/icons/people-outline.svg'
import SettingIcon from '~/assets/icons/settings-outline.svg'
import CalendarIcon from '~/assets/icons/calendar-outline.svg'
export default {
  components: { MessageIcon, GroupIcon, SettingIcon, CalendarIcon },
}
</script>

<style></style>
