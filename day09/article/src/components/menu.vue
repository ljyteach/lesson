<template>
	<ul>
		<li v-for="art in arts">
			<router-link v-bind:to="{path:'art',query:{title:art.title}}">{{art.title}}</router-link>
		</li>
	</ul>
</template>

<script>
	import axios from 'axios';
	export default {
		data:function(){
			return {
				arts:null
			}
		},
		mounted(){
			var vm = this
			axios.get('/getdata').then(function(res){
				vm.arts = res.data;
			},function(err){
				console.log(err);
			})
		}
	}
</script>