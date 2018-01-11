<template>
    <div id="home" style="text-align: center">
      欢迎来到 果真快物流链平台管理
      <br>
      开始你的操作吧！
    </div>
</template>

<script>

/*接口api*/
  import selfGZKMsgCtrl from 'getDataApi/index';
  import GetMsg from 'getDataApi/doMsg';




  export default{
    data () {
      return {

      }
    },
    components: {},
    methods: {},
    mounted () {

    },
    created(){


/*测试 数据请求*/
        var str='18307005653'
       selfGZKMsgCtrl.doBindMsg(204, (data)=>{
      });
      selfGZKMsgCtrl.doSendAppMsg(GetMsg.doCreate_gcmMsg_204_ForgotPassword(window.intSetLngID,str))
       /* console.log(GetMsg.doCreate_gcmMsg_204_ForgotPassword)*/


    },
    watch: {}
  }

</script>
