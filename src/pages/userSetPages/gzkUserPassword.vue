<template>
  <div id="gzkUserPassword">
   <div style="margin: 10px auto;width: 500px;">
     <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="90">
     <FormItem label="旧密码" prop="strOldUserPasswd">
       <Input v-model="formValidate.strOldUserPasswd" placeholder="点击输入"></Input>
     </FormItem>
     <FormItem label="新密码" prop="UserPasswd">
       <Input v-model="formValidate.UserPasswd" placeholder="点击输入"></Input>
     </FormItem>
       <FormItem>
         <Button type="primary" @click="SetUserPassword('formValidate')">提交保存</Button>
         <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置信息</Button>
       </FormItem>
     </Form>

   </div>
  </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    import selfGZKMsgCtrl from 'getDataApi/index';
    import GetMsg from 'getDataApi/doMsg';

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

      handleReset (name) {
        this.$refs[name].resetFields();
      },
        SetUserPassword (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    selfGZKMsgCtrl.doBindMsg(202, (jsonMsg)=>{
                        if (jsonMsg.intUpdateStatus==1){
                            this.$Message.info('修改失败');
                        }else {
                            this.$Message.info('修改成功');
                        }

                    });
                    let strUserSysID_Set=this.getUser.strUserSysID;
                    console.log(strUserSysID_Set)
                    let strOldUserPasswdINp=this.formValidate.strOldUserPasswd;
                    let strNewUserPasswd_Set=this.formValidate.UserPasswd;
                    selfGZKMsgCtrl.doSendAppMsg(GetMsg.doCreate_gcmMsg_202_ChangePassword(window.intSetLngID, strUserSysID_Set, strOldUserPasswdINp, strNewUserPasswd_Set));
                } else {
                    this.$Message.error('提交失败!');

                }
            })


        },
  confirm () {
        this.$Modal.confirm({
          title: 'Title',
          content: '<p>Content of dialog</p><p>Content of dialog</p>',

          onOk: () => {
            this.$Message.info('Clicked ok');
          },
          onCancel: () => {
            this.$Message.info('Clicked cancel');
          },

        });
      },
    },
    components: {},
    mounted () {

    },
    watch: {}
  }

</script>
