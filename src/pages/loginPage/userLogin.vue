<template>
  <div id="gzk_userLogin">
   <!-- <canvasBg parentsClass='gzk_userLogin'
              :config='{
                distance : 70,
                radius : 50
              }'
    ></canvasBg>-->
    <div class="gzk_bg"></div>
    <div class="g_loginFrom" id="login_box">
      <div class="gzk_loginTitle" style="margin-bottom: 20px;color: #000">
          <label tx="strlng_home_title"> 果真快 全球冷运</label></div>
      <div  style="margin: auto auto;">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user" >
            <Input type="text" v-model="formInline.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <p style="text-decoration:underline;cursor: pointer" @click="modal1 = true">
              <label tx="strlng_forgot_title">忘记密码</label>
          </p>
          <Modal
                  v-model="modal1"
                  >
              <p>  <label tx="strlng_forgot_title">忘记密码</label></p>
            <input type="text" placeholder="请输入您的登录账号"  class="ivu-input" id="strAccountNumber">
              <p style="margin-top: 10px"> <label tx="strlng_forgot_mark_info">请输入您的果真快账号，点击[取回密码] 按钮，工作人员将收到信息后尽快协助您认证并取回密码</label></p>
              <Button style="margin-left: 40%" type="primary" @click="WJMMBtn204()"><label tx="strlng_forgot_get_button">取回密码</label></Button>
          </Modal>
          <FormItem style="width: 100%;margin-top: 20px;">
            <Button type="primary" @click="handleSubmit('formInline')">
                <label tx="strlng_login_sing_button">登录</label></Button>

          </FormItem>

        </Form>
         <!--<div><glng tx="strlng_account"></glng>112<glng tx="strlng_all"></glng></div>
          <div><glng tx="strlng_forgot_title"></glng></div>
          <div><a href="javascript:;" @click="onChangeLng(this)" lang="1">更新全页面语言文字</a></div>
          <div><a href="javascript:;" @click="onAlertTx()">程序获取指定语言文字 strlng_cancel</a></div>
          <div><a href="javascript:;" @click="onAlertLngDesc()">当前页面文字</a></div>
-->
      </div>
        <div style="border-radius: 5px;border: 1px solid #cccccc">
            <span id="divImgBtnChinese" @click="onChangeLng(0)"  style="background-color: #ff6600" class="span_btn bor_l">简体中文</span>
            <span id="divImgBtnTw" @click="onChangeLng(1)"  class="span_btn">Thailand</span>
            <span id="divImgBtnYN" @click="onChangeLng(2)"  class="span_btn">Vietnamese</span>
            <span id="divImgBtnEn" @click="onChangeLng(3)"  class="span_btn bor_r">English</span>

        </div>
    </div>
  </div>
</template>
<style>
    .span_btn{
        display: inline-block;line-height: 30px;text-align: center;width: 80px;padding: 5px 0px;color: #000;
        cursor: pointer;
    }
    .bor_l{
        border-radius: 5px 0px 0px 5px;
        float: left;
    }
    .bor_r{
        border-radius: 0px 5px 5px 0px;
        float: right;
    }


