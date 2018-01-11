<script src="../../../../gzk_script_msg_ctrl.js"></script>
<template>
  <div id="logisticsPushImg">
    <div class="pagesNav">
      <Breadcrumb>
        <BreadcrumbItem href="/logisticsList">物流单列表</BreadcrumbItem>
        <BreadcrumbItem href="/logisticsListItemInfo">物流单详情</BreadcrumbItem>
        <BreadcrumbItem>补充图片</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="uploadCon">
      <div class="uploadImgCon">
        <div class="uploadImg">
          <img src="" alt=""  id="img_DriverLicenseRS" class="flieImg">
          <input class="inp-file-img" type="file" @change="Gzk_uploading()">
        </div>
        <textarea class="inp_remark" placeholder="请输入200字内的备注信息" maxlength="200"></textarea>
        <span  v-model="uploadBtn" class="uploadBtn">上传图片</span>
      </div>
      <div class="uploadImgConList">
        <div class="uploadImgConList">
          <div class="uploadImg">
            <img src="" alt=""  id="img_DriverLicenseRS" class="flieImg">
            <input class="inp-file-img" type="file" @change="Gzk_uploading()">
          </div>
          <textarea class="inp_remark" placeholder="请输入200字内的备注信息" maxlength="200"></textarea>
          <span  v-model="uploadBtn" class="uploadBtn">上传图片</span>
        </div>

      </div>
    </div>
    <div class="div_bottomBtn">
      <p class="BottomLoadBtn">提交保存相片</p>
    </div>
    </div>
</template>
<script>
  import selfGZKMsgCtrl from 'getDataApi/index';
  import GetMsg from 'getDataApi/doMsg';
  export default{
    data () {
      return {
        uploadBtn:''
      }
    },
    components: {},
    methods: {
  Gzk_uploading(e) {
      let  ImgUrlBase='';
      let  img_OtherRS='';

    var e = e || window.event;
    let  file =  e.target.files[0];
    if(!/image\/\w+/.test(file.type)){
      alert("请确保文件为图像类型");
      return false;
    }

      let reader = new FileReader();
      let inp_imgUrl=$(e.target);
    reader.readAsDataURL(file);
    reader.onload = function(e){
      ImgUrlBase=this.result;
      inp_imgUrl.prev('#img_DriverLicenseRS').attr('src',ImgUrlBase);
      img_OtherRS= ImgUrlBase.substring(ImgUrlBase.indexOf('base64,')+7);
      $("#img_DriverLicenseRS").attr("title","点击再次选择图片");
      if($("#img_DriverLicenseRS").attr("src").substr(0, 4)=="data"){
         selfGZKMsgCtrl.doBindMsg(200, (jsonMsg)=>{
          if(jsonMsg.intULStatus==0){
             img_OtherRS=jsonMsg.strSourceID;
             $(".uploadBtn").attr("strotherrs",img_OtherRS)
           }else {
            alert("失败")
           }
         });
         selfGZKMsgCtrl.doSendULMsg(GetMsg.doGetMsg_200(101, 1, "",img_OtherRS))

      }

    };

  }

    },
    mounted () {

    },
    watch: {}
  }

</script>
