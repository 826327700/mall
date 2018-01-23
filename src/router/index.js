import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout'
import routers from './routers'
import iView from 'iview';
import store from '../vuex/store'

Vue.use(Router)

const router =new Router({
    routes: [
        {
            path: '/',
            name: 'layout',
            component: Layout,
            children:routers
        }
    ]
})

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    if(to.fullPath=='/'){
        document.body.style.backgroundColor='#f5f5f5'
    }else{
        document.body.style.backgroundColor='#fff'
    }
    store.state.topType=to.meta.topType?to.meta.topType:'search'
    store.state.topStep=to.meta.topStep?to.meta.topStep:0
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});

export default router