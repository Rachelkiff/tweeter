<template>
    <div>
    <h1>This is the Login</h1>
    <p>Email</p>
    <input type="text" id="email-input" v-model="email">
    <p>Password</p>
    <input type="password" id="password" v-model="password">
    <h2 @click="loginUser">login</h2>
    <h3>{{loginStatus}}</h3>
    <router-link to="/profilepage"></router-link>
    
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
                  this.$router.push("/profilepage")
                  console.log(response)
                  this.loginStatus = "Success"
                  cookies.set("session", response.data.loginToken)
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