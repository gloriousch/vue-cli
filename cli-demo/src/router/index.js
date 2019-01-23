import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/movie'
import movieDetail from '@/components/movie/movieDetail'
import Music from '@/components/music/music'
import Photo from '@/components/photo/photo'
import Mine from '@/components/mine/mine'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'movie',
      component: Movie
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/movieDetail',
      name: 'movieDetail',
      component: movieDetail
    }
  ]
})
