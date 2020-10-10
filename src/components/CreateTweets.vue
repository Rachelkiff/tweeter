<template>
    <div id="grid-container">
     <p>Enter your new Tweet!</p>
      <textarea id="tweet-input" v-model="createtweets" ></textarea>
      <h3 @click="createTweet">Submit Tweet</h3>
      <h4>{{status}}</h4>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"


    export default {
        name: "createTweets",
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
                  url: "https://tweeterest.ml/api/tweets",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },
                 data:{
                  loginToken: cookies.get("session"),
                  content: this.createtweets
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