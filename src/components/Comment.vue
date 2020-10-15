<template>
    <div>
      <h3>{{ commentObject.username}}</h3>
      <p>{{content}}</p>
      <delete-comment v-if="isOwned" :commentId="commentObject.commentId"> </delete-comment>
      <edit-comment @update-comment="updateComment" v-if="isOwned" :commentId="commentObject.commentId"></edit-comment>

    </div>
</template>

<script>
import DeleteComment from "./DeleteComment.vue";
import cookies from "vue-cookies";
import EditComment from "./EditComment.vue"


     export default {
        name: "page-comment",
        components:{
          DeleteComment,
          EditComment
        },
        
        props: {
            commentObject: {
              type: Object,
              required: true
            }
            },
        
        data() {
            return {
                isOwned: cookies.get("tweetId") == this.commentObject.tweetId,
                content: this.commentObject.content
            }
        },
        methods: {
          updateComment(newContent) {
              this.content = newContent
            
          }
        },
     }
</script>

<style scoped>

</style>
