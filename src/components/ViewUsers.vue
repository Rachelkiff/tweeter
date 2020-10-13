<template>
    <div id="grid-container">
        <hr>
      <h2>Find a friend!</h2>
     <input type="viewUsers" id="viewusers-input" v-model="viewusers">
        <h3 @click="viewUsers"></h3>
      <h4>{{status}}</h4>
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
                 params:{
                  userId: 1,
                  
            },
              
              }).then((response) => {
                console.log(response)
                this.status ="Updated!"
              }).catch((error) =>{
                console.log(error)
                this.status = "Something happened!"
              })
                
            }
        },
    }
 
</script>

<style lang="scss" scoped>

</style>