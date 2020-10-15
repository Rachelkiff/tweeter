<template>
  <div>
    <router-link to="/feedpage">Check your feed</router-link>||
    <router-link to="/profilepage">Edit your profile</router-link>
    <comment-form></comment-form>
    <div v-for="comment in comments" :key="comment.commentId">
   <comment-card :commentObject="comment"> </comment-card>
    </div>
    
 <h1>Find your Friends!</h1>


  </div>
</template>

<script>
import axios from "axios";

import CommentCard from "../components/Comment.vue";
import CommentForm from "../components/CommentForm.vue"
export default {
  name: "discover-page",
   data(){
    return {
      comments:[]
    }
  },
  components: {
    CommentForm,
    CommentCard
  },
 
  methods: {
    getComments: function() {
          axios.request({
          url: "https://tweeterest.ml/api/comments",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
          }
        }).then(response => {
          console.log(response);
          this.comments = response.data;
        }).catch(error => {
          console.log(error);
        });
    }
  }
};
  
</script>
