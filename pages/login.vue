<template>
  <div class="flex flex-col justify-center items-center w-full h-full">
    <div class="w-3/4 md:w-1/2 lg:w-1/3">
      <p>This is the login page</p>
      <div class="w-full mb-4">
        <InputField
          v-model="userInfo.email"
          type="text"
          placeholder="username or email"
        />
      </div>
      <div class="w-full mb-8">
        <InputField
          v-model="userInfo.password"
          type="password"
          placeholder="password"
        />
      </div>
      <div class="w-full mb-4">
        <Button label="login" @clicked="submit(userInfo)"></Button>
      </div>
      <div>
        <p class="text-xs">
          Forgotten your password? Click to change password
          <span class="font-bold cursor-pointer">here</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from '../components/Fields/InputField'
import Button from '../components/Button'
export default {
  layout: 'login',
  components: { InputField, Button },
  data: () => ({
    userInfo: {
      email: 'robinjamesauthor@gmail.com',
      password: 'PArktown1923!#',
    },
  }),
  methods: {
    submit(form) {
      this.$auth.loginWith('local', {
        data: this.userInfo,
      })
    },
  },
}
</script>

<style></style>
