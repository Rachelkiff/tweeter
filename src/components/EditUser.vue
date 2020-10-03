<template>
    <div id="grid-container">
     <p>Edit User</p>
     <input type="text" id="edituser-input" v-model="edituser">
     <h2 @click="edituser"></h2>
     
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "edituser",
        data() {
            return {
               edituser: "",
            }
        },
          methods: {
          editUser: function() {
              axios.request({
                  method: "PATCH",
                  url: "https://tweeterest.ml/api/users",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },
                 data:{
                   edituser: this.edituser
                   }
              }).then((response) => {
                cookies.set("session", response.data.loginToken)
              }).catch((error) =>{
                console.log(error)
              })
                
            }
        },
    }
</script>

<style scoped>

</style>