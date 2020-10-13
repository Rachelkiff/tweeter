<template>
  <div class="container">
    <login-form v-if="login"></login-form>
  <signup-form v-else></signup-form>
  <p @click="login = !login" class="clickable-text" v-if="!login">I have an account</p>
  <p @click="login = !login" class="clickable-text" v-else>Sign up for a new account</p>
 

  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue"
import LoginForm from "../components/LoginForm.vue"
export default {
  name: "signup-page",
  components: {
    SignupForm,
    LoginForm
  },
}
</script>
