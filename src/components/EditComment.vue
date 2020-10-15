<template>
    <div>
     <h3 @click="shouldShow = !shouldShow">Edit Comment</h3>
    <div v-if="shouldShow">
      <textarea v-model="CommentContent"></textarea>
      <h3 @click="editComment">Submit</h3>
    </div>
    </div>
</template>

<script>
import cookies from"vue-cookies";
import axios from "axios";
    export default {
        name: "edit-comments",
        data() {
            return {
             shouldShow: false,
             commentContent: ""
            }
        },
        props: {
           commentId:{
               type:Number,
               required: true
           }
        },
        methods: {
          editComment: function() {
          axios.request({
          url: "https://tweeterest.ml/api/comments",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
          },
          data: {
              loginToken: cookies.get("session"),
              commentId: this.commentId,
              content: this.tweetContent
            }
        }).then(response => {
          console.log(response);
          this.$emit('update-comment', this.commentContent)
          this.commentContent = "Comment edit successful!"
        }).catch(error => {
          console.log(error);
           this.commentContent = "Something happened!";
        });
    }
  }
};
    
</script>

<style lang="scss" scoped>

</style>