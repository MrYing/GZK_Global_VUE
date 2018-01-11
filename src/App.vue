<template>
    <div id="app" style="min-width: 1000px;background-color: #eeeeee">
        <div :class=" 'GZk_box' " id="GZk_box" style="position: relative">
            <MainNavLeft></MainNavLeft>
            <HeaderTop></HeaderTop>
            <div>
                <div id="gzk_editor"
                     :class="{ 'gzk_editorSty': getLoginStatus }">
                    <router-view></router-view>
                </div>
            </div>


            <!-- <keep-alive exclude="enroll">
               <router-view v-if="$route.meta.keepAlive"></router-view>
             </keep-alive>
             <router-view v-if="!$route.meta.keepAlive"></router-view>-->
        </div>
        <div class="gzk_bottom">
            <p>
                CopyRight @ 广州果真快信息科技有限公司
            </p>
        </div>
    </div>
</template>

<script>
    /*在哪个地方使用组件 在哪引用*/
    import MainNavLeft from './components/menuNavLeft';
    import HeaderTop from './components/headerTop';
    import {mapGetters} from 'vuex'


    export default {
        data() {
            return {

            }
        },
        /*components 注册 */
        components: {
            MainNavLeft, HeaderTop
        },
        computed: {
            ...mapGetters({
                    getLoginStatus: 'getLoginStatus'
                }
            )
        },

        methods: {},
        created() {
            console.log(this.getLoginStatus);
        },

    }
</script>

