<template>
  <div id="Add_personnelList"  class="min-w">
    <div class="pagesNav">
      <Breadcrumb>
        <BreadcrumbItem href="/companySuperSuProList">管理者权限</BreadcrumbItem>
        <BreadcrumbItem href="/companySuperSuProList">公司列表</BreadcrumbItem>
        <BreadcrumbItem href="/companySuperSuProListDetails">公司详情</BreadcrumbItem>
        <BreadcrumbItem href="/Add_FUSelectInpList">添加人员</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="Add_personnelListCon">

      <div class="Add_personnelListINfo gzkPageScrollBar">
        <ul>
          <li v-for="companyItem in Add_personnelListINfos" @click="Add_personnelListINfos(companyItem)">
            <span class="icon_TXImg">图片</span>
            <span class="span_desc">
              <span>{{companyItem.name}}</span>
              <span>{{companyItem.number}}</span>
            </span>
            <span class="icon_JTImg">图片</span>
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
        Add_personnelListINfos: [
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


      cancel () {

      },
    },

    created(){


      /*this.$Message.info('点击了取消');*/
    },
    mounted () {

    },

    watch: {}
  }

</script>
