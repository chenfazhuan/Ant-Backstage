<!--<script src="../../../../../../../1/prod.server.js"></script>-->
<!--<script src="../../../../../../../1/dev.server.js"></script>-->
<template>
  <div class="content-wrapper">
    <section class="content-header">
      <h1>
        订单审核
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li>
          <router-link to="/OrderList">
            订单列表
          </router-link>
        </li>
        <li class="active">
          订单审核
        </li>

      </ol>
    </section>
    <section class="content container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="box box-primary">
            <div class="box-header with-border">
              车源信息
            </div>
            <div class="box-body">
              <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="VIN码" prop="vin">
                  <el-input type="text" v-model="ruleForm2.vin" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="车辆所在地" prop="city">
                  <el-input type="text" v-model="ruleForm2.city" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="车型信息" prop="model">
                  <el-input v-model.number="ruleForm2.model"></el-input>
                </el-form-item>
                <el-form-item label="颜色" prop="color">
                  <el-input v-model.number="ruleForm2.color"></el-input>
                </el-form-item>
                <el-form-item label="行驶里程" prop="kilometers">
                  <el-input v-model.number="ruleForm2.kilometers"></el-input>
                </el-form-item>
                <el-form-item label="上牌时间" prop="on_time">
                  <el-input v-model.number="ruleForm2.on_time"></el-input>
                </el-form-item>
                <el-form-item label="交强险有效期" prop="insurance_time">
                  <el-input v-model.number="ruleForm2.insurance_time"></el-input>
                </el-form-item>
                <el-form-item label="年审有效期" prop="annual_time">
                  <el-input v-model.number="ruleForm2.annual_time"></el-input>
                </el-form-item>
                <el-form-item label="车辆描述" prop="remark">
                  <el-input type="textarea" v-model.number="ruleForm2.remark"></el-input>
                </el-form-item>
                <el-form-item label="零售价" prop="presell">
                  <el-input v-model.number="ruleForm2.presell"></el-input>
                </el-form-item>
                <el-form-item label="批发价" prop="reducePrice">
                  <el-input v-model.number="ruleForm2.reducePrice"></el-input>
                </el-form-item>
                <el-form-item label="商家信息" prop="business_name">
                  <el-input v-model.number="ruleForm2.business_name"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" prop="business_phone">
                  <el-input v-model.number="ruleForm2.business_phone"></el-input>
                </el-form-item>
                <el-form-item label="审核意见" prop="auditOpinion">
                  <el-input type="textarea" v-model.number="ruleForm2.auditOpinion"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                  <el-button @click="resetForm('ruleForm2')">重置</el-button>
                  <router-link to="/OrderList">
                    <el-button>返回</el-button>
                  </router-link>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box box-primary">
            <div class="box-header with-border">
              车源图片
            </div>
            <div class="box-body row" v-for="n in ruleForm2.cover_pic_url" style="text-align: center">
              <div class="col-sm-6 col-sm-offset-3 pic" >
                <img v-lazy="n" alt="" style="width: 100%;">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import {getOderLIstHandle} from 'api/recommend'
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          vin:'',//vin码
          model:'',//型号
          city:'',//城市
          color:'',//颜色
          kilometers:'',//里程数
          on_time:'',//上牌时间
          insurance_time:'',//交强险有效期
          annual_time:'',//年审有效期
          remark:'',//车辆描述
          presell:'',//零售价
          reducePrice:'',//批发价
          business_name:'',//车商信息
          business_phone:'',//联系方式
          auditOpinion:'',//审核意见
          cover_pic_url:''//图片
        },
        rules2: {
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          pass: [
            {required: true, message: '请选择活动资源', trigger: 'blur'}
          ],
          vin: [
            {required: true, message: '请输入vin', trigger: 'blur'}
          ],
          model: [
            {required: true, message: '请选择车型信息', trigger: 'blur'}
          ],
          city:[
            {required: true, message: '请选择城市', trigger: 'blur'}
          ],
          checkPass: [
            {required: true, message: '请选择活动资源', trigger: 'blur'}
          ],
          age: [
            {required: true, message: '请选择活动资源',trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      fetchdata(){
        getOderLIstHandle(this.$route.query.token).then((data)=>{
          this.ruleForm2.vin=data.data.details.vin
          this.ruleForm2.model=data.data.details.model
          this.ruleForm2.city=data.data.details.city
          this.ruleForm2.color=data.data.details.color
          this.ruleForm2.kilometers=data.data.details.kilometers
          this.ruleForm2.on_time=data.data.details.on_time
          this.ruleForm2.insurance_time=data.data.details.insurance_time
          this.ruleForm2.annual_time=data.data.details.annual_time
          this.ruleForm2.remark=data.data.details.remark
          this.ruleForm2.presell=data.data.details.presell
          this.ruleForm2.reducePrice=data.data.details.reducePrice
          this.ruleForm2.business_name=data.data.details.business_name
          this.ruleForm2.business_phone=data.data.details.business_phone
          this.ruleForm2.auditOpinion=data.data.details.auditOpinion

          this.ruleForm2.cover_pic_url=data.data.details.cover_pic_url.split(","); //字符分割

        })
      }
    },
    watch:{
      '$route':'fetchdata'
    },
    created(){
      this.fetchdata()
    }
  }
</script>
<style>
  .pic{
    border: 1px solid #d1dbe5;
    border-radius: 4px;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    padding: 10px;
  }
</style>
