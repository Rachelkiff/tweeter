<template>
    <div>
      <h3>{{ tweetObject.username}}</h3>
      <p>{{ tweetObject.content}}</p>
      <p>{{ tweetObject.createdAt }}</p>
      <delete-tweet v-if="isOwned" :tweetId="tweetObject.tweetId"> </delete-tweet>
    </div>
</template>

<script>
import DeleteTweet from "../components/DeleteTweet.vue";
import cookies from "vue-cookies"

    export default {
        name: "page-tweet",
        components: {
            DeleteTweet
        },
        props: {
            tweetObject:{
                type: Object,
                required: true
            }
        },
        data() {
            return {
                isOwned: cookies.get('userId') == this.tweetObject.userId
            }
        },
    }
</script>

<style scoped>

</style>