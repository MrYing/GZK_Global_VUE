<template>
  <div id="newLogistics" class="min-w">
    <div class="pagesNav">
      <Breadcrumb>
        <BreadcrumbItem href="/logisticsList">物流单列表</BreadcrumbItem>
        <BreadcrumbItem>新建物流单</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="newLogisticsFrom">
      <div class="Inp_selsct">
         <span class="span_title"><i style="color: red;padding-right: 5px">*</i>起点</span>
        <AutoComplete
          v-model="value4"
          placeholder="input here"
          style="width:500px">
          <div class="demo-auto-complete-item" v-for="item in data4">
            <div class="demo-auto-complete-group">
              <span>{{ item.title }}</span>
            </div>
            <Option v-for="option in item.children" :value="option.title" :key="option.title">
              <span class="demo-auto-complete-title">{{ option.title }}</span>
            </Option>
          </div>
        </AutoComplete>
      </div>
      <div class="Inp_selsct">
        <span class="span_title"><i style="color: red;padding-right: 5px">*</i>终点</span>
        <AutoComplete
          v-model="value4"
          placeholder="input here"
          style="width:500px">
          <div class="demo-auto-complete-item" v-for="item in data4">
            <div class="demo-auto-complete-group">
              <span>{{ item.title }}</span>
            </div>
            <Option v-for="option in item.children" :value="option.title" :key="option.title">
              <span class="demo-auto-complete-title">{{ option.title }}</span>
            </Option>
          </div>
        </AutoComplete>
      </div>
      <div  class="Inp_selsct">
        <span class="span_title"><i style="color: red;padding-right: 5px">*</i>起运时间</span>
        <DatePicker  type="datetime" format="yyyy-MM-dd HH:mm" placeholder="下拉选择时间" style="width: 500px"></DatePicker>
      </div>
      <Form label-position="left" :label-width="80">
        <FormItem label="货柜号码">
          <Input ></Input>
        </FormItem>
      </Form>
      <Form ref="formValidate"  :rules="ruleValidate" :label-width="80">
         <FormItem label="货柜名称" prop="name">
            <Input  placeholder="Enter your name"></Input>
          </FormItem>
      </Form>
      <Form label-position="left" :label-width="80">
        <FormItem label="货物数量">
          <Input ></Input>
        </FormItem>
        <FormItem label="货物重量">
          <Input ></Input>
        </FormItem>
        <FormItem label="货物牌子">
          <Input ></Input>
        </FormItem>
      </Form>
      <Form ref="formValidate"  :rules="ruleValidate" :label-width="80">
        <FormItem label="货主" prop="name">
          <Input  placeholder="Enter your name"></Input>
        </FormItem>
        <FormItem label="货主电话" prop="name">
        <Input  placeholder="Enter your name"></Input>
        </FormItem>
      </Form>
      <Form label-position="left" :label-width="80">
        <FormItem label="目的地">
          <Input ></Input>
        </FormItem>
        <FormItem label="备注">
          <Input ></Input>
        </FormItem>
      </Form>
    </div>
    <div class="FromBottomBtn">
      <span class="span_btn" style="background-color:#368bff">提交保存</span>
      <span class="span_btn" style="border: 1px solid #368bff;color:#000000;margin-left:30px;">保存草稿</span>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        value4: '',
        data4: [
          {
            title: '话题',
            children: [
              {
                title: 'iView',
                count: 10000,

              },
              {
                title: 'iView UI',
                count: 10600,

              }
            ]
          },
          {
            title: '问题',
            children: [
              {
                title: 'iView UI 有多好',
                count: 60100,

              },
              {
                title: 'iView 是啥',
                count: 30010,

              }
            ]
          },
        ],
        ruleValidate: {
          name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          ],
        }
      }
    },
    components: {},
    methods: {
      filterMethod (value, option) {
        return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    },
    mounted () {

    },
    watch: {}
  }

</script>
