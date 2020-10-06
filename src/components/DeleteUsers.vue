<template>
    <div id="grid-container">
     <h2>Delete your profile</h2>
     <p>Enter your username</p>
     <input type="username" id="username-input" v-model="username">
     <p>Password</p>
     <input type="password" id="passworddelete-input" v-model="password">
   <button id="delete-button"><h3 @click="deleteUser">Delete Profile</h3></button>  
     <hr>
     
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "deleteUsers",
        data() {
            return {
               password: "",
               username: "",
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
                   password: this.password,
                   username: this.username
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
* {
  margin: 0;
  padding:0;
}
#grid.container{
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  justify-items: center;
  align-items: center;
}
#delete-button {
  justify-content: center;
  align-content: center;
  background-color: blue;
}

</style>