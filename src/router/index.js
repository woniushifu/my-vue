import Vue from 'vue'
import Router from 'vue-router'
// 引入路由组件
import home from '../components/body/Home.vue'
import my from '../components/body/My.vue'
import store from '../components/body/Store.vue'
import no from '../components/body/No.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/Home',
            component: home
        },
        {
            path: '/My',
            component: my
        },
        {
            path: '/Store',
            component: store
        },
        {
            path: '/No',
            component: no
        },
    ],
    mode: 'history',
    linkActiveClass: 'active'
})
