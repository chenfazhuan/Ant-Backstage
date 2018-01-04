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
              <el-form :inline="true">
                <el-form-item>
                  <el-date-picker
                    v-model="daterange"
                    type="daterange"
                    :editable=false
                    range-separator="~"
                    default-value
                    @change="setEndDate"
                    placeholder="选择日期范围">
                  </el-date-picker>
                </el-form-item>

                <el-form-item>
                  <el-input v-model="vin_code" placeholder="请输入vin码"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-input v-model="phone" placeholder="客户手机号"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-input v-model="username" placeholder="车商名称"></el-input>
                </el-form-item>


                <el-form-item>
                  <el-select v-model="QStatus" placeholder="查询状态">
                    <el-option
                      v-for="item in Qoptions"
                      :key="item.value"
                      :label="item.text"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>

                <el-form-item>
                  <el-button @click="search()">搜索</el-button>
                  <el-button type="primary" @click="pages(1)">刷新</el-button>
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
              prop="queryId"
              align="center"
              label="单号">
            </el-table-column>

            <el-table-column
              prop="userPhone"
              align="center"
              label="手机号">
            </el-table-column>

            <el-table-column
              prop="carDealerName"
              align="center"
              label="车商名称">
            </el-table-column>

            <el-table-column
              prop="vin"
              align="center"
              label="vin码">
            </el-table-column>

            <el-table-column
              prop="brandName"
              align="center"
              label="品牌">
            </el-table-column>

            <el-table-column
              sortable
              prop="queryTime"
              align="center"
              label="查询日期">
              <template scope="scope">
                <span>{{ scope.row.queryTime }}</span>
              </template>
            </el-table-column>

            <el-table-column
              prop="payMoney"
              sortable
              label="查询金额"
              width="120"
              align="center">
              <!--<template scope="scope">-->
              <!--<span>{{ scope.row.payMoney.amount }}</span>-->
              <!--</template>-->
            </el-table-column>


            <el-table-column
              prop="payStatus"
              sortable
              label="支付状态"
              width="120"
              align="center">
              <template scope="scope">
                <span v-if="scope.row.payStatus==1" class="label label-success">已支付</span>
                <span class="label label-danger" v-else>未支付</span>
              </template>
            </el-table-column>

            <el-table-column
              label="查询状态"
              width="120"
              align="center">
              <template scope="scope">
                <span v-if="scope.row.queryStatus==0" class="label label-success">审核中</span>
                <span v-if="scope.row.queryStatus==1" class="label label-success">查询中</span>
                <span v-if="scope.row.queryStatus==2" class="label label-success">查询成功</span>
                <span v-if="scope.row.queryStatus==3" class="label label-danger">失败</span>
                <span v-if="scope.row.queryStatus==4" class="label label-danger">驳回</span>
                <span v-if="scope.row.queryStatus==5" class="label label-danger">无记录</span>
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
  </div>
</template>
<script>
  import paginate from 'vuejs-paginate'
  import {getQueryDetails} from 'api/recommend'

  export default {
    components: {paginate},
    data() {
      return {
        endTime:'',
        beginTime:'',
        vin_code: "",
        phone: '',
        daterange: '',//时间范围
        PStatus: '',//支付状态
        Poptions: [
          {text: '已支付', value: '0'},
          {text: '未支付', value: '1'}],
        QStatus: '',//查询状态
        Qoptions: [
          {text: '全部状态', value: ''},
          {text: '审核中', value: '0'},
          {text: '查询中', value: '1'},
          {text: '查询成功', value: '2'},
          {text: '失败', value: '3'},
          {text: '驳回', value: '4'},
          {text: '无记录', value: '5'}],
        payStatus: '',//支付状态
        userId: '',//用户id
        payMoney: '',//金额
        date: '',//日期
        sea: '',//搜索关键字
        lastpage: 0,//最后一页
        msg: '',//记录信息
        page: '',//当前页数
        slider: '',//详细页数
        previousPage: '',//上一页
        nextPage: '',//下一页
        keyword: '',//关键字
        items: '',//全部条数
        token: '',//记录token
        username: '',
        tableData: []
      }
    },
    methods: {
      setEndDate(val){
        var arr=val.split("~")
        if(arr!=''){
          this.beginTime=arr[0]+' 00:00:00'
          this.endTime=arr[1]+' 23:59:59'
        }else{
          this.beginTime=''
          this.endTime=''
        }

      },
      pageload(conType, token, currentPage,beginTime,endTime,carDealerName,phone,payStatus,queryStatus) {
        getQueryDetails(conType, token, currentPage,beginTime,endTime,carDealerName,phone,payStatus,queryStatus).then((data) => {
          if(data.paginator){
            this.lastpage = data.paginator.lastPage//最后一页
            this.items = data.paginator.items//全部条数
          }
          this.tableData = data.data
        })
      },
      pages(currentPage) {
        this.pageload('listQuery', '', currentPage, '', '', '', '', '', '')
      },
      search() {
        if(this.vin_code==''){
          this.pageload('listQuery', this.vin_code,'', this.beginTime, this.endTime, this.username, this.phone, this.PStatus, this.QStatus)
        }else{
          this.pageload('listQuery', this.vin_code,'','', '', '', '', '', '')
          this.vin_code=''
        }

      }
    },
    created() {
      this.pageload('listQuery', '', 1, '', '', '', '', '', '')
    }
  }
</script>
<style scoped>
  .dl-horizontal dd {
    margin-bottom: 10px;
  }

</style>
