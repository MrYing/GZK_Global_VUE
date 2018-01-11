// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {mapGetters, mapActions} from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import 'less/main.less'

import iView from 'iview'
// import './less/theme/index.less'

import 'iview/dist/styles/iview.css'   // 使用 CSS

Vue.use(iView);
Vue.config.productionTip = false


router.afterEach((to, from) => {

})

/*const i18n = new VueI18n({
 locale: 'CN',    // 语言标识
 messages: {
 'CN': require('./common/cn'),   // 中文语言包
 'EN': require('./common/en')    // 英文语言包
 },
 })*/

export default{
    ...mapGetters({
            getUser: 'getUser',
            setLoginStatus: "setLoginStatus"
        }
    )
}


/*登录判断*/
router.beforeEach((to, from, next) => {
    setTimeout(()=>{
        console.log(store);
        let intFirstLogin = store.getters.getUser.intFirstLogin;
        console.log('store.getters.getUser.intFirstLogin',intFirstLogin)
        /*1第一次登录 2不是第一次登录*/
        let intLoginStatus = store.getters.getUser.intLoginStatus;
        /*1登录成功  2登录失败*/
        /* console.log(intFirstLogin == 1)*/
        // console.log('登录', intLoginStatus == 1)
        console.log('1第一次登录 2不是第一次登录', intFirstLogin)
        // console.log(to.path.includes('userLogin'))
        if (to.path.includes('userLogin')) {
            next()
        } else {
            if (intLoginStatus == 2) {
                next({
                    path: '/userLogin',
                })
            } else {
                /**/
                console.log("1111111111111111111111");
                if (intFirstLogin == 1 && !to.path.includes('/userOnePassword')) {
                    next({
                        path: '/userOnePassword',
                    })
                } else {
                    next()
                }
            }

        }
    },30)
})


new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
