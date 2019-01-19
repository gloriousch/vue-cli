import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/movie'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'movie',
    component: Movie
  }, ]
})
