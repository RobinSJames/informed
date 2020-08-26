<template>
  <component
    :is="tag"
    :to="to"
    class="button__box flex justify-center items-center w-full py-1 px-2 rounded-full cursor-pointer select-none"
    :class="setVariant"
    @click="disabled ? false : $emit('clicked')"
  >
    <div v-if="icon" class="mr-2 fill-current w-4">
      <slot name="icon">
        <!-- <Icon></Icon> -->
      </slot>
    </div>
    {{ label }}
  </component>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    icon: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: '',
    },
    to: {
      type: [Object, String],
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    setVariant() {
      const className = {}
      const variant = this.disabled
        ? `bg-${this.variant}-disable text-secondary cursor-not-allowed`
        : `bg-${this.variant} text-secondary hover:bg-${this.variant}-hover`
      className[variant] = true
      return className
    },
    tag() {
      return this.to ? 'nuxt-link' : 'div'
    },
  },
}
</script>

<style>
.button__box {
  box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.6),
    5px 5px 5px rgba(0, 0, 0, 0.2);
}
</style>
