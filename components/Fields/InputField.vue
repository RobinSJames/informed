<template>
  <div class="w-full">
    <!-- <label>This is the label</label> -->
    <input
      v-model="inputValue"
      :placeholder="placeholder"
      :type="type"
      class="input__box w-full bg-primary px-3 py-1 rounded-full placeholder-secondary"
      @blur="$emit('blur', inputValue)"
      @focus="$emit('focus', inputValue)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String, Object, Array, Date],
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Placeholder',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style>
.input__box {
  /* border: 3px solid rgba(79, 3, 3, 0.1); */
  box-shadow: inset -5px -5px 5px rgba(255, 255, 255, 0.6),
    inset 5px 5px 5px rgba(0, 0, 0, 0.2);
}
</style>
