<template>
  <div>
    <router-link to="/login">Login</router-link>
    
 <h1>View your Profile!</h1>
 <tweeter-users></tweeter-users>
 <edit-user></edit-user>

  </div>
</template>

<script>
import TweeterUsers from "../components/tweeterUsers.vue"
import EditUser from "../components/EditUser.vue"

export default {
  name: "profile-page",
  components: {
    TweeterUsers,
    EditUser
  },
}
</script>
