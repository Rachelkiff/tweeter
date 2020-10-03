<template>
    <div id="grid-container">
     <p>Delete User</p>
     <input type="text" id="delete-input" v-model="password">
     <h2 @click="deleteUser"></h2>
     
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "tweeterUsers",
        data() {
            return {
               password: "",
            }
        },
          methods: {
          deleteUser: function() {
              axios.request({
                  method: "DELETE",
                  url: "https://tweeterest.ml/api/users",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },
                 data:{
                   loginToken: cookies.get("session"),
                   password: this.password
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