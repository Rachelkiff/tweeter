<template>
    <div id="body">
    <form class="box" method="post">
    <h2>Login</h2>
    <p>Email</p>
    <input type="text" id="email-input" v-model="email">
    <p>Password</p>
    <input type="password" id="password" v-model="password">
    <h3 @click="loginUser">Submit</h3>
    <h3>{{loginStatus}}</h3>
    <router-link to="/profilepage"></router-link>
    <router-link to="/signupform"></router-link>
    </form>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
    export default {
        data() {
            return {
                email: "",
                password: "",
                loginStatus: "",
            }
        },
        methods: {
            loginUser: function() {
                this.loginStatus = "Loading"
              axios.request({
                  method: "POST",
                  url: "https://tweeterest.ml/api/login",
                  headers: {
                      "Content-Type": "application/json",
                      "X-Api-Key": "Xc7IyBHOsKWUlmfQLaPXmGEhglZ54MbKDxNjIqNOUG8fE"
                  },
                  data: {
                      email: this.email,
                      password: this.password
                  }
              }).then((response)=>{
                  //check if login token sent
                  this.$router.push("/feedpage")
                  console.log(response)
                  this.loginStatus = "Success"
                  cookies.set("session", response.data.loginToken)
                  cookies.set ("userId", response.data.userId)
                   //send user to "home page"
              }).catch((error)=>{
                  // show user login failure
                  console.log(error)
                  this.loginStatus = "Error"
              })  
            }
        },
        
    }
</script>

<style lang="css" scoped>
body{
 margin: 0;
 padding: 0;
 font-family:'Courier New', Courier, monospace;
 background: pink;
}
.box{
    width: 300px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: magenta;
    text-align: center;
}
.box h2{
    color: white;
    text-transform: uppercase;
    font-weight: 500;
}
.box input[type = "text"],.box input[type = "password"]{
    border:0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: centre;
    border:2px solid salmon;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    }
    .box input[type = "text"]:focus,.box input[type = "password"]:focus{
        width: 280px;
        border-color:rgb(107, 107, 189);
    }
    .box input[type = "submit"]{
        border:0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: centre;
    border:2px solid rgb(107, 107, 189);
    padding: 14px 40px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
    }
    .box input[type = "submit"]:hover{
        background:rgb(107, 107, 189);
    }
    
</style>