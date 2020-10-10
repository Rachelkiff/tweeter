<template>

    <div class="TweeterBox-footer">
        <button circle:type="isLiked ? 'success' : ''" :icon="isLiked ? 'el-icon-star-on' : 'el-icon-star-off'" @click="toggleLike"></button>
        <span>{{tweet.likes.length}}</span>
        <span class="spacer"></span>
        <el-popover>
       

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>