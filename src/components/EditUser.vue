<template>
    <div id="grid-container">
      <h2>Update your info</h2>
     <p>New Email</p>
     <input type="email" id="email-input" v-model="email">
     <p>New Username</p>
     <input type="username" id="username-input" v-model="username">
     <p>New Password</p>
     <input type="password" id="password-input" v-model="password">
     <p>New Bio</p>
      <textarea id="bio-input" v-model="bio" ></textarea>
      <h3 @click="editUser">Submit Changes</h3>
      <h4>{{status}}</h4>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"


    export default {
        name: "edituser",
        data() {
            return {
               email: "",
               username: "",
               password: "",
               bio:"",
               status:"",
            }
        },
          methods: {
          editUser: function() {
            this.status = "loading"
              axios.request({
                  method: "PATCH",
                  url: "https://tweeterest.ml/api/users",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },
                 data:{
                  loginToken: cookies.get("session"),
                  email: this.email,
                  username: this.username,
                  password: this.password,
                  bio: this.bio,
            },
              
              }).then((response) => {
                console.log(response)
                this.status ="Updated!"
              }).catch((error) =>{
                console.log(error)
                this.status = "Error"
              })
                
            }
        },
    }
</script>

<style scoped>

</style>