<template>
    <div id="grid-container">
     <hr>
     <h2>Delete Your Tweet</h2>
     <p>Enter your username</p>
     <input type="username" id="username-input" v-model="username">
     <p>Password</p>
     <input type="password" id="passworddelete-input" v-model="password">
   <button id="delete-button"><h3 @click="deleteTweets"></h3></button>  
     <hr>
     
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "deleteTweets",
        data() {
            return {
               password: "",
               username: "",
            }
        },
          methods: {
          deleteTweets: function() {
              axios.request({
                  method: "DELETE",
                  url: "https://tweeterest.ml/api/users",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },
                 data:{
                   loginToken: cookies.get("session"),
                   password: this.password,
                   username: this.username
                   }
              }).then((response) => {
                console.log(response)
                cookies.remove("session")
                this.$router.push("/feedpage")
              }).catch((error) =>{
                console.log(error)
              })
                
            }
        },
    }
</script>

<style scoped>
* {
  margin: 0;
  padding:0;
}
#grid.container{
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  justify-items: center;
  align-items: center;
}
</style>