</style>
<script src="./../../common/lng.js"></script>
<script>

    /*
    *    <label tx="strlng_login_sing_button">登录</label>
    *    多国语言 每个标签必须label包裹着
    *    tx="strlng_login_sing_button"  为该字段的多国语言变量
    *
    *
    * */

    import Local from 'local'
    import {mapActions} from "vuex"
    import selfGZKMsgCtrl from 'getDataApi/index';
    import GetMsg from 'getDataApi/doMsg';
    import  'jQuery';
    /*多语言*/
    import {gcmlng} from '../../common/lng'
    let selfLng = new gcmlng(1);

    function onAlertLngDesc() {
        alert(selfLng.doGetLngDesc());
    }
    function onPageLoad() {
        selfLng.doUpdateLngDesc();
    }


  export default{
    data () {
      return {
        formInline: {
          user: '',
          password: '',
        },
          modal1: false,
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
      /*      { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }*/
            { type: 'string', min: 1, message: '1111', trigger: 'blur' }
          ]
        }
      }
    },
    components: {

    /*  canvasBg*/
    },
    methods: {
      ...mapActions({
          setUser:"setUser",
          setLoginStatus:"setLoginStatus"
      }),
        onAlertTx() {
            alert(selfLng.doGetLngTx("strlng_cancel"));
        },

        /*语言选择*/
        onChangeLng(item) {
            switch (item){
                case 0:
                    /*中文*/
                    selfLng.doSetLngID(1);
                    document.getElementById("divImgBtnChinese").style.backgroundColor ="#ff6600";
                    document.getElementById("divImgBtnEn").style.backgroundColor="#fff";
                    document.getElementById("divImgBtnTw").style.backgroundColor="#fff";
                    document.getElementById("divImgBtnYN").style.backgroundColor="#fff";
                    window.intLng=0;
                    window.intSetLngID= window.intLng;
                break;
                case 1:
                    /*泰文*/
                    selfLng.doSetLngID(2);
                    document.getElementById("divImgBtnChinese").style.backgroundColor ="#fff";
                    document.getElementById("divImgBtnEn").style.backgroundColor="#fff";
                    document.getElementById("divImgBtnTw").style.backgroundColor="#ff6600";
                    document.getElementById("divImgBtnYN").style.backgroundColor="#fff";
                    window.intLng=1;
                    window.intSetLngID= window.intLng;
                    break;
                case 2:
                    /*越南*/
                    selfLng.doSetLngID(3);
                    document.getElementById("divImgBtnChinese").style.backgroundColor ="#fff";
                    document.getElementById("divImgBtnEn").style.backgroundColor="#fff";
                    document.getElementById("divImgBtnTw").style.backgroundColor="#fff";
                    document.getElementById("divImgBtnYN").style.backgroundColor="#ff6600";
                    window.intLng=2;
                    window.intSetLngID= window.intLng;
                    break;
                case 3:
                    /*英文*/
                    document.getElementById("divImgBtnChinese").style.backgroundColor ="#fff";
                    document.getElementById("divImgBtnEn").style.backgroundColor="#ff6600";
                    document.getElementById("divImgBtnTw").style.backgroundColor="#fff";
                    document.getElementById("divImgBtnYN").style.backgroundColor="#fff";
                    selfLng.doSetLngID(0);
                    window.intLng=3;
                    window.intSetLngID= window.intLng;
                    break;
            }
            selfLng.doUpdateLngDesc();
        },

        /*忘记密码 取回密码*/
        WJMMBtn204(){
            /*返回*/
            selfGZKMsgCtrl.doBindMsg(204, (jsonMsg)=>{
                if (jsonMsg.intSendStatus==0){
                    this.$Message.success('发送成功!');
                }else if(jsonMsg.intSendStatus==1){
                    this.$Message.success('发送失败!');
                 }else {
                    this.$Message.success('失败账号不存在!');
                   }
                })
            let strAccountNumber_Set=document.getElementById("strAccountNumber").value;
            console.log(strAccountNumber_Set)
            if(strAccountNumber_Set==''){
                this.$Message.success('账号不能为空');
            }else {

                /*发送消息*/
                selfGZKMsgCtrl.doSendAppMsg(GetMsg.doCreate_gcmMsg_204_ForgotPassword(window.intSetLngID,strAccountNumber_Set))

            }


        },

        /*登录*/
      handleSubmit(name) {
          this.$refs[name].validate((valid) => {
              if (valid) {
                  selfGZKMsgCtrl.doBindMsg(200, (jsonMsg)=>{
                      console.log("jsonMsg",jsonMsg)
                      if(jsonMsg.intLoginStatus==1){
                          Local.setItem('strUserId',jsonMsg.strUserSysID)
                              this.$router.push({name:'home'});
                              this.setUser(jsonMsg)
                              switch (window.intLng){
                                  case 0:
                                  this.$Message.success('登录成功!');
                                      break;
                                  case 1:
                                      this.$Message.success('ี่ประสบความสำเร็จ!');
                                      break;
                                  case 2:
                                      this.$Message.success('Thành công!');
                                      console.log("首次登录")

                                     /* this.$router.push({name:'userOnePassword'})
                                      this.setUser({strUserSysID:jsonMsg.strUserSysID});
                                      this.setUser({nickName:jsonMsg.strUserAlias});
                                      this.setUser({strUserName:jsonMsg.strUserName});
                                      this.setUser({intFirstLogin:jsonMsg.intFirstLogin});
                                      this.setUser({intLoginStatus:jsonMsg.intLoginStatus});
                                      this.setLoginStatus({isLogin:true})*/
                                      break;
                                  case 3:
                                      this.$Message.success('Successful!');
                                      break;

                              }
                      }else {
                          /*登录成功或失败 多语言*/
                          switch (window.intLng){
                              case 0:
                                  this.$Message.success('登录失败!');
                                  break;
                              case 1:
                                  this.$Message.success('ล้มเหลว!');
                                  break;
                              case 2:
                                  this.$Message.success('Không thành công"!');
                                  break;
                              case 3:
                                  this.$Message.success('Failed!');
                                  break;

                          }

                      }
                  });
                  /*登录接口请求 */
                      let strUserName_Set=this.formInline.user;
                      let strUserPasswd_Set=this.formInline.password;
                      let strAccessIP_Set='';
                      let intClientVersion_Set=1;
                      let intClientOSType_Set=3;
                  selfGZKMsgCtrl.doSendAppMsg(GetMsg.doCreate_gcmMsg_200_UserLogin(window.intSetLngID,strUserName_Set, strUserPasswd_Set, strAccessIP_Set, intClientVersion_Set, intClientOSType_Set))

              } else {
                  switch (window.intLng){
                      case 0:
                          this.$Message.success('登录失败!');
                          break;
                      case 1:
                          this.$Message.success('ล้มเหลว!');
                          break;
                      case 2:
                          this.$Message.success('Không thành công"!');
                          break;
                      case 3:
                          this.$Message.success('Failed!');
                          break;

                  }
              }
          })

      },

    },
    mounted () {


       /* console.log(StrLang())*/


    },
      created(){

    },
    watch: {}
  }

</script>
