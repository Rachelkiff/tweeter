<template>
  <div>
    <h3 @click="shouldShow = !shouldShow">Edit</h3>
    <div v-if="shouldShow">
      <textarea v-model="tweetContent"></textarea>
      <h3 @click="editTweet">Submit</h3>
    </div>
  </div>
</template>

<script>
import cookies from"vue-cookies";
import axios from "axios";
    export default {
        name: "edit-tweet",
        data() {
            return {
             shouldShow: false,
             tweetContent: ""
            }
        },
        props: {
           tweetId:{
               type:Number,
               required: true
           }
        },
        methods: {
          editTweet: function() {
          axios.request({
          url: "https://tweeterest.ml/api/tweets",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
          },
          data: {
              loginToken: cookies.get("session"),
              tweetId: this.tweetId,
              content: this.tweetContent
              

          }
        }).then(response => {
          console.log(response);
          this.$emit('update-tweet', this.tweetContent)
          this.shouldShow = false;
        }).catch(error => {
          console.log(error);
           this.tweetContent = "Something happened!";
        });
    }
  }
};
    
</script>

<style lang="scss" scoped>
</style>