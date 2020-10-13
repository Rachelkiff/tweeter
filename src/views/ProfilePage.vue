<template>
  <div>
  <router-link to="/login">Log out</router-link>
  <router-link to="/feedpage">check your feed</router-link>
 
    
 <h1>Welcome!</h1>
 <delete-users></delete-users>
 <edit-user></edit-user>
 <view-users></view-users>

  </div>
</template>

<script>
import DeleteUsers from "../components/DeleteUsers.vue";
import EditUser from "../components/EditUser.vue";
import ViewUsers from "../components/ViewUsers.vue"

export default {
  name: "profile-page",
  components: {
    DeleteUsers,
    EditUser,
    ViewUsers
  },
}
</script>
