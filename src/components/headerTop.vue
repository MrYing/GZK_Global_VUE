<template>
    <div id="gzkHeaderTop" style="box-sizing: border-box;position: relative">
        <p class="g-fl gzk_title"><label tx="strlng_home_title">果真快 . 物流链平台管理</label></p>
        <div :class="'user_header_box fr'">
            <Dropdown>
                <div class="demo-avatar-badge g-fl" style="margin-right: 20px;" @click="avatar_messageInfo()">
                    <Badge count="1">
                        <Avatar shape="square" icon="person"/>
                    </Badge>
                </div>
                <a href="javascript:void(0)" class="f">
                  <label tx="strlng_hY">欢迎   </label>   {{getUser.strUserAlias}}
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <router-link :to='{name:"gzkUserSet"}'>
                        <DropdownItem><label tx="strlng_user_center_my_alias">我的昵称</label></DropdownItem>
                    </router-link>
                    <router-link :to='{name:"gzkUserPassword"}'>
                        <DropdownItem><label tx="strlng_user_center_change_password">修改密码</label></DropdownItem>
                    </router-link>
                    <div @click="autoUser()">
                        <DropdownItem><label tx="strlng_user_center_signout">退出登录</label></DropdownItem>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    import {gcmlng} from '.././common/lng'

    let selfLng = new gcmlng(1);
    export default{
        data () {
            return {
                strUserAlias:'',
                uaername: "果真快"
            }
        },
        components: {},
        computed: {
            ...mapGetters({
                    getUser: 'getUser'
                }
            )
        },
        methods: {
            ...mapActions({
                setUser:"setUser"
            }),
            autoUser(){
                this.$router.push({name: 'userLogin'})
                this.setUser({intLoginStatus:2});
                window.intLng=0;
            },
            avatar_messageInfo(){
                this.$router.push({name: 'GzkWllMessageInfo'})
            },
            onChangeLngPages(item) {
                switch (item){
                    case 0:
                        selfLng.doSetLngID(1);
                        console.log("0")
                        break;
                    case 1:
                        selfLng.doSetLngID(2);
                        console.log("1")
                        break;
                    case 2:
                        selfLng.doSetLngID(3);
                        console.log("2",window.intLng)

                        break;
                    case 3:
                        console.log("3")
                        selfLng.doSetLngID(0);
                        console.log(window.intLng)

                        break;
                }
                selfLng.doUpdateLngDesc();
            },
        },

        mounted () {
            this.onChangeLngPages(window.intLng);

        },
        watch: {}
    }

</script>
