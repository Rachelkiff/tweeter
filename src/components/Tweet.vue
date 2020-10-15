<template>
  <div>
    <h3>{{ tweetObject.username }}</h3>
    <p>{{ content }}</p>
    <p>{{ tweetObject.createdAt }}</p>
    <delete-tweet v-if="isOwned" :tweetId="tweetObject.tweetId"> </delete-tweet>
    <like-tweet :tweetId="tweetObject.tweetId" ></like-tweet>
    <edit-tweet @tweet-update="updateTweet" v-if="isOwned" :tweetId="tweetObject.tweetId"></edit-tweet>
    <comment-form :tweetId="tweetObject.tweetId"></comment-form>
    
  </div>
</template>

<script>
import DeleteTweet from "./DeleteTweet.vue";
import cookies from "vue-cookies";
import EditTweet from "./EditTweet.vue";
import CommentForm from "./CommentForm.vue";
import LikeTweet from "./LikeTweet.vue"

export default {
  name: "page-tweet",
  components: {
    DeleteTweet,
    EditTweet,
    CommentForm,
    LikeTweet
  },
  props: {
    tweetObject: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isOwned: cookies.get("userId") == this.tweetObject.userId,
      content: this.tweetObject.content
    };
  },
  methods: {
      updateTweet(newContent) {
          this.content = newContent
          
      }
  },
};
  

</script>

<style scoped>
</style>