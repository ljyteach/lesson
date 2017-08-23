import Vue from 'vue';
import VueRouter from 'vue-router';
import art from '../components/art.vue'
import menu from '../components/menu.vue'

Vue.use(VueRouter);

export default new VueRouter({
	routes:[
		{path:'/',component:menu},
		{path:'/art',component:art}
	]
})