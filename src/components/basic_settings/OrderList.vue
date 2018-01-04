<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        订单列表
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">订单列表</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">

      <div>
        <!-- Main content -->
        <section>
          <div class="row">
            <div class="col-xs-12">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <div class="form-inline form-group">
                    <div class="form-group">
                      <input type="text" v-model="query_id" class="form-control" placeholder="VIN">
                      <div class="btn-group">
                        <button class="btn btn-default">精准重单查询</button>
                        <button class="btn btn-default">模糊重单查询</button>

                      </div>
                    </div>

                    <span style="margin-left: 10px">全部记录 <a style="color: red">{{items}}</a>条</span>

                  </div>
                  <div class="form-inline form-group">
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-addon">
                          <i class="fa fa-calendar"></i>
                        </div>
                        <input type="text" placeholder="开始时间" class="form-control pull-right" id="startTime">
                      </div>
                      ~
                      <div class="input-group">
                        <div class="input-group-addon">
                          <i class="fa fa-calendar"></i>
                        </div>
                        <input type="text" placeholder="结束时间" class="form-control pull-right" id="endTime">
                      </div>

                      <input type="text" v-model="partnerId" class="form-control" placeholder="客户手机号">
                      <input type="text" v-model="partnerId" class="form-control" placeholder="品牌">
                    </div>
                    <div class="form-group">
                      <div class="btn-group">
                        <button type="button" class="btn btn-default">未抢的单</button>
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
                                aria-expanded="false">
                          <span class="caret"></span>
                          <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">我的单</a></li>
                          <li><a href="#">成功的单</a></li>
                          <li><a href="#">失败的单</a></li>
                          <li class="divider"></li>
                          <li><a href="#">驳回的单</a></li>
                          <li><a href="#">无记录的单</a></li>
                          <li><a href="#">全部分配的单</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>

                </div>
                <!-- /.box-header -->
                <div class="box-body table-responsive">
                  <el-table
                    ref="singleTable"
                    highlight-current-row
                    @current-change=""
                    border
                    :data="msg"
                    style="width: 290%">

                    <!--增加序列-->
                    <el-table-column
                      type="index"
                      label="序列"
                      width="60">
                    </el-table-column>

                    <!--标题-->
                    <el-table-column
                      sortable
                      prop="id"
                      label="id">
                    </el-table-column>
                    <el-table-column
                      prop="type"
                      label="类型">
                    </el-table-column>
                    <el-table-column
                      prop="model"
                      label="型号">
                    </el-table-column>
                    <el-table-column
                      prop="brand"
                      sortable
                      label="品牌名称">
                    </el-table-column>
                    <el-table-column
                      prop="city"
                      label="所在地区">
                    </el-table-column>
                    <el-table-column
                      prop="gmtModified"
                      sortable
                      label="完成时间">
                    </el-table-column>
                    <el-table-column
                      sortable
                      prop="auditStatus"
                      label="审核">
                      <template scope="scope">
                        <span v-if="scope.row.auditStatus==1" class="label label-success">审核通过</span>
                        <span class="label label-danger" v-else>未审核</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      sortable
                      prop="status"
                      label="状态">
                      <template scope="scope">
                        <span v-if="scope.row.del==1" class="label bg-gray-active">已删除</span>
                        <span class="label label-danger" v-else-if="scope.row.status==2">下架</span>
                        <span class="label label-success" v-else>在售</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="操作"
                      align="center">
                      <template scope="scope">
                        <button class="btn btn-info" style="padding: 1px 6px;" @click="gomain(scope.row.token)">
                          查看
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
                        :page-count="lastPage"
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
              <!-- /.box -->
            </div>
          </div>
        </section>
      </div>

    </section>
    <!-- /.content -->
  </div>
</template>
<script>
  import {getOrderList} from 'api/recommend'
  import paginate from 'vuejs-paginate'


  export default {
    components: {paginate},
    data() {
      return {
        lastPage: 0,//最后一页
        msg: [{'id':1,'type':1}],//详细信息
        page: '',//当前页数
        slider: '',//详细页数
        previousPage: '',//上一页
        nextPage: '',//下一页
        keyword: '',//关键字
        items: '',//全部条数


        query_id: '',//
        vin_code: '',//
        partnerId: '',//

        phone: '',//
        startTime: '',//
        endTime: '',//
        currentPage: ''//
      }
    },
    created() {
      this.pageload('', '', '', '', '', 1)//页面载入加载数据
    },
    methods: {
      search(keywords, phone, brand, startTime, endTime, currentPage) {
        this.pageload(keywords, phone, brand, startTime, endTime, currentPage)
      },
      pages(currentPage) {//v:传入的页数,更改页面
        this.pageload('', '', '', '', '', currentPage)
      },
      pageload(keywords, phone, brand, startTime, endTime, currentPage) {
        getOrderList(keywords, phone, brand, startTime, endTime, currentPage).then((data) => {//服务器http请求
          console.log(data.data)
          this.msg = data.data//详细页数
          this.slider = parseInt(data.paginator.slider)//总页数
          this.page = data.paginator.page//当前页数
          this.previousPage = data.paginator.previousPage//上一页
          this.nextPage = data.paginator.nextPage//下一页
          this.lastPage = data.paginator.lastPage//最后一页
          this.items = data.paginator.items//全部条数
        })
      },
      gomain(token) {
        this.$router.push({
          name: 'OrderList_Handle',
          query: {token:token}
        });
      }
    },
    mounted: function () {
      $('#startTime').datetimepicker({
        minView: 2, //选择日期后，不会再跳转去选择时分秒
        format: 'yyyy-mm-dd',
        todayBtn: 1,
        autoclose: 1,
        language: 'cn',//中文
        startView: 2//月视图
      });
      $('#endTime').datetimepicker({
        minView: 2, //选择日期后，不会再跳转去选择时分秒
        format: 'yyyy-mm-dd',
        todayBtn: 1,
        autoclose: 1,
        language: 'cn',//中文
        startView: 2//月视图
      });
    }
  }

</script>
<style>
</style>
