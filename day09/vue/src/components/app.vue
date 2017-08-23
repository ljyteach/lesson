<template>
    <div>
        <input v-model="newfruit" type="text">
        <button @click="insert">添加</button>
        <fruitlist
         @myevent="del" 
         v-bind:fruits="fruits"
         ></fruitlist>
    </div>
</template>

<style>
    
</style>

<script>
    import fruitlist from './fruitlist.vue';
    import axios from 'axios';
    export default {
        data:function(){
            return {
                fruits:null,
                newfruit:''
            }
        },
        mounted:function(){
            let self = this;
            axios.get('/data/text.json').then(function(res){
                self.fruits = res.data;
            })
        },
        methods:{
            insert:function(){
                this.fruits.push(this.newfruit)
            },
            del:function(index){
                this.fruits.splice(index,1)
            }
        },
        components:{fruitlist}
    }
</script>