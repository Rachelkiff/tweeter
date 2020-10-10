<template>
  <div>
  <router-link to="/profilepage">Check your feed!</router-link>
    
 <h1>Welcome!</h1>
 <create-tweets></create-tweets>
 <view-tweets></view-tweets>


  </div>
</template>

<script>
import CreateTweets from "../components/CreateTweets.vue";
import ViewTweets from "../components/ViewTweets.vue";



export default {
  name: "feed-page",
  components: {
     CreateTweets,
     ViewTweets,
     
  },
}
</script>
