<template>
  <div id="mySuperSuProList" class="jurisdiction_public">
    <div>
      <MainNavTop></MainNavTop>
    </div>
    <div class="mySuperSuProListCon jurisdiction_publicCon">
      <div class="mySuperSuProDataList gzkPageScrollBar jurisdiction_publicDataList">
        <ul>
          <li class="clearFloat"  v-for="companyItem in mySuperSuProDataListS" @click='mySuperSuProDataListS(companyItem)'>
            <span class="icon-gs"></span>
            <span class="span-gsName">{{companyItem.text}}</span>
            <span class="icon-Delete">删除</span>
            <span class="span-time">{{companyItem.text2}}</span>
          </li>
        </ul>
      </div>
      <p  @click="modal8 = true" class="add_personnel jurisdiction_add_personnel">添加人员</p>
      <Modal
              title="选择输入方式"
              v-model="modal8"
              @on-cancel="cancel"
              :mask-closable="false">
        <p  @click="Add_Input_personnelA()" class="p_FUSelect">手动输入</p>
        <p  class="p_FUSelect">列表选择</p>
      </Modal>
      <div class="companySuperPage" style="width:80%">
        <div style="margin-left: 30%;margin-top: 50px;">
          <template>
            <Page :total="100" show-elevator></Page>
          </template>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
  /*在哪个地方使用组件 在哪引用*/
  import MainNavTop from './../../components/menuNavTop.vue';


  export default {
    data() {
      return{ mySuperSuProDataListS: [
        { text: '小张1',text2: '1382555555555',},
        { text: '小李',text2: '1888888888888',},
        { text: '小王',text2: '1999999999999',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},
        { text: '小张',text2: '1382555555555',},

      ],
          modal8: false,



          /*  main_box: true,
           clearfix: false*/


      }
    },
      methods:{
          Add_Input_personnelA(){
              this.$router.push({name:'Add_Input_personnel_A'})

          },
          cancel () {

          },
      },
    /*components 注册 */
    components: {
      MainNavTop
    },
    computed: {

    },
  }
</script>
