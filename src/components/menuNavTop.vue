<template>
  <div>
      <Menu mode="horizontal" :theme="theme1" active-name="1">
          <router-link :to='{name:"mySuperSuProList"}'>  <MenuItem name="1">
              <Icon type="android-person-add"></Icon>
              邀请他人权限
          </MenuItem></router-link>
          <router-link :to='{name:"myCompanyJurisdiction"}'>   <MenuItem name="2">
              <Icon type="ios-people"></Icon>
              公司管理权限
          </MenuItem>
          </router-link>
          <router-link :to='{name:"myPersonnelJurisdiction"}'>   <MenuItem name="4">
              <Icon type="android-people"></Icon>
              人员管理权限
          </MenuItem>
          </router-link>
          <router-link :to='{name:"myApplyJurisdiction"}'>   <MenuItem name="4">
              <Icon type="clipboard"></Icon>
              申请管理权限
          </MenuItem>
          </router-link>
      </Menu>
  <!-- <Menu mode="horizontal" :theme="theme1" active-name="1">
      <router-link :to='{name:"mySuperSuProList"}'> <MenuItem name="21">
        <Icon type="android-person-add"></Icon>
       邀请他人权限
      </MenuItem></router-link>
      <router-link :to='{name:"myCompanyJurisdiction"}'> <MenuItem name="22">
        <Icon type="ios-people"></Icon>
       公司管理权限

      </MenuItem></router-link>
      <router-link :to='{name:"myPersonnelJurisdiction"}'> <MenuItem name="23">
        <Icon type="android-people"></Icon>
       人员管理权限
      </MenuItem></router-link>
      <router-link :to='{name:"myApplyJurisdiction"}'> <MenuItem name="23">
        <Icon type="clipboard"></Icon>
        申请管理权限

      </MenuItem></router-link>
    </Menu>-->
  </div>

</template>
<script>
  export default{
    data () {
      return {
        theme1: 'light'
      }
    },
    components: {},
    methods: {},
    mounted () {

    },
    watch: {}
  }

</script>
