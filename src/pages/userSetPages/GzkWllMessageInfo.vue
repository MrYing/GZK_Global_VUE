<template>
  <div id="GzkWllMessageInfo" class="min-w">
    <div class="pagesNav">
      <Breadcrumb>
        <BreadcrumbItem href="/GzkWllMessageInfo">消息中心</BreadcrumbItem>
      </Breadcrumb>
      </div>
     <div class="GzkWllMessageInfoList">
       <div v-for="MessageIn in GzkWllMessageInfoLists" class="MessageItem">
         <p class="p_1">
           <span class="icon-radius"></span>
           <span style="margin-top: 5px;">通知</span>
           <span class="span_col">{{MessageIn.phone}}</span>
         </p>
         <p class="p_2">{{MessageIn.desinfo}}</p>
       </div>
    </div>
    <div class="GzkWllMessageInfoListInform">
      <div  class="MessageInform">
        <p class="p_1">
          <span class="icon-radius"></span>
          <span style="margin-top: 5px;">通知</span>
          <span class="span_col">18555666</span>
        </p>
        <p class="p_2">这是通知这是通知这是通知这是通知这是通知这是通知这是通知这是通知这是通知</p>
        <div class="InFromCon">
            <p class="p_info">申请人：小王</p>
            <p class="p_info">申请物流单：2017年9月9号/泰国，曼谷-中国河口 广州果真快信息科技有限公司</p>
            <p class="p_info">申请理由：该物流单应收款填写错误，应为120000元</p>
            <p>
              <span class="span_btn">通过</span>
              <span class="span_btn">驳回</span>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        GzkWllMessageInfoLists: [
          { phone: '2017年11月1日',desinfo: '这是通知这是通知这是通知这是通知这是通知这是通知这是通知这是通知这是通知这是通知1'},
          { phone: '2017年11月2日',desinfo: '这是通知这是通知这是通知这是通知这是通知这是通知这是通知这是通知这是通知这是通知1'},
          { phone: '2017年11月3日',desinfo: '这是通知这是通知这是通知这是通知这是通知这是通知这是通知这是通知这是通知这是通知1'},
          { phone: '2017年11月4日',desinfo: '这是通知这是通知这是通知这是通知这是通知这是通知这是通知这是通知这是通知这是通知1'},
                  ]
      }
    },
    components: {},
    methods: {},
    mounted () {

    },
    watch: {}
  }

</script>
