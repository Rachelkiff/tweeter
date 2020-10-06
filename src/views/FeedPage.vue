<template>
  <div>
  <router-link to="/profilepage">Check your feed!</router-link>
    
 <h1>Welcome!</h1>
 <delete-users></delete-users>
 <edit-user></edit-user>
 <view-users></view-users>

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
