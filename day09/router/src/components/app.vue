<template>
    <div>
        <ul>
            <li><router-link to="/">主页</router-link></li>
            <li><router-link to="/video">视频</router-link></li>
            <li><router-link to="/movie">电影</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>