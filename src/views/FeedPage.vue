<template>
  <div>
  <router-link to="/profilepage">Check your feed!</router-link>
    
 <h1>Welcome!</h1>
 <create-tweets></create-tweets>
 <edit-tweets></edit-tweets>
 <delete-tweets></delete-tweets>

  </div>
</template>

<script>
import CreateTweets from "../components/CreateTweets.vue";
import EditTweets from "../components/EditTweets.vue";
import DeleteTweets from "../components/DeleteTweets.vue"


export default {
  name: "feed-page",
  components: {
     CreateTweets,
     EditTweets,
     DeleteTweets
  },
}
</script>
