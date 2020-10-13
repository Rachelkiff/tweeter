<template>
  <div class="container">
    <login-form ></login-form>
   <signup-form ></signup-form>
 
 

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
