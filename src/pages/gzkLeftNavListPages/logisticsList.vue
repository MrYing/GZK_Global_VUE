<template>
  <div id="logisticsList" class="min-w">
    <div class="pagesNav">
      <Breadcrumb>
        <BreadcrumbItem href="/logisticsList"><label tx="strlng_home_my_container">我的集装箱</label></BreadcrumbItem>
        <BreadcrumbItem href="/logisticsList"><label tx="strlng_my_container_list_title">我的货柜</label></BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div style="margin: 0 auto;text-align: center" class="logisticsListCon">
      <div>
        <div class="inp_search clearFloat" style="position: relative" :model="formINPDate">
          <input :model="formINPDate.Input" id="inputListSearchKeyValue" type="text" class="ivu-input" style="width: 60%;float: left;">
          <select :model="formINPDate.Select" id="selectInp" style="position: absolute;left: 0px;height: 80%;width:20%;border-radius: 5px">
            <option value="0" class="ivu-select-item"><label tx="strlng_all">全部</label></option>
            <option value="1" class="ivu-select-item"><label tx="strlng_my_care">关注的</label></option>
            <option value="2" class="ivu-select-item"><label tx="strlng_in_swap">交换中</label></option>
          </select>
          <span  class="span_btn"><label tx="strlng_query_button">查找</label></span>
          <!--@click="onClickNewLogistics()" -->
        </div>
      </div>
      <div class="logisticsListConList"style="display: block;height: 500px" id="gzk_div_dataList">
        <!--<div class="ItemInfo"  @click="onclickItemInfo(ItemInfo)">
          <div class="g-fl" style="width: 85%">
            <p class="ItemInfo_title">
              <span class="fon_z">dddddddddddddd</span>
              <span></span>
            </p>
            <p class="bor_1"></p>
            <p class="ItemInfo_title" style="text-align: left">
              <glng tx="strlng_last_update">最后更新：</glng> dddddddddd
            </p>
          </div>
          <div>
            <span class="des_map" style="margin-top: 20px;margin-left: 5px"></span>
            <span class="des_map" style="margin-top: 20px;margin-left: 5px"></span>
          </div>
          <span class="g-fr icon_jt"></span>
        </div>-->
      </div>
      <div style="display: none" id="pages2">
        noen
      </div>
    </div>
  </div>
</template>
    <script src="./../../common/lng.js"></script>
