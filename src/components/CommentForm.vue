<template>
    <div>
     <h3>{{ commentStatus }}</h3>
    <textarea v-model="commentContent"></textarea>
   <button><h3 @click="postComment()">Post Comment</h3></button> 
  </div>

</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: "comment-form",
         data() {
            return {
            commentContent: "",
            commentStatus:""
    }
  },
  methods: {
    postComment: function() {
        this.commentStatus = "comment"
      axios.request({
          method: "POST",
          url: "https://tweeterest.ml/api/comments",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
          },
          data: {
           commentContent: this.commentContent,
           loginToken: cookies.get("session"),
           tweetId: this.tweetId
           
          }
     
        }).then(response => {
          console.log(response);
          this.commentStatus = "Updated!";
        }).catch(error => {
          console.log(error);
          this.commentStatus = "Something happened!";
        });
    }
  }
};
    
</script>

<style lang="scss" scoped>

</style>