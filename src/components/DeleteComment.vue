<template>
    <div>
     <h3 @click="deleteComment">Delete comment</h3>
    </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios"
    export default {
        name: "delete-comment",
        props: {
           CommentId:{
               type: Number,
               required: true
           }
        },
        methods: {
            deleteComment: function() {
                 axios.request({
          url: "https://tweeterest.ml/api/comments",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
          },
          data: {
              loginToken: cookies.get("session"),
              commentId: this.commentId

          }
        }).then(response => {
          console.log(response);
          
        }).catch(error => {
          console.log(error);
        });
    }
  }
};
            
</script>

<style lang="scss" scoped>

</style>