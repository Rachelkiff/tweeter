<template>
    <div>
       <button @click="likeTweet(tweetId)" v-if="isLiked == false">Like</button>
       <button @click="unlikeTweet(tweetId)" v-else-if="isLiked == true">unLike</button>
       <div>
         Likes:{{ likesAmount }}
       </div>
    </div>
    
</template>

<script>
import axios from "axios"
import cookies from "cookies"
    export default {
        name: "like-tweet",
          data () {
            return {
               likesNumber: [],
               isLiked: false,
               likesAmount: 0,
            }
        },
        props: {
         tweetId: Number,
                
            },
            mounted: function(){
              this.retrieveLikes();
            },
            methods:{
               likeTweet: function() {
                 (this.isLiked = true),
               axios.request({
                  method: "post",
                  url: "https://tweeterest.ml/api/tweet-likes",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },

                 data:{
                  loginToken: cookies.get("session"),
                  tweetId: this.tweetId
                   },
            }).then((response) => {
                this.likesAmount++;
                console.log(response);
              }).catch((error) =>{
                 console.log(error);
              })
            },
            retrieveLikes: function() {
              axios.request({
                method: "GET",
                  url: "https://tweeterest.ml/api/tweet-likes",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },
                  params:{
                    tweetId:this.tweetId,
                  }
              }).then((response) => {
                this.likesNumber = response.data;
                this.likesAmount = this.likesNumber.length;
                console.log(response);

                let loggedUser = cookies.get('userId');
                for (let i = 0; i < this.likesNumber.length; i++){
                  if(loggedUser == this.likesNumber[i].userId){
                    this.isLiked = true;
                    return;
                  }
                }
            }).catch((error)=>{
              console.log(error);
           })
            },
            unlikeTweet: function() {
              (this.isLiked = false),
              axios.request({
                  method: "delete",
                  url: "https://tweeterest.ml/api/tweet-likes",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },

                   data:{
                  loginToken: cookies.get("session"),
                  tweetId: this.tweetId
                   },
           
              
              }).then((response) => {
                this.likesAmount --;
                console.log(response)
              }).catch((error) => {
                console.log(error);

              })
            }
            },
            }
    
     
</script>

<style lang="scss" scoped>

</style>