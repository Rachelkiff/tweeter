<template>
  <div id="grid-container">
    <hr />
    <h2>Find tweets</h2>
    
    <h3 @click="viewTweets">Click</h3>
    <h4>{{ status }}</h4>
    <div v-for="tweet in viewtweets" :key="tweet.tweetId">
     <p>{{ tweet.content }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "viewtweets",
  data() {
    return {
      viewtweets: [],
      status: ""
    };
  },
  methods: {
    viewTweets: function() {
      this.status = "loading";
      axios
        .request({
          method: "get",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
          },
          data: {
            loginToken: cookies.get("session")
          }
        })
        .then(response => {
          console.log(response);
          this.status = "Updated!";
          this.viewtweets = response.data
        })
        .catch(error => {
          console.log(error);
          this.status = "Error";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>