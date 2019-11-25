<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in list">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "bread",
        data: () => ({

        }),
        props:{
          list:[]
        },
        methods: {},
        mounted() {
        }


    }
</script>

<style scoped lang="scss">

</style>