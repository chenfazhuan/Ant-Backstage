<!-- overtime_record.vue -->
<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        机器人列表
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">机器人列表</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">

      <div>
        <!-- Main content -->
        <section>
          <div class="row">
            <div class="col-xs-12">
              <div class="box">
                <div class="box-header with-border">
                  <div action="" class="form-inline">
                    <div class="form-group">
                      <label for="na">
                        关键字：
                      </label>
                      <input type="text" v-model="keyword" class="form-control" placeholder="关键字" id="na"
                             :value="keyword">
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary" @click="search(page,keyword)">
                        搜索
                      </button>
                      <span style="margin-left: 10px">全部记录 <a style="color: red">{{items}}</a>条</span>
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

                    <!--标题-->
                    <el-table-column
                      sortable
                      prop="robotNo"
                      label="编号">
                    </el-table-column>

                    <el-table-column
                      prop="robotName"
                      label="名字"
                      align="center">
                    </el-table-column>

                    <el-table-column
                      label="在线状态"
                      align="center">
                      <template scope="scope">
                        <span class="label label-success" v-if="scope.row.online==1">在线</span>
                        <span class="label label-danger" v-else>离线</span>
                      </template>
                    </el-table-column>

                    <el-table-column
                      prop="status"
                      sortable
                      label="工作状态"
                      width="120"
                      align="center">
                      <template scope="scope">
                        <span v-if="scope.row.isWork==1" class="label label-success">工作中</span>
                        <span class="label label-primary" v-else>等待接单</span>
                      </template>
                    </el-table-column>

                    <el-table-column
                      label="4S网络">
                      <template scope="scope">
                        <span v-if="scope.row.ping==''">无</span>
                        <span v-else>{{scope.row.ping}}毫秒</span>
                      </template>
                    </el-table-column>

                    <el-table-column
                      sortable
                      label="订单ID">
                      <template scope="scope">
                        <span v-if="scope.row.orderId==''">无</span>
                        <span v-else>{{scope.row.orderId}}</span>
                      </template>
                    </el-table-column>

                    <el-table-column
                      sortable
                      label="品牌ID">
                      <template scope="scope">
                        <span v-if="scope.row.brandId==''">无</span>
                        <span v-else>{{scope.row.brandId}}</span>
                      </template>
                    </el-table-column>

                    <el-table-column
                      label="品牌名字">
                      <template scope="scope">
                        <span v-if="scope.row.brandName==''">无</span>
                        <span v-else>{{scope.row.brandName}}</span>
                      </template>
                    </el-table-column>

                    <el-table-column
                      label="查询进度">
                      <template scope="scope">
                        <span v-if="scope.row.progress==''">无</span>
                        <span v-else>{{scope.row.progress}}</span>
                      </template>
                    </el-table-column>

                    <el-table-column
                      label="花费时间">
                      <template scope="scope">
                        <span v-if="scope.row.spendTime==''">无</span>
                        <span v-else>{{scope.row.spendTime}}</span>
                      </template>
                    </el-table-column>

                    <el-table-column
                      label="ip">
                      <template scope="scope">
                        <span v-if="scope.row.robotIp==''">无</span>
                        <span v-else>{{scope.row.robotIp}}</span>
                      </template>
                    </el-table-column>

                    <el-table-column
                      label="端口号">
                      <template scope="scope">
                        <span v-if="scope.row.robotPort==''">无</span>
                        <span v-else>{{scope.row.robotPort}}</span>
                      </template>
                    </el-table-column>

                    <el-table-column
                      sortable
                      label="更新时间"
                      align="center"
                      min-width="150">
                      <template scope="scope">
                        <span v-if="scope.row.updateDate==''">无</span>
                        <span v-else>{{scope.row.updateDate}}</span>
                      </template>
                    </el-table-column>


                    <el-table-column
                      label="操作"
                      align="center"
                      min-width="150">
                      <template scope="scope">
                        <button class="btn btn-info" data-toggle="modal" data-target="#modal-update"
                                style="padding: 1px 6px;"
                                @click="senduser(scope.row.name,scope.row.token,scope.row.price,scope.row.status,scope.row.city,scope.row.phone)">
                          修改
                        </button>
                        &nbsp
                        <button class="btn btn-danger" data-toggle="modal" data-target="#modal-t"
                                style="padding: 1px 6px;"
                                @click="senduser(scope.row.name,scope.row.token)">
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
                        :page-count="lastPage"
                        :page-range="3"
                        :margin-pages="2"
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
  import {getRecommend} from 'api/recommend'
  import paginate from 'vuejs-paginate'

  export default {
    components: {paginate},
    data() {
      return {
        lastPage: 0,//最后一页
        msg: [{'robotNo':1,'robotName':1}],//详细信息
        page: '',//当前页数
        slider: '',//详细页数
        previousPage: '',//上一页
        nextPage: '',//下一页
        keyword: '',//关键字
        items: ''//全部条数
      }
    },
    created() {
      this.pageload(this.page, this.keyword)//页面载入加载数据
    },
    methods: {
      search(page, keyword) {
        this.pageload(page, keyword)
        this.keyword=''
      },
      pages(v) {//v:传入的页数,更改页面
        this.pageload(v)
      },
      pageload(page, keyword) {
        getRecommend('RobotList', page, keyword).then((data) => {//服务器http请求
          this.msg = data.data//详细页数
          this.slider = parseInt(data.paginator.slider)//总页数
          this.page = data.paginator.page//当前页数
          this.previousPage = data.paginator.previousPage//上一页
          this.nextPage = data.paginator.nextPage//下一页
          this.lastPage = data.paginator.lastPage//最后一页
          this.items = data.paginator.items//全部条数
        })
      }
    }
  }

</script>
