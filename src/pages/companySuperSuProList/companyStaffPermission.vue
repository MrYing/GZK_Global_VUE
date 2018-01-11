<template>
  <div id="companyStaffPermission" class="min-w">
    <div class="pagesNav">
      <Breadcrumb>
        <BreadcrumbItem href="/companySuperSuProList">管理者权限</BreadcrumbItem>
        <BreadcrumbItem href="/companySuperSuProList">公司列表</BreadcrumbItem>
        <BreadcrumbItem href="/companySuperSuProListDetails">公司详情</BreadcrumbItem>
        <BreadcrumbItem href="/companyStaffPermission">人员权限设置</BreadcrumbItem>
      </Breadcrumb>
    </div>

    <div class="companyStaffPermissionBOX">
        <div class="companyStaffPermissionTitle clearFloat">
          <span class="icon_img"></span>
          <span class="span_desc">
            <span>小王</span>
            <span>1555555555</span>
          </span>
        </div>
        <p class="All_Permission">
          <Checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll">全选</Checkbox>
        </p>
      <div class="handleCheckItemBtn">
        <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
          <p class="p_Checkbox">
            <Checkbox label="香蕉" class="icon_leble"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
          </p>
          <p  class="p_Checkbox">
            <Checkbox label="西瓜"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
          </p>
          <p  class="p_Checkbox">
            <Checkbox label="西瓜"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
          </p>
          <p  class="p_Checkbox">
            <Checkbox label="西瓜"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
          </p>

        </CheckboxGroup>
      </div>

      </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        indeterminate: true,
        checkAll: false,
        checkAllGroup: ['香蕉', '西瓜']
      }
    },
    components: {},
    methods: {
      handleCheckAll () {
        if (this.indeterminate) {
          this.checkAll = false;
        } else {
          this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;

        if (this.checkAll) {
          this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
        } else {
          this.checkAllGroup = [];
        }
      },
      checkAllGroupChange (data) {
        if (data.length === 3) {
          this.indeterminate = false;
          this.checkAll = true;
        } else if (data.length > 0) {
          this.indeterminate = true;
          this.checkAll = false;
        } else {
          this.indeterminate = false;
          this.checkAll = false;
        }
      }
    },
    mounted () {

    },
    watch: {}
  }

</script>
