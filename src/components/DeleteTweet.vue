<template>
    <div>
     <h2 @click="deleteTweet">Delete</h2>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: "delete-tweet",
        props: {
           tweetId:{
               type: Number,
               required: true
           }
        },
        methods: {
            deleteTweet: function() {
         axios.request({
          url: "https://tweeterest.ml/api/tweets",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
          },
          data: {
              loginToken: cookies.get("session"),
              tweetId: this.tweetId
          }
        })
        .then(response => {
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