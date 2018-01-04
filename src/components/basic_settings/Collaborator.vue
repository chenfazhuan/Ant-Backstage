<template>
    <div id="content" class="content-wrapper" style="min-height: 1505px;"><!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          合作者每日查询
          <small></small>
        </h1>
        <ol class="breadcrumb">
          <li>
            <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
          </li>
          <li class="active">合作者每日查询</li>
        </ol>
      </section>

<!-- Main content -->
<section class="content">
    <div class="row">
        <div class="col-xs-12">
            <form id="dataForm" name="splitPage" class="form-condensed form-horizontal" method="post">
                <div class="box" >
                    <div class="box-header">
                      <div style="float: right;" data-toggle="modal" data-target="#modal-default">
                        <el-button type="primary" >新增</el-button>
                      </div>
                    </div>
                    <div class="box-body" style="margin-top: 10px">
                        <div class="row" id="J_pageCount"><div class="col-xs-6 pull-left" style="margin-left: 10px;">总共<span style="color: #f00;" id="J_dataCount">38</span>条记录</div></div>
                        <div class="table-responsive">
                          <el-table :data="tableData6" border="" show-summary style="width: 100%">
                            <el-table-column prop="secret_key" label="secret_key" width="180">
                            </el-table-column>
                            <el-table-column prop="partner_name" label="partner_name">
                            </el-table-column>
                            <el-table-column prop="notify_url" sortable label="notify_url">
                            </el-table-column>
                            <el-table-column prop="phone" sortable label="phone">
                            </el-table-column>
                            <el-table-column prop="amount3" align="center" label="操作">
                              <template scope="scope">
                                <button class="btn btn-info" data-toggle="modal" data-target="#modal-update" style="padding: 1px 6px;"
                                        @click="senduser(scope.row.name,scope.row.token,scope.row.price,scope.row.status,scope.row.city,scope.row.phone)">
                                  查看详情
                                </button>
                              </template>
                            </el-table-column>
                          </el-table>
                        </div>
                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer clearfix">
                        <div class="row">
                            <div class="col-xs-6 pull-right">
                                <div id="widget_pagination"><ul class="pagination pagination-sm no-margin pull-right" id="pager-ext"><li class="first active disabled"><a href="#">第一页</a></li><li class="prev active disabled"><a href="#">上一页</a></li><li class="page active"><a href="#">1</a></li><li class="page"><a href="#">2</a></li><li class="next"><a href="#">下一页</a></li><li class="last"><a href="#">最后页</a></li></ul></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.box -->
            </form>
        </div>
        <!-- /.col -->
    </div>
    <!-- /.row -->
</section><!-- /.content -->
<!-- Modal -->
      <!--增加用户-->
      <div id="modal-default" class="modal fade in">
        <div class="modal-dialog" style="width: 900px; margin: 152px auto;">
          <div class="modal-content">
            <div class="modal-header">

              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                <li class="fa fa-remove"></li>
              </button>


              <h5 class="modal-title">添加合作者每日查询</h5>
            </div>
            <div class="modal-body">
              <div class="box-body">
                <div class="col-md-12">
                  <el-form  :model="add_form" :rules="rules" ref="add_form" label-width="80px">
                    <el-form-item label="partner_id" prop="partner_id">
                      <el-input v-model="add_form.partner_id"></el-input>
                    </el-form-item>
                    <el-form-item label="secret_key" prop="secret_key">
                      <el-input v-model="add_form.secret_key"></el-input>
                    </el-form-item>
                    <el-form-item label="partner_name" prop="partner_name">
                      <el-input v-model="add_form.partner_name"></el-input>
                    </el-form-item>
                    <el-form-item label="notify_url" prop="notify_url">
                      <el-input v-model="add_form.notify_url"></el-input>
                    </el-form-item>
                    <el-form-item label="G类客户" prop="state">
                      <el-radio-group v-model="add_form.state">
                        <el-radio :label="1" >是</el-radio>
                        <el-radio :label="2" >否</el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="token" prop="token">
                      <el-input v-model="add_form.token" readonly ></el-input>
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

</div>
</template>
<script>
    export default {
      data() {
        return {
          tableData6: [{
            secret_key: '12987122',
            partner_name: '王小虎',
            notify_url:'http://www.mayinvwagn.com',
            phone: '234',
          },{
            secret_key: '12987122',
            partner_name: '王小虎',
            notify_url:'http://www.mayinvwagn.com',
            phone: '234',
          },{
            secret_key: '12987122',
            partner_name: '王小虎',
            notify_url:'http://www.mayinvwagn.com',
            phone: '234',
          },{
            secret_key: '12987122',
            partner_name: '王小虎',
            notify_url:'http://www.mayinvwagn.com',
            phone: '234',
          },{
            secret_key: '12987122',
            partner_name: '王小虎',
            notify_url:'http://www.mayinvwagn.com',
            phone: '234',
          }],
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
        };
      }
    }
</script>
