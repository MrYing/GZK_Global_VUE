    <template>
  <div id="gzk_userOnePassword">
    <div class="gzk_userOnePasswordTitle">
      <span><label tx="strlng_home_title">果真快. 全球冷柜物流</label></span>
      <span class="outBtn" @click="outBtnPages()"><label tx="strlng_user_center_signout">退出登录</label></span>
    </div>
    <p class="g-XGMM" @click="onChangeLngPages(2)">
      <label tx="strlng_change_pwd_title">忘记密码</label>
    </p>
    <div class="gzk_xgPasswordFrom"  style="margin: 100px auto;width: 500px;">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="90">
        <FormItem   prop="strOldUserPasswd">
          <div style="position: relative">
            <span style="display: inline-block;position: absolute;left: -130px"><label tx="strlng_change_pwd_old">旧密码</label></span>
            <Input v-model="formValidate.strOldUserPasswd" placeholder="点击输入"></Input>
          </div>

        </FormItem>
        <FormItem  prop="UserPasswd">
          <div style="position: relative">
            <span style="display: inline-block;position: absolute;left: -140px"><label tx="strlng_change_pwd_confirm">新密码</label></span>
          <Input v-model="formValidate.UserPasswd" placeholder="点击输入"></Input>
          </div>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="userOnePassword('formValidate')"><label tx="strlng_save_change">保存修改</label></Button>
          <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置信息</Button>
        </FormItem>
      </Form>

    </div>
  </div>
</template>
  <!-- <script src="./../../common/lng.js"></script>-->
    <script>
      /*数据储存*/
    import Local from 'local'
      /*vuex*/
    import {mapGetters,mapActions} from 'vuex'
      /*接口api*/
    import selfGZKMsgCtrl from 'getDataApi/index';
    import GetMsg from 'getDataApi/doMsg';
    import  'jQuery';
    /*国际版语言*/
    import {gcmlng} from '../../common/lng'
    let selfLng = new gcmlng(1);

    export default{
    data () {
      return {
        formValidate: {
            strOldUserPasswd: '',
            UserPasswd: '',
        },
        ruleValidate: {
            strOldUserPasswd: [
            { required: true, message: '请填写旧密码', trigger: 'blur' }
          ],
            UserPasswd: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
          ],

        }
      }
    },
      computed: {
          ...mapGetters({
                  getUser: 'getUser'
              }
          )
      },
    methods: {
        ...mapActions({
            setLoginStatus:"setLoginStatus"
        })
        ,

        /*退出登录*/
      outBtnPages(){
        this.$router.push({name:'userLogin'});
          this.setLoginStatus({isLogin:false})
      }
        /*onChangeLngPages(item) {
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

                    break;
            }
            selfLng.doUpdateLngDesc();
        }*/
        ,


        /*保存修改*/
        userOnePassword (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        selfGZKMsgCtrl.doBindMsg(202, (jsonMsg)=>{
                            if (jsonMsg.intUpdateStatus==1){
                            switch (window.intLng){
                                case 0:
                                    this.$Message.info('修改失败，旧密码错误!');
                                    break;
                                case 1:
                                    this.$Message.info('บันทึกล้มเหลวรหัสผ่านเก่าผิด!');
                                    break;
                                case 2:
                                    this.$Message.info('Sửa đổi thất bại, mật khẩu cũ là sai!');
                                    break;
                                case 3:
                                    this.$Message.info('Save failed, the old password is wrong!');
                                    break;
                            }
                            }else {
                                switch (window.intLng){
                                    case 0:
                                        this.$Message.info('修改成功，请重新登录!');
                                        this.$router.push({name:'index'});
                                        break;
                                    case 1:
                                        this.$Message.info('บันทึกสำเร็จโปรดลงชื่อเข้าใช้อีกครั้ง!');
                                        this.$router.push({name:'index'});
                                        break;
                                    case 2:
                                        this.$Message.info('Save successful, please sign in again!');
                                        this.$router.push({name:'index'});
                                        break;
                                    case 3:
                                        this.$Message.info('Nếu sửa đổi thành công, hãy đăng nhập lại!');
                                        this.$router.push({name:'index'});
                                        break;
                                }

                            }

                        });
                        let strUserSysID_Set=this.getUser.strUserSysID;
                        let strOldUserPasswdINp=this.formValidate.strOldUserPasswd;
                        let strNewUserPasswd_Set=this.formValidate.UserPasswd;
                        selfGZKMsgCtrl.doSendAppMsg(GetMsg.doCreate_gcmMsg_202_ChangePassword(window.intSetLngID, strUserSysID_Set, strOldUserPasswdINp, strNewUserPasswd_Set));
                    } else {
                        this.$Message.error('提交失败!');

                    }
                })


      },

        /*多语言 每个页面都有引入*/
        onChangeLngPages(item) {
            switch (item){
                case 0:
                    selfLng.doSetLngID(1);
                    break;
                case 1:
                    selfLng.doSetLngID(2);
                    break;
                case 2:
                    selfLng.doSetLngID(3);
                    break;
                case 3:
                    selfLng.doSetLngID(0);
                    break;
            }
            selfLng.doUpdateLngDesc();
        },
        /*清空重置*/
      handleReset (name) {
        this.$refs[name].resetFields();
      },
    },
    components: {},
    mounted () {

        /*多语言 每个页面都有引入*/
        this.onChangeLngPages(window.intLng);
       /* window.intSetLngID=2*/
    },
    watch: {}
  }

</script>
