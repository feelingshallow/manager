<template>
    <div>
        zhuye
        <el-button type="primary" @click="go">跳转</el-button>
    </div>
</template>
<script>

export default {
    
     methods: {
         go(){
             this.$router.push('./person/main')
         }
     },
}

</script>

<style scoped>
    
</style>