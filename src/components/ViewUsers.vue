<template>
    <div id="grid-container">
        <hr>
      
     <h3 @click="viewUsers">Find a friend</h3>
     <div v-for="user in users" :key="user.userId">
       <h4>{{user.username}}</h4> 
       <button @click="followUser(user.userId)">Follow</button>
       <button @click="unfollowUser(user.userId)">unFollow</button>

       </div>
      
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
    export default {
        name: "viewusers",
        data () {
            return {
             viewusers: "",
             status: "",
             users: []
            }
        },
         methods: {
          viewUsers: function() {

            this.status = "loading"
              axios.request({
                  method: "get",
                  url: "https://tweeterest.ml/api/users",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },

                   data:{
                  loginToken: cookies.get("session"),
                   },
           
              
              }).then((response) => {
                console.log(response)
                this.users = response.data
                this.status ="Updated!"
              }).catch((error) =>{
                console.log(error)
                this.status = "Something happened!"
              })
                
            },
            followUser(userId) {
              axios.request({
                  method: "post",
                  url: "https://tweeterest.ml/api/follows",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },

                   data:{
                  loginToken: cookies.get("session"),
                  followId: userId
                   },
           
              
              }).then(() => {
                
              }).catch(() =>{
               
              })
            },
            unfollowUser(userId) {
              axios.request({
                  method: "delete",
                  url: "https://tweeterest.ml/api/follows",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },

                   data:{
                  loginToken: cookies.get("session"),
                  followId: userId
                   },
           
              
              }).then(() => {
                
              }).catch(() =>{
               
              })
            },
            }
        }
    
 
</script>

<style lang="scss" scoped>

</style>