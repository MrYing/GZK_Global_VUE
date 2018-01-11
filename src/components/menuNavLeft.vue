<template>
  <div id="gzkMenuNavLeft">

    <Menu :theme="theme2" :style='{minHeight:minHeight}'>
      <div class="menuNavTopImg">
        <img  src="http://www.guozk.com/images/applogo.png" alt="图片未显示">
        <p class="userName">{{getUser.strUserAlias}}</p>
      </div>
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-paper"></Icon>
          <label tx="strlng_home_my_container">我的集装箱</label>
        </template>
        <router-link :to='{name:"logisticsList"}'><MenuItem name="1-1"> <label tx="strlng_my_container_list_title">我的货柜</label></MenuItem></router-link>

      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-people"></Icon>
          管理者权限
        </template>
        <router-link :to='{name:"companySuperSuProList"}'> <MenuItem name="2-2">公司权限</MenuItem></router-link>
        <router-link :to='{name:"memberSuperSUProList"}'> <MenuItem name="2-1">成员权限</MenuItem></router-link>
        <router-link :to='{name:"mySuperSuProList"}'> <MenuItem name="2-3">系统权限</MenuItem></router-link>
      </Submenu>
    </Menu>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    data () {
      return {
        theme2: 'dark',
        username: "果真快",
        minHeight: document.documentElement.clientHeight+'px' || document.body.clientHeight+'px',

      }
    },
    components: {},
    computed: {
      ...mapGetters({
          getUser: 'getUser'
        }
      )
    },
    methods: {},
    mounted () {
    },
    watch: {}
  }

</script>
