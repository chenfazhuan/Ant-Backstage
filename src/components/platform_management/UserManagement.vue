<!-- overtime_record.vue -->
<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        用户管理
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">用户管理</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
      <div class="box box-primary">
        <div class="box-header with-border">
          <div class="form-inline form-group">
            <div class="form-group">
              <input type="text" class="form-control" v-model="sea" placeholder="请输关键字" >
              <button class="btn btn-default" @click="search()" >搜索</button>
            </div>

            <span style="margin-left: 29px">全部记录 <a style="color: red">{{items}}</a>条</span>
            <button class="btn btn-info" data-toggle="modal" data-target="#modal-default" style="float: right">新增
            </button>

          </div>

        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive">
          <el-table

            border
            :data="tableData"
            style="width: 290%">

            <!--增加序列-->
            <el-table-column

              prop="id"
              label="id"
              width="65">
            </el-table-column>

            <!--标题-->
            <el-table-column
              prop="name"
              min-width="95"
              label="用户名">
            </el-table-column>
            <el-table-column
              prop="phone"
              label="手机号"
              min-width="125"
              align="center">
            </el-table-column>
            <el-table-column
              prop="role"
              min-width="170"
              label="角色">
              <template scope="scope">
                <span class="badge bg-info" v-for="(value, index) in scope.row.role">{{value}}</span>
              </template>
            </el-table-column>

            <el-table-column
              prop="state"

              label="状态"
              width="120"
              align="center">
              <template scope="scope">
                <span v-if="scope.row.state==1" class="label label-success">正常</span>
                <span class="label label-danger" v-else>异常</span>
              </template>
            </el-table-column>
            <el-table-column

              prop="dates"
              label="创建时间"
              min-width="95">

            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              min-width="100">
              <template scope="scope">
                <button class="btn btn-info" data-toggle="modal" data-target="#modal-update" style="padding: 1px 6px;"
                        @click="senduser(scope.row.name, scope.row.viewname, scope.row.pwd,scope.row.tel,scope.row.state,scope.row.resource)" >
                  修改
                </button>
                &nbsp
                <button class="btn btn-danger" data-toggle="modal" data-target="#modal-t" style="padding: 1px 6px;"
                      >
                  删除
                </button>
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
                :page-range=2
                :margin-pages=1
                :click-handler=pages
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
    <!-- /.content -->
    <!--增加用户-->
    <div id="modal-default" class="modal fade in">
      <div class="modal-dialog" style="width: 900px; margin: 152px auto;">
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
                <el-form  :model="add_form" :rules="rules" ref="add_form" label-width="80px">
                  <el-form-item label="用户名" prop="name">
                    <el-input v-model="add_form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="显示名" prop="viewname">
                    <el-input v-model="add_form.viewname"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="pwd">
                    <el-input v-model="add_form.pwd"></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="pwds">
                    <el-input v-model="add_form.pwds"></el-input>
                  </el-form-item>
                  <el-form-item label="电话" prop="tel">
                    <el-input v-model="add_form.tel"></el-input>
                  </el-form-item>
                  <el-form-item label="部门选择" prop="state">
                    <el-select v-model="add_form.state" placeholder="请选择活动区域">
                      <el-option label="区域一" value="1"></el-option>
                      <el-option label="区域二" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="角色选择" prop="resource">
                    <el-transfer @change="handleChange" v-model="add_form.resource" :data="data"></el-transfer>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit()">立即创建</el-button>
                    <el-button data-dismiss="modal" aria-hidden="true">取消</el-button>
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
      <div class="modal-dialog" style="width: 900px; margin: 152px auto;">
        <div class="modal-content">
          <div class="modal-header">

            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <li class="fa fa-remove"></li>
            </button>

            <h4 class="modal-title">正在修改车商: <span class="label label-primary">{{updata_form.name}}</span></h4>
          </div>
          <div class="modal-body">
            <div class="box-body">
              <div class="col-md-12">
                <el-form ref="updata_form" :model="updata_form" :rules="rules"  label-width="80px">
                  <el-form-item label="用户名" prop="name">
                    <el-input v-model="updata_form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="显示名" prop="viewname">
                    <el-input v-model="updata_form.viewname"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="pwd">
                    <el-input v-model="updata_form.pwd"></el-input>
                  </el-form-item>
                  <el-form-item label="电话" prop="tel">
                    <el-input v-model="updata_form.tel"></el-input>
                  </el-form-item>
                  <el-form-item label="特殊资源" >
                    <el-radio-group v-model="updata_form.state">
                      <el-radio :label="1" class="radio">正常</el-radio>
                      <el-radio :label="2" class="radio">注销</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label=角色选择>
                    <el-transfer @change="handleChange" v-model="updata_form.resource" :data="data"></el-transfer>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button  data-dismiss="modal" aria-hidden="true">取消</el-button>
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
  import axios from 'axios'
  import {SetUserManagementAdd} from 'api/recommend'
  import {Notification} from 'element-ui'
  export default {
    components:{paginate},
    data(){
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return{
        //搜索关键字
        sea: '',
        items: 2,//全部条数
        lastpage:1,//最后一页
        page: 1,//当前页数
        slider: '',//详细页数
        previousPage: '',//上一页
        nextPage: '',//下一页
        //穿梭表
        data: generateData(),
        value1: [1],
       //列表的数据
        tableData:[
          {
          id:'3333',
          name:'张3',
          phone:'123',
          role:['boss后台管理','nihao','boss后台管理','boss后台管理'],
          state:1,
          dates:'2017-8-9',
           viewname: '王者',
           pwd: '123456700',
           tel: '17826821935',
           resource: [1,2],
          }, {
          id:'3333',
          name:'张3',
          phone:'123',
          role:['boss后台管理'],
          state:1,
          dates:'2017-8-9'
        }
        ],
        //增加用户过滤的
        add_form: {
          name: '',
          viewname: '',
          pwd: '',
          pwds:"",
          tel: '',
          state: "",
          deptId:'',
          resource: [],

        },
        //修改
        updata_form: {
          name: '',
          viewname: '',
          pwd: '',
          pwds:"",
          tel: '',
          state:'',
          resource:[],
        },
        //验证表单
        rules: {
          name :[
              { required: true, message: '请输入名称', trigger: 'blur' }
              //{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
          viewname:[
            { required: true, message: '请输入显示名称', trigger: 'blur' }
            //{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          pwd:[
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          pwds:[
            { required: true, message: '请输再次输入密码', trigger: 'blur' }
          ],
          tel:[
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          state:[
            { required: true, message: '请选择状态', trigger: 'change' }
          ],

        }

      }

    },
    created:function () {

    },
    methods:{
      senduser(name,viewname,pwd,tel,state,resource){//修改
        this.updata_form.name=name;
        this.updata_form.viewname=viewname;
        this.updata_form.pwd=pwd;
        this.updata_form.tel=tel;
        console.log(state);
        this.updata_form.state=state;
        this.updata_form.resource=resource;

      },
      handleChange(value, direction, movedKeys) { //穿梭
        console.log(value, direction, movedKeys);
      },
      onSubmit(){//提交

        SetUserManagementAdd(
          this.add_form.name,
          this.add_form.pwd,
          this.add_form.pwds,
          this.add_form.viewname,
          this.add_form.tel,
         this.add_form.deptId,
          this.add_form.resource).then((data)=>{
          console.log(data)
        })
        //添加成功的提示
        Notification.success({title: '成功',
          message: '这是一条成功的提示消息',
          offset: 100});
      },
      pages(currentPage) {
        console.log('dianwo wo ')
      }






    }
  }
</script>
<style scoped>
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>