<script>
    $(function () {
        doSendCMD_208(0)

    })
    let intPageIndex

    function    doInitSubPageUI() {
        $("#gzk_div_dataList").scroll(function(){
            if($("#gzk_div_dataList").scrollTop()>0) {
                if ($("#gzk_div_dataList").scrollTop() > ($("#gzk_div_dataList .divListPanelLVOFF").height() - 200)) {
                    if ($("#gzk_div_dataList .divListLoadingStatus .btnLoadMoreData").is(":visible")) {
                        doSendCMD_208(1);
                    }
                }
            }
        });

    }
    doInitSubPageUI();
    function doClearInfoRoundDataList78() {
        $("#gzk_div_dataList").html("<div class='divListPanelLVON'></div><div class='divListPanelLVOFF'></div><div class='divListLoadingStatus' intLoadMoreType='0'>" +
            "<a href='#' class='btnLoadMoreData' onclick='doSendCMD_208(1)'><label tx='strlng_list_pull_down'>下拉刷新数据</label></a>" +
            "<span class='spanLoading'><img class='imgLoader'  src='/../.././assets/ajax-loader-bgc0.gif'><label tx='strlng_loading_wait'>数据加载中，请稍候 …</label></span>" +
            "<span class='spanNotMoreData'><label tx='strlng_list_no_data'>没有更多数据</label></span></div>");
        doSetInfoRoundDataListLoadingStatus(2);
    }

    function doSetInfoRoundDataListLoadingStatus(intSetLoadMoreType) {
        $("#gzk_div_dataList .divListLoadingStatus").attr("intLoadMoreType", intSetLoadMoreType);
        switch (intSetLoadMoreType) {
            case 1: //显示 查看更多
                $("#gzk_div_dataList .divListLoadingStatus .btnLoadMoreData").show();
                $("#gzk_div_dataList .divListLoadingStatus .spanLoading").hide();
                $("#gzk_div_dataList .divListLoadingStatus .spanNotMoreData").hide();
                break;
            case 2: //显示 加载中
                $("#gzk_div_dataList .divListLoadingStatus .btnLoadMoreData").hide();
                $("#gzk_div_dataList .divListLoadingStatus .spanLoading").show();
                $("#gzk_div_dataList .divListLoadingStatus .spanNotMoreData").hide();
                break;
            case 3: //显示 没有更多数据
                $("#gzk_div_dataList .divListLoadingStatus .btnLoadMoreData").hide();
                $("#gzk_div_dataList .divListLoadingStatus .spanLoading").hide();
                $("#gzk_div_dataList .divListLoadingStatus .spanNotMoreData").show();
                break;
        }
    }
    function   doSendCMD_208(intRefreshType) {
        switch (intRefreshType) {
            case 0://刷新全部数据
                intPageIndex = 0;
                doClearInfoRoundDataList78();
                $("#inputListSearchKeyValue").val("");
                $("#gzk_div_dataList").attr("intPageIndex", intPageIndex);
                break;
            case 1://下一页数据
                intPageIndex = $("#gzk_div_dataList").attr("intPageIndex");
                intPageIndex++;
                $("#gzk_div_dataList").attr("intPageIndex", intPageIndex);
                doSetInfoRoundDataListLoadingStatus(2);
                break;
            case 2://关键字查找数据
                intPageIndex = 0;
                $("#gzk_div_dataList").attr("intPageIndex", intPageIndex);
                doClearInfoRoundDataList78();
                break;
        }
        selfGZKMsgCtrl.doBindMsg(208, (jsonMsg)=>{
            var strTempHtml = '';
            if (jsonMsg.arrayContainerShortList.length == 0) {
                doSetInfoRoundDataListLoadingStatus(3);
            }  else {
                $.each(jsonMsg.arrayContainerShortList,function (index,ele) {
                    doSetInfoRoundDataListLoadingStatus(1);
                    console.log(ele.strContainerMarkID)
                    console.log("jsonMsg.arrayContainerShortList",jsonMsg.arrayContainerShortList)
                    strTempHtml='<div class="ItemInfo"  onclick="onclickItemInfo(ItemInfo)"> ' +
                        '<div class="g-fl" style="width: 85%"> <p class="ItemInfo_title"> ' +
                        '<span class="fon_z">'+ele.strContainerMarkID+'</span> <span></span> </p> <p class="bor_1"></p>' +
                        ' <p class="ItemInfo_title" style="text-align: left">' +
                        ' <label tx="strlng_last_update">最后更新：</label> '+ele.strDateCreate+' </p> </div>' +
                        ' <div> <span class="des_map" style="margin-top: 20px;margin-left: 5px"></span> ' +
                        '<span class="des_map" style="margin-top: 20px;margin-left: 5px"></span> </div> ' +
                        '<span class="g-fr icon_jt"></span> </div>'
                    $("#gzk_div_dataList .divListPanelLVON").append(strTempHtml)
                })
            }

          /* if(jsonMsg.arrayContainerShortList==0){
           doSetInfoRoundDataListLoadingStatus(3);
           }else {
           doSetInfoRoundDataListLoadingStatus(1);
           this.logisticsListConList=jsonMsg.arrayContainerShortList;

           }
           console.log('长度',jsonMsg.arrayContainerShortList.length)*/
        });
      /*
       let strUserSysID_Set=this.getUser.strUserSysID;
       */
        let strUserSysID_Set=Local.getItem('strUserId')
        let intQueryType_Set=$("#selectInp").val();
        let strSearchContent_Set=$("#inputListSearchKeyValue").val();

        selfGZKMsgCtrl.doSendAppMsg(GetMsg.doCreate_gcmMsg_208_GetContainerList(intSetLngID, strUserSysID_Set, intQueryType_Set, strSearchContent_Set, intPageIndex))

    }

</script>
<script>
    import  'jQuery';
    import Local from 'local'
    import {mapGetters,mapActions} from 'vuex'
    import selfGZKMsgCtrl from 'getDataApi/index';
    import GetMsg from 'getDataApi/doMsg';
    import {gcmlng} from '../../common/lng'

    let selfLng = new gcmlng(1);






    export default{
    data () {
      return {
          formINPDate:{
              Input:'',
              Select:''

          },
        logisticsListConList: [
          { strContainerMarkID: '',
              strAreaDesc: '',
              strDateCreate: '',
              text4: '',
              text5: ''
          },

              ],
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
        onChangeLngPages(item){
            console.log("ss")
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

      onclickItemInfo(ItemInfo){
      Local.setItem('logisticsListConList',ItemInfo)
        this.$router.push({name:'logisticsListItemInfo'})
        /*页面参数获取*/

      },
      onClickNewLogistics(){
        this.$router.push({name:'newLogistics'})
      },





    },

    mounted () {

            this.onChangeLngPages(window.intLng);

/*
            this.doSendCMD_78(0)
            this.doInitSubPageUI()
            this.doClearInfoRoundDataList78()*/



    },
    watch: {}
  }





</script>
