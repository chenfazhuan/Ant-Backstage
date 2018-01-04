<template>
  <div class="content-wrapper">
    <section class="content-header">
      <h1>
        车商信息管理
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">车商信息管理</li>
      </ol>
    </section>

    <section class="content container-fluid">
      <div class="box box-primary">
        <div class="box-header with-border">
          <div class="form-inline form-group">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="请输入手机号码" v-model="sea">
              <button class="btn btn-default" @click="search()">搜索</button>
            </div>

            <span style="margin-left: 29px">全部记录 <a style="color: red">{{items}}</a>条</span>
            <button class="btn btn-info" data-toggle="modal" data-target="#modal-default" style="float: right">新增
            </button>

          </div>

        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive">
          <el-table
            ref="singleTable"
            highlight-current-row
            @current-change=""
            border
            :data="tableData"
            style="width: 290%">

            <!--增加序列-->
            <el-table-column
              type="index"
              label="序列"
              width="65">
            </el-table-column>

            <!--标题-->
            <el-table-column
              prop="name"
              min-width="95"
              align="center"
              label="车商名称">
            </el-table-column>
            <el-table-column
              prop="phone"
              label="手机号"
              min-width="125"
              align="center">
            </el-table-column>
            <el-table-column
              sortable
              prop="gmtCreate"
              label="录入日期"
              align="center"
              min-width="170">
              <template scope="scope">
                <span>{{ scope.row.gmtCreate }}</span>
              </template>
            </el-table-column>


            <el-table-column
              prop="status"
              sortable
              label="车商状态"
              width="120"
              align="center">
              <template scope="scope">
                <span v-if="scope.row.status==1" class="label label-success">正常</span>
                <span class="label label-danger" v-else>异常</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="city"
              align="center"
              min-width="95"
              label="所在地区">
            </el-table-column>
            <el-table-column
              sortable
              prop="price"
              align="center"
              min-width="88"
              label="价格">
            </el-table-column>
            <el-table-column
              prop="token"
              align="center"
              label="二维码">
              <template scope="scope">
                <span>
                  <button data-toggle="modal" data-target="#modal-l" class="btn btn-primary" style="padding: 1px 6px;"
                          @click='seecode(scope.row.token)'>
                    二维码
                  </button>
                </span>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              align="center">
              <template scope="scope">
                <button class="btn btn-info" data-toggle="modal" data-target="#modal-update" style="padding: 1px 6px;"
                        @click="senduser(scope.row.name,scope.row.token,scope.row.price,scope.row.status,scope.row.city,scope.row.phone)">
                  修改
                </button>
                &nbsp
                <!--<button class="btn btn-danger" data-toggle="modal" data-target="#modal-t" style="padding: 1px 6px;"-->
                        <!--@click="senduser(scope.row.name,scope.row.token)">-->
                  <!--删除-->
                <!--</button>-->
              </template>
            </el-table-column>
          </el-table>

        </div>
        <!-- /.box-body -->
        <div class="box-footer clearfix">

          <div class="row">
            <div class="col-xs-3"></div>
            <div class="col-xs-6" style="text-align: center">
              <paginate
                :page-count="lastpage"
                :page-range="2"
                :margin-pages="1"
                :click-handler="pages"
                :prev-text="'上一页'"
                :next-text="'下一页'"
                :container-class="'pagination'"
                :page-class="'page-item'">
              </paginate>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!--查看二维码-->
    <div class="modal fade in" id="modal-l">
      <div class="modal-dialog" style="margin: 152px auto;">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <li class="fa fa-remove"></li>
            </button>
            <h4 class="modal-title">右键保存</h4>
          </div>
          <div class="modal-body" style="text-align: center">
            <a :href="img" download="a.jpg">
              <img :src="img" class="qr_img">
            </a>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!--删除提示框-->
    <div class="modal fade in" id="modal-t">
      <div class="modal-dialog" style="margin: 152px auto;">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span></button>
          </div>
          <div class="modal-body">
            <h4 class="modal-title">确认删除 <span class="label label-primary">{{username}}</span> ?</h4>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delMsg">确定</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!--增加用户-->
    <div id="modal-default" class="modal fade in">
      <div class="modal-dialog" style="width: 700px; margin: 152px auto;">
        <div class="modal-content">
          <div class="modal-header">

            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <li class="fa fa-remove"></li>
            </button>


            <h5 class="modal-title">车商信息</h5>
          </div>
          <div class="modal-body">
            <div class="box-body">
              <div class="col-md-12">
                <el-form :model="ruleForm_add" :rules="rules" ref="ruleForm_add" label-width="100px">
                  <el-form-item label="车商名称" prop="name">
                    <el-input v-model="ruleForm_add.name"></el-input>
                  </el-form-item>
                  <el-form-item label="定义价格" prop="price">
                    <el-input v-model="ruleForm_add.price"></el-input>
                  </el-form-item>
                  <el-form-item label="手机号" prop="phone">
                    <el-input v-model="ruleForm_add.phone"></el-input>
                  </el-form-item>
                  <el-form-item label="城市" prop="city">
                    <el-input v-model="ruleForm_add.city"></el-input>
                  </el-form-item>
                  <el-form-item label="操作员" prop="operator">
                    <el-input v-model="ruleForm_add.operator"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm_add','new')">创建</el-button>
                    <el-button @click="resetForm('ruleForm_add')">重置</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!--修改用户资料-->
    <div id="modal-update" class="modal fade in">
      <div class="modal-dialog" style="width: 700px; margin: 152px auto;">
        <div class="modal-content">
          <div class="modal-header">

            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <li class="fa fa-remove"></li>
            </button>

            <h4 class="modal-title">正在修改车商: <span class="label label-primary">{{username}}</span></h4>
          </div>
          <div class="modal-body">
            <div class="box-body">
              <div class="col-md-12">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                  <el-form-item label="车商名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="定义价格" prop="money">
                    <el-input v-model="ruleForm.money"></el-input>
                  </el-form-item>
                  <el-form-item label="手机号" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                  </el-form-item>
                  <el-form-item label="状态">
                    <el-radio-group v-model="radio">
                      <el-radio label='1'>可用</el-radio>
                      <el-radio label='2'>禁用</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="城市" prop="city">
                    <el-input v-model="ruleForm.city"></el-input>
                  </el-form-item>
                  <el-form-item label="操作员" prop="operator">
                    <el-input v-model="ruleForm.operator"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm','change')">修改</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
  import paginate from 'vuejs-paginate'
  import {getInformationManagement} from 'api/recommend'
  import $ from 'jquery'
  import axios from 'axios'

  export default {
    components: {paginate},
    data() {
      return {
        img1: '',
        img: '',//二维码
        sea: '',//搜索关键字
        radio: '1',//单选框
        lastpage: 0,//最后一页
        msg: "",//记录信息
        page: '',//当前页数
        slider: '',//详细页数
        previousPage: '',//上一页
        nextPage: '',//下一页
        keyword: '',//关键字
        items: '',//全部条数
        token: '',//记录token
        username: 'abc',
        tableData: [],
        ruleForm: {//修改用户填写时候过滤
          resource: '',
          name: '',
          money: '',
          phone: '',
          operator: '',
          city: ''
        },
        ruleForm_add: {//增加用户填写时候过滤
          resource: '',
          name: '',
          price: '',
          phone: '',
          operator: '',
          city: ''
        },
        rules: {//过滤提示
          name: [
            {required: true, message: '请输入车商名称', trigger: 'blur'}
          ],
          price: [
            {required: true, message: '请输入价格', trigger: 'blur'}
          ],
          money: [
            {required: true, message: '请输入价格'}
          ],
          resource: [
            {required: true, message: '请选择状态', trigger: 'change'}
          ],
          city: [
            {required: true, message: '请输入城市', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入手机号', trigger: 'blur'}
          ],
          operator: [
            {required: true, message: '请输入操作员', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      pageload(conType, token, names, price, phone, city, operator, currentPage, status) {
        getInformationManagement(conType, token, names, price, phone, city, operator, currentPage, status).then((data) => {
          this.lastpage = data.paginator.lastPage//最后一页
          this.items = data.paginator.items//全部条数
          this.tableData = data.data
        })
      },
      seecode(token) {
        this.img = 'http://dev.mayinvwang.com/car/api/v1/twoDimensionCode/getTwoDimensionCode?token=' + token;
      },
      senduser(data, Create, price, status, city, phone) {
        this.username = data
        this.token = Create

        this.ruleForm.name = data
        this.ruleForm.phone = phone
        this.radio = status.toString()
        this.ruleForm.money = Number(price)
        this.ruleForm.city = city
      },
      delMsg() {
        getInformationManagement('delete', this.token, '', '', '', '', '', '', '').then((data) => {
          this.pageload('listQuery', '', '', '', '', '', '', 1, '')
          $('#modal-t').modal('hide')
        })
      },
      submitForm(formName, msg) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (msg == 'change') {
              getInformationManagement('update', this.token, this.ruleForm.name, this.ruleForm.money, this.ruleForm.phone, this.ruleForm.city, this.ruleForm.operator, '', this.radio).then((data) => {
                this.pageload('listQuery', '', '', '', '', '', '', 1, '')
                $('#modal-update').modal('hide')
              })
            }
            else if (msg == 'new') {
              getInformationManagement('insert', '', this.ruleForm_add.name, this.ruleForm_add.price, this.ruleForm_add.phone, this.ruleForm_add.city, this.ruleForm_add.operator, '', '1').then((data) => {
                this.pageload('listQuery', '', '', '', '', '', '', 1, '')
                $('#modal-default').modal('hide')
              })

            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      pages(currentPage) {
        this.pageload('listQuery', '', '', '', '', '', '', currentPage, '')
      },
      search() {
        this.pageload('listQuery', '', '', '', this.sea, '', '', '', '')
        this.sea = ''
      }
    },
    created() {
      this.pageload('listQuery', '', '', '', '', '', '', 1, '')
    }
  }
</script>
