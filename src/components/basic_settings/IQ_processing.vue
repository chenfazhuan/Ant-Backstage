<template>
  <div id="content" class="content-wrapper" style="min-height: 1505px;"><!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        保险查询处理列表
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">保险查询处理列表</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <form id="insuDataForm" name="splitPage" class="form-condensed form-horizontal" method="post">
            <div class="box">
              <div class="box-header with-border">
                <div class="form-inline">
                  <div class="form-group">
                    <div style="display: inline-block;" class="col-xs-12">
                      <div class="input-group">
                        <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                        <input type="text" id="startTime" class="form-control pull-right">
                      </div> ~
                      <div class="input-group">
                        <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                        <input type="text" id="endTime" class="form-control pull-right">
                      </div>
                      <input type="text" id="vin" class="form-control" placeholder="VIN码">
                      <input type="text" id="userName" class="form-control" placeholder="用户名(合作者)">
                      <select class="form-control cityBox" id="queryStatus" name="queryStatus">
                        <option value="" selected="selected">--查询状态--</option>
                        <option value="1">查询成功</option>
                        <option value="0">无记录</option>
                      </select>
                      <select class="form-control cityBox" id="payStatus" >
                        <option value="" selected="selected">--购买状态--</option>
                        <option value="1">已购买</option>
                        <option value="0">未购买</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group" style="margin: 0">
                      <button style="display: inline-block" type="button" class="btn btn-primary" id="btnSearch">查询</button>
                  </div>
                </div>
              </div>
              <div class="box-body ">
                <div class="row" id="In_pageCount">
                  <div class="col-xs-6 pull-left" style="margin-left: 10px;">总共<span style="color: #f00;"
                                                                                     id="J_dataCount">166</span>条记录
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table table-bordered table-hover dataTable">
                    <thead>
                    <tr>
                      <th>query_id</th>
                      <th>用户名(合作者)</th>
                      <th>vin</th>
                      <th>数据来源</th>
                      <th>查询时间</th>
                      <th>完成查询时间</th>
                      <th>查询状态</th>
                      <th>购买状态</th>
                      <th>详情</th>
                    </tr>
                    </thead>
                    <tbody id="insranView">
                    <tr>
                      <td>
                        8b4f601ba07b4a7d96cd2e63937d07a1
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 02:02:53
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        db524ac82ba34440b4d47955cd50b8f0
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 02:02:52
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        798373d539b24357beb4a6b570a3dcd5
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 02:02:50
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        ac18c69200ef43cab96cb613123dd1d9
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 02:02:49
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        d8540bd3c9c84f429579ae6b346bf4a5
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 02:02:48
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        6499b17b23534639aa43965f4c8a9d56
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 02:02:46
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        fbbd3e64cbad4820956c06dc0ab03a5d
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 02:02:45
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        3d5d461d2fd64b54a6a6f76ac6d2afd4
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 02:02:43
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        6f2bc25bd5ba4fe5b3af21ee203ca881
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 02:02:42
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        0950231dc66d4f5593192b79f65a0621
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 02:02:41
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        db52ed4d908c48b09195802ffcd02ed8
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 02:02:39
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        1d7724c58794418ea303ef0abd13b8c3
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 01:56:23
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        9e6e361289f34d769570a2e76c621e6c
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 01:56:22
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        f487b819285741a7a31983f4b33678bd
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 01:56:20
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        d8ddfa6f1e75475c83e750e88b23b457
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 01:56:19
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        1f94378734904c7682b7b8c484a2b7c4
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 01:56:18
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        789527829ce74f60a5169b0253b17675
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 01:56:16
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        416c3b1244e0400e84797c7773fd5e2b
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 01:56:15
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        55fdecdee8674684aa32f23e3b7865b9
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 01:56:14
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        8bc5efc1f9244797a1bb0103844ba462
                      </td>
                      <td>

                        99999


                      </td>
                      <td>
                        LFV3A23C3F3039046
                      </td>
                      <td>

                        <span class="label label-success">本地数据库</span>

                      </td>
                      <td>
                        2017-08-09 01:56:13
                      </td>
                      <td>

                      </td>
                      <td>

                        <span class="label label-success">查询成功</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/insurance/insuranceDetail.html',{token:'4ded98fe-d2fd-4723-924f-76affc80c5fa'})">
                          详情
                        </button>

                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- /.box-body -->
              <div class="box-footer clearfix">

                <div class="row">
                  <div class="col-xs-3"></div>
                  <div class="col-xs-6" style="text-align: center">
                    <paginate
                      :page-count="1"
                      :page-range="3"
                      :margin-pages="2"
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
          </form>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section><!-- /.content -->
    <!-- Modal -->


  </div>
</template>
<script>
  import $ from 'jquery'
  import '../../../static/bootstrapDatetimepicker/bootstrap-datetimepicker.min.css';
  import '../../../static/bootstrapDatetimepicker/bootstrap-datetimepicker.min.js';
  import paginate from 'vuejs-paginate'

  export default {
    components: {paginate},
    methods: {
      dateDefind() {
        //初始化
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
    },
    mounted: function () {
      this.dateDefind();
    }
  }
</script>
