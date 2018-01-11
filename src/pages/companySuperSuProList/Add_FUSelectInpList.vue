<template>
  <div id="Add_FUSelectInpList"  class="min-w">
    <div class="pagesNav">
      <Breadcrumb>
        <BreadcrumbItem href="/companySuperSuProList">管理者权限</BreadcrumbItem>
        <BreadcrumbItem href="/companySuperSuProList">公司列表</BreadcrumbItem>
        <BreadcrumbItem href="/companySuperSuProListDetails">公司详情</BreadcrumbItem>
        <BreadcrumbItem href="/Add_FUSelectInpList">添加人员</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="Add_FUSelectInpListCon">
       <div class="inp_search clearFloat">
          <Input placeholder="输入关键字可查找信息"></Input>
          <Button type="primary" @click="Add_company()">搜索</Button>
        </div>
      <div class="Add_FUSelectInpListConInfo gzkPageScrollBar">
        <ul>
          <li v-for="companyItem in Add_FUSelectInpListConInfos" @click="Add_FUSelectInpListConInfos(companyItem)">
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
        Add_FUSelectInpListConInfos: [
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
      Add_FUSelectInpListConInfos(companyItem){
        Local.setItem('Add_FUSelectInpListConInfos',companyItem)

        this.$router.push({name:'Add_personnelList'})
      },

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
