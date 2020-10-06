<template>
    <div id="grid-container">
     <p>Enter your new Tweet!</p>
      <textarea id="tweet-input" v-model="createtweets" ></textarea>
      <h3 @click="Newtweet">Submit Tweet</h3>
      <h4>{{status}}</h4>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"


    export default {
        name: "createtweets",
        data() {
            return {
               createtweets:"",
               status:"",
            }
        },
          methods: {
          createTweet: function() {
            this.status = "loading"
              axios.request({
                  method: "POST",
                  url: "https://tweeterest.ml/api/users",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },
                 data:{
                  loginToken: cookies.get("session"),
                  createTweets: this.createTweets
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