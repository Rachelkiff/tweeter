<template>
    <div id="grid-container">
        <hr>
      <h2>Edit your Tweet</h2>
     <p>Email</p>
     <input type="email" id="email-input" v-model="email">
     <p>Username</p>
     <input type="username" id="username-input" v-model="username">
     <p>Password</p>
     <input type="password" id="password-input" v-model="password">
     <p>Bio</p>
      <textarea id="bio-input" v-model="bio" ></textarea>
      <h3 @click="editTweets">Submit Changes</h3>
      <h4>{{status}}</h4>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"


    export default {
        name: "edittweets",
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
          editTweets: function() {
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