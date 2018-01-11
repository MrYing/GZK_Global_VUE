<template>
  <div id="companySuperSuProListDetails"  class="min-w">
    <div class="pagesNav">
      <Breadcrumb>
        <BreadcrumbItem href="/companySuperSuProList">管理者权限</BreadcrumbItem>
        <BreadcrumbItem href="/companySuperSuProList">公司列表</BreadcrumbItem>
        <BreadcrumbItem href="/companySuperSuProListDetails">公司详情</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="companySuperSuProDetailsCon">
      <div class="companySuperSuProTitle" style="background-color: #faf7f2">
        <p>{{formItem.text}}</p>
        <p>{{formItem.text2}}</p>
      </div>
      <div class="companySuperSuProButton">
        <Button type="primary">修改资料</Button>
        <Button type="primary">作废公司</Button>
        <Button @click="modal8 = true">添加人员</Button>
        <Modal
          title="选择输入方式"
          v-model="modal8"
          @on-cancel="cancel"
          :mask-closable="false">
          <p  @click="Add_Inp_personnel()" class="p_FUSelect">手动输入</p>
          <p  @click="Add_FUSelectInpList()" class="p_FUSelect">列表选择</p>
        </Modal>
        <Button type="primary">锁定公司</Button>
      </div>
      <div class="companySuperSuProListINfo gzkPageScrollBar">
        <ul>
          <li v-for="companyItem in companySuperSuProListINfos" @click="companySuperSuProListINfo(companyItem)">
            <span class="icon_TXImg"></span>
            <span class="span_desc">
              <span>{{companyItem.name}}</span>
              <span>{{companyItem.number}}</span>
            </span>
            <span class="icon_JTImg"></span>
          </li>
        </ul>
      </div>
      <div class="companySuperPage">
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
  import Vue from 'vue'
  import Local from 'local'
  export default{
    data () {
      return {
        companySuperSuProListINfos: [
          { name: '小张',number: '185555555555',},
          { name: '小张',number: '185555555555',},
          { name: '小张',number: '185555555555',},
          { name: '小张',number: '185555555555',},
          { name: '小张',number: '185555555555',},


        ],
        formItem: {
          text: '',
          text2: '',
        },
        modal8: false,
      }
    },
    components: {},
    methods: {
      companySuperSuProListINfo(companyItem){
        Local.setItem('companySuperSuProListINfo',companyItem)
        this.$router.push({name:'companyStaffPermission'})
      },
      Add_Inp_personnel(){
        this.$router.push({name:'Add_Inp_personnel'})
      },
      Add_FUSelectInpList(){
        this.$router.push({name:'Add_FUSelectInpList'})
      },
      cancel () {

      },
    },

    created(){

      Object.assign(this.formItem,Local.getJSON('companySuperSuProListDetails'))
      /*this.$Message.info('点击了取消');*/
    },
    mounted () {

    },

    watch: {}
  }

</script>
