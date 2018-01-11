<template>
  <div id="logisticsListItemInfo"  class="min-w" style="background-color: #ffffff">
    <div class="pagesNav">
      <Breadcrumb>
        <BreadcrumbItem href="/logisticsList">物流单列表</BreadcrumbItem>
        <BreadcrumbItem>物流单详情</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="logisticsListFromCon">
      <div class="logisticsListFrom">
        <p class="logisticsListFromTitle">物流信息</p>
        <Form :model="formItem" :label-width="80" class="logisticsFrom">
          <FormItem label="公司名称">
            <Input v-model="formItem.text" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="起点">
            <Input v-model="formItem.text2" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="终点">
            <Input v-model="formItem.text3" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="起运时间">
            <Input v-model="formItem.text4" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="货柜号码">
            <Input v-model="formItem.text5" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="货物名称">
            <Input v-model="formItem.text6" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="货物数量">
            <Input v-model="formItem.text7" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="货物牌子">
            <Input v-model="formItem.text8" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="货主">
            <Input v-model="formItem.text8" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="货主电话">
            <Input v-model="formItem.text8" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="目的地">
          <Input v-model="formItem.text8" placeholder="请输入"></Input>
        </FormItem>
          <FormItem label="备注">
            <Input v-model="formItem.text8" placeholder="请输入"></Input>
          </FormItem>
        </Form>
        <div class="logisticsLstRecordBottom">
          <Button style="margin-left: 90px;" class="span_btn"  type="success" long>保存</Button>
        </div>

      </div>
      <div class="logisticsLstRecord">
          <p class="logisticsListFromTitle">物流信息</p>
          <div class="logisticsLstRecordList">
            <div class="divListItem">

            </div>
          </div>

        <div class="logisticsLstRecordBottom" style="padding: 10px 5px;">
          <Button class="span_btn g_fl"  type="info" @click="modal1 = true">补充信息</Button>
          <Modal id="logisticsPushImgShow"
            v-model="modal1"
            title="选择补充信息"
            @on-ok="ok"
            @on-cancel="cancel"
                 :mask-closable="false">
            <p @click="logisticsPushImg()" class="p_BC">补充上传图片</p>
            <p @click="logisticsPushInfoYN()" class="p_BC">补充越南关口信息</p>
            <p @click="logisticsPushInfoTG()" class="p_BC">补充泰国关口信息</p>
          </Modal>
          <Button class="span_btn g_fl" style="margin-left: 5%"  @click="modal2 = true" type="info">作废物流单</Button>
          <Modal v-model="modal2" width="360">
            <p slot="header" style="color:#f60;text-align:center">
              <Icon type="information-circled"></Icon>
              <span></span>
            </p>
            <div style="text-align:center">
              <p>是否继续作废？</p>
            </div>
          </Modal>
          <Button class="span_btn g_fr"   @click="modal2 = true" type="info">结束物流单</Button>
          <Modal v-model="modal2" width="360">
            <p slot="header" style="color:#f60;text-align:center">
              <Icon type="information-circled"></Icon>
              <span></span>
            </p>
            <div style="text-align:center">
              <p>是否结束？</p>
            </div>
          </Modal>
        </div>
        <div>
        </div>

      </div>
    </div>
  </div>



</template>
<style>
  #logisticsListItemInfo{

  }


</style>
<script>
  import Vue from 'vue'

  import Local from 'local'

  export default{
    data () {
      return {
        items: [
          {message: 'foo' },
          {message: 'Bar' }
        ],
        modal2: false,
        modal1: false,
        formItem: {
          text: '',
          text2: '',
          text3: '',
          text4: '',
          text5: '',
          text6: '',
          text7: '',
          text8: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        }
      }

    },
    components: {

    },
    methods: {

      logisticsPushImg(){
        this.$router.push({name:'logisticsPushImg'})
      },

      logisticsPushInfoYN(){
        this.$router.push({name:'logisticsPushInfoYN'})
      },
      logisticsPushInfoTG(){
        this.$router.push({name:'logisticsPushInfoTG'})
      },
      del () {
        this.modal_loading = true;
        setTimeout(() => {
          this.modal_loading = false;
          this.modal2 = false;
          this.$Message.success('作废成功');
        }, 2000);
      },
      ok () {
      /*  this.$Message.info('点击了确定');*/
      },
      cancel () {

      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    },
    created(){

      Object.assign(this.formItem,Local.getJSON('logisticsListConList'))
      /*this.$Message.info('点击了取消');*/
    },


    mounted () {

    },

    watch: {}
  }

</script>
