<template>
  <div id="gzkUserSet">
    <div  style="margin:10px auto;width: 500px;">
      <Input v-model="formData.nickName"  placeholder="请输入昵称..." style="width: 300px;margin-top: 20px;"></Input>
     <!-- <Button @click='savePhoto_clickHandler()'>保存</Button>-->
      <Button style="display: block;width: 300px;margin-top: 20px;"  @click="submitUserInfo_clickHandler('formData')" type="primary"><label tx="strlng_save">保存</label></Button>
    </div>

    <div v-for='item in dataList'>
      <img :src="item.src" alt="" style='width: 100px;height: 100px;border: 1px solid red'>
      <span>{{item.desc}}</span>
    </div>



  </div>
</template>
<script>

    import {mapGetters,mapActions} from 'vuex'
    import selfGZKMsgCtrl from 'getDataApi/index';
    import GetMsg from 'getDataApi/doMsg';
    import {gcmlng} from '../../common/lng'

    let selfLng = new gcmlng(1);

  export default {
    data () {
      return {
        formData: {
          nickName: '',
          desc: '',
          container: ''
        },
        imgName: '',
        desc: '',
        uploadList: [],
        dataList: []
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
            setUser : 'setUser'
        }),
      submitUserInfo_clickHandler(){


           let strUserSysID_Set=this.getUser.strUserSysID;
           let strUserAlias_Set=this.formData.nickName;


           selfGZKMsgCtrl.doSendAppMsg(GetMsg.doCreate_gcmMsg_206_ChangeUserAlias(window.intSetLngID, strUserSysID_Set, strUserAlias_Set))

/*
          let user = Object.assign({},this.formData);
        this.setUser(user)*/
      },

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
    },
    mounted () {
        this.onChangeLngPages(window.intLng)

    }
  }
</script>
<style>
  .demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .demo-upload-list img{
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover{
    display: block;
  }
  .demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>
