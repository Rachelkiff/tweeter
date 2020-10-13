<template>
    <div>
      <h3>Tweety tweet</h3>
    </div>
</template>

<script>
    export default {
        name: "page-tweet",
        props: {
            tweetObject:{
                type: Object,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>