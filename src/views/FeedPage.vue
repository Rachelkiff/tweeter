<template>
  <div>
    <router-link to="/profilepage">View other users!</router-link>
    <h1>Feed Page</h1>
    <tweet-form></tweet-form>
    
    <button @click="getTweets">Refresh Tweety tweets</button>
    <div v-for="tweet in tweets" :key="tweet.tweetId"></div>
    <tweet-card :tweetObject="tweet"></tweet-card>
  </div>
</template>

<script>
import axios from "axios";
import TweetForm from "../components/TweetForm.vue";
import TweetCard from "../components/Tweet.vue";

export default {
  name: "feed-page",
  data() {
    return {
      tweets: []
    };
  },

  components: {
    TweetForm,
    TweetCard
  },
  mounted: function (){
    this.getTweets();
  },
  methods: {
    getTweets: function() {
      axios.request({
          url: "https://tweeterest.ml/api/tweets",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
          }
        })
        .then(response => {
          console.log(response);
          this.tweets = response.data;
        }).catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.tweet-container {
  margin: 10px;
  padding: 0;
}
</style>
