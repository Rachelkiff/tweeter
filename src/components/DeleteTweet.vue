<template>
  <div>
      <h4>Delete</h4> 
       

    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: "delete-tweet",
        props: {
            tweetId: {
                type: Number,
                required: true
            }
        },
        methods: {
          deleteUser: function() {
              axios.request({
                  method: "DELETE",
                  url: "https://tweeterest.ml/api/tweets",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },
                 data:{
                   loginToken: cookies.get("session"),
                   tweetId: this.tweetId
                   }
              }).then((response) => {
                console.log(response)
                cookies.remove("session")
                this.$router.push("/signup")
              }).catch((error) =>{
                console.log(error)
              })
                
            }
        },
    }
</script>

<style scoped>

</style>