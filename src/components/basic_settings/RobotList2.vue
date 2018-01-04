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
                      <el-form :inline="true">
                        <el-form-item>
                          <el-input v-model="query_id" placeholder="请输入query_id"></el-input>
                        </el-form-item>
                        <el-form-item>
                          <el-input v-model="vin_code" placeholder="请输入vin_code"></el-input>
                        </el-form-item>
                        <el-form-item>
                          <el-input v-model="partnerId" placeholder="合作者订单"></el-input>
                        </el-form-item>

                        <el-form-item>
                          <el-input v-model="phone" placeholder="客户手机号"></el-input>
                        </el-form-item>
                        <el-form-item>
                          <el-input v-model="phone" placeholder="品牌"></el-input>
                        </el-form-item>
                      </el-form>
                      <el-form :inline="true">
                        <el-form-item>
                          <el-select v-model="partsel" placeholder="请选择">
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.text"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>

                        <el-form-item>
                          <el-date-picker
                            v-model="daterange"
                            type="daterange"
                            placeholder="选择日期范围">
                          </el-date-picker>
                        </el-form-item>

                        <el-form-item>
                          <el-select v-model="partsel" placeholder="请选择">
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.text"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>

                        <el-form-item>
                          <el-select v-model="partsel" placeholder="请选择">
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.text"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>

                        <el-form-item>
                          <el-button>搜索</el-button>
                          <span style="margin-left: 10px">全部记录 <a style="color: red">{{items}}</a>条</span>
                        </el-form-item>

                      </el-form>
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
                    :data="msg">
                    <el-table-column
                      type="index"
                      label="序列"
                      width="65">
                    </el-table-column>

                    <el-table-column
                      prop="type"
                      label="用户名(合作者)">
                    </el-table-column>

                    <el-table-column
                      prop="vin"
                      label="上传图像">
                    </el-table-column>

                    <el-table-column
                      prop="brand"
                      label="品牌名称">
                    </el-table-column>

                    <el-table-column
                      prop="brand"
                      label="提交查询时间">
                    </el-table-column>

                    <el-table-column
                      prop="brand"
                      label="完成查询时间">
                    </el-table-column>

                    <el-table-column
                      prop="brand"
                      label="机器人状态">
                    </el-table-column>

                    <el-table-column
                      prop="brand"
                      label="订单状态">
                    </el-table-column>

                    <el-table-column
                      prop="brand"
                      label="模式">
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
  import {getRobot2} from 'api/recommend'
  import paginate from 'vuejs-paginate'


  export default {
    components: {paginate},
    data() {
      return {
        daterange: '',
        partsel: [],
        value:[],
        lastPage: 0,//最后一页
        msg: [{'type':1}],//详细信息
        page: '',//当前页数
        slider: '',//详细页数
        previousPage: '',//上一页
        nextPage: '',//下一页
        keyword: '',//关键字
        items: '',//全部条数

        selected: '1',   // 比如想要默认选中为 Three 那么就把他设置为C
        options: [
          {text: '测试订单', value: '2'},
          {text: '亚伟', value: '3'},
          {text: '车源汇众', value: '3'},
          {text: '小雪客户', value: '3'},
          {text: '成都小时代', value: '3'},
          {text: '车鉴定', value: '3'},
          {text: '昆明悠创', value: '3'},
          {text: '车易拍', value: '3'},
          {text: '大搜车子公司', value: '3'},
          {text: '273', value: '3'},
          {text: '奇葩女神', value: '3'},
          {text: '汽修宝', value: '3'},
          {text: '车300', value: '3'},
          {text: '宁波热讯科技', value: '3'},
          {text: '河北龙环惠普', value: '3'},
          {text: '车源', value: '3'},
          {text: '优信二手车-其他', value: '3'},
          {text: '优信二手车-C2B业务', value: '3'},
          {text: '中研易通', value: '3'},
          {text: '小明养车', value: '3'},
          {text: '迅驰中颐', value: '3'},
          {text: '泽云端', value: '3'},
          {text: '人人', value: '3'},
          {text: '优信网[加急]', value: '3'},
          {text: '杭州车来客', value: '3'},
          {text: '九一', value: '3'},
          {text: '广州通易科技', value: '3'},
          {text: '车眼看', value: '3'},
          {text: '微贷网', value: '3'},
          {text: '优信二手车', value: '3'},
          {text: '华夏网', value: '3'},
          {text: '车经纪', value: '3'},
          {text: '瓜子', value: '3'},
          {text: '车易拍-测试账号（c是开，5是关）', value: '3'},
          {text: '众调', value: '3'},
          {text: '北京haoservice平台', value: '3'},
          {text: '杭州帝壹', value: '3'},
          {text: '车商通（关闭状态key末尾位为b,开启为a）', value: '3'},
          {text: '上海车神', value: '3'},
          {text: '斯考客', value: '3'},
          {text: '车101', value: '3'},
          {text: '车猫', value: '3'},
          {text: '车E估', value: '3'},
          {text: '车当', value: '3'},
          {text: 'G客户', value: '3'},
          {text: '杭州帝壹2', value: '3'},
          {text: '诚为', value: '3'},
          {text: '车鉴定-查询', value: '3'},
          {text: '杰昌', value: '3'},
          {text: '精准估', value: '3'},
          {text: '金车', value: '3'},
          {text: '微贷网-新增', value: '3'}
        ],

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
      this.pageload('', '', '', '', '', '', '', 1)//页面载入加载数据
    },
    methods: {
      search(queryId, vinCode, partnerId, partnerName, phone, startTime, endTime, currentPage) {
        this.pageload(queryId, vinCode, partnerId, partnerName, phone, startTime, endTime, currentPage)
      },
      pages(currentPage) {//v:传入的页数,更改页面
        this.pageload('', '', '', '', '', '', '', currentPage)
      },
      pageload(queryId, vinCode, partnerId, partnerName, phone, startTime, endTime, currentPage) {
        getRobot2(queryId, vinCode, partnerId, partnerName, phone, startTime, endTime, currentPage).then((data) => {//服务器http请求
          this.msg = data.data//详细页数
          this.slider = parseInt(data.paginator.slider)//总页数
          this.page = data.paginator.page//当前页数
          this.previousPage = data.paginator.previousPage//上一页
          this.nextPage = data.paginator.nextPage//下一页
          this.lastPage = data.paginator.lastPage//最后一页
          this.items = data.paginator.items//全部条数
        })
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
    }
  }

</script>
<style>
</style>
