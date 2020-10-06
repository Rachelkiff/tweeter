<template>
  <div>
  <router-link to="/profilepage">Check your feed!</router-link>
    
 <h1>Welcome!</h1>
 <create-tweets></create-tweets>

  </div>
</template>

<script>
import CreateTweets from "../components/CreateTweets.vue";


export default {
  name: "feed-page",
  components: {
     CreateTweets
  },
}
</script>
