<template>
  <div>
    <router-link to="/profilepage">Check your feed!</router-link>
    <h1>Welcome to the Feed Page</h1>
    <tweet-form></tweet-form>

    
    
  </div>
</template>

<script>
import TweetForm from "../components/TweetForm.vue"

export default {
  name: "feed-page",
  
  components: {
   TweetForm,
    
  },

  }
 
</script>

<style>
.tweet-container{
  margin: 10px;
  padding:0;
}

</style>
