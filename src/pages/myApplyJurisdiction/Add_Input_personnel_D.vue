<template>
    <div id="Add_Inp_personnel" class="min-w">
        <div class="pagesNav">
            <Breadcrumb>
                <BreadcrumbItem href="/myApplyJurisdiction">申请管理权限设置</BreadcrumbItem>
                  <BreadcrumbItem>添加人员</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="Add_Inp_personnelFrom">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                <FormItem label="手机号码：" prop="GoodsName">
                    <Input v-model="formValidate.GoodsName" placeholder="点击输入"></Input>
                </FormItem>
                <FormItem label="人员昵称：" prop="Remarks">
                    <Input v-model="formValidate.Remarks" placeholder="点击输入"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">提交保存</Button>
                    <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置信息</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
    export default{
        data () {
            return {
                formValidate: {
                    GoodsName:"",
                    Remarks:"",
                },ruleValidate: {
                    GoodsName: [
                        { required: true, message: '请输入手机号码', trigger: 'blur' }
                    ],
                    Remarks: [
                        { required: true, message: '请输入昵称', trigger: 'blur' }
                    ],
                }
            }
        },
        components: {},
        methods: {
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
