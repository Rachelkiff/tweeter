<template>
    <div>
    <h2>Login</h2>
    <p>Email</p>
    <input type="text" id="email-input" v-model="email">
    <p>Password</p>
    <input type="password" id="password" v-model="password">
    <h2 @click="loginUser">Submit</h2>
    <h3>{{loginStatus}}</h3>
    <router-link to="/profilepage"></router-link>
    <router-link to="/signupform"></router-link>
    <hr>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
    export default {
        data() {
            return {
                email: "",
                password: "",
                loginStatus: "",
            }
        },
        methods: {
            loginUser: function() {
                this.loginStatus = "Loading"
              axios.request({
                  method: "POST",
                  url: "https://tweeterest.ml/api/login",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },
                  data: {
                      email: this.email,
                      password: this.password
                  }
              }).then((response)=>{
                  //check if login token sent
                  this.$router.push("/feedpage")
                  console.log(response)
                  this.loginStatus = "Success"
                  cookies.set("session", response.data.loginToken)
                  cookies.set ("userId", response.data.userId)
                   //send user to "home page"
              }).catch((error)=>{
                  // show user login failure
                  console.log(error)
                  this.loginStatus = "Error"
              })  
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>