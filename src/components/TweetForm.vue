<template>
  <div>
    <h2>{{ tweetStatus }}</h2>
    <textarea v-model="tweetContent"></textarea>
   <button><h2 @click="postTweet()">Post Tweet</h2></button> 
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "tweet-form",
  
  data() {
    return {
      tweetContent: "",
      tweetStatus:""
    };
  },
  methods: {
    postTweet: function() {
        this.tweetStatus = "Tweety tweets"
         axios.request({
          method: "POST",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
          },
          data: {
            loginToken: cookies.get("session"),
            content: this.tweetContent
          },
     
        }).then(response => {
          console.log(response);
           this.tweetStatus = "Updated!";
        }).catch(error => {
          console.log(error);
          this.tweetStatus = "Something happened!";
        });
    }
  }
};
</script>

<style scoped>
</style>