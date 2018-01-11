<template>
  <div id="companySuperSuProList" class="min-w">
    <div class="pagesNav">
      <Breadcrumb>
        <BreadcrumbItem href="/companySuperSuProList">管理者权限</BreadcrumbItem>
        <BreadcrumbItem href="/companySuperSuProList">公司列表</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="companySuperSuProCon">
      <div class="inp_search clearFloat">
        <Input placeholder="输入关键字可查找信息"></Input>
        <Button type="primary" @click="Add_company()">添加子公司</Button>
      </div>
      <div class="companySuperSuProDataList gzkPageScrollBar">
        <ul>
          <li class="clearFloat"  v-for="companyItem in companySuperSuProDataList" @click='companySuperSuProDataListDetails(companyItem)'>
            <span class="icon-gs"></span>
            <span class="span-gsName">{{companyItem.text}}</span>
            <span class="icon-jt"><i class="icon-jtBj"></i></span>
            <span class="span-time">{{companyItem.text2}}</span>
          </li>
        </ul>

      </div>
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
  import Vue from 'vue'
  import Local from 'local'
  export default{
    data () {
      return {
        companySuperSuProDataList: [
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（3人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（4人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（2人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（6人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（7人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（8人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（3人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（3人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
          { text: '湖南大众物流公司（5人）',text2: '创建时间：2012年11月12日',},
        ]
      }
    },
    components: {},
    methods: {
      Add_company(){
        this.$router.push({name:'Add_company'})
      },
      companySuperSuProDataListDetails(companyItem){
        Local.setItem('companySuperSuProListDetails',companyItem)
        this.$router.push({name:'companySuperSuProListDetails'})
      }
    },
    mounted () {

    },
    watch: {}
  }

</script>
