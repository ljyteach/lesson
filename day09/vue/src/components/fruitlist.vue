<template>
    <ul>
        <li v-for="fruit,index in fruits">
            {{fruit}}
            <span @click="del(index)">删除</span>
        </li>
    </ul>
</template>

<style scoped>
    span{
        color:red;
    }
</style>

<script>
    export default {
        props:["fruits"],
        methods:{
            del:function(index){
                this.$emit('myevent',index)
            }
        }
    }
</script>