import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './components/home.vue';
import movie from './components/movie.vue';
import video from './components/video.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {path:'/',component:home},
        {path:'/movie',component:movie},
        {path:'/video',component:video}
    ]
})


