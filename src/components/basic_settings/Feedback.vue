<template>
  <div id="content" class="content-wrapper" style="min-height: 1505px;"><!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        意见反馈列表
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">意见反馈列表</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <form id="dataForm" name="splitPage" class="form-condensed form-horizontal" method="post">
            <div class="box">
              <div class="box-header with-border">
                <div class="form-inline">
                  <div class="form-group">
                    <div style="display: inline-block;" class="col-xs-12">
                      <input type="text" id="vin" class="form-control" placeholder="客户手机">
                      <input type="text" id="userName" class="form-control" placeholder="user_id">
                      <div class="input-group">
                        <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                        <input type="text" id="startTime" class="form-control pull-right">
                      </div> ~
                      <div class="input-group">
                        <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                        <input type="text" id="endTime" class="form-control pull-right">
                      </div>
                      <select class="form-control cityBox" id="payStatus">
                        <option value="" selected="selected">--处理状态--</option>
                        <option value="1">已处理</option>
                        <option value="0">未处理</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group" style="margin: 0">
                    <button style="display: inline-block" type="button" class="btn btn-primary" id="btnSearch">查询
                    </button>
                  </div>
                </div>
              </div>
              <div class="box-body ">
                <div class="row" id="J_pageCount">
                  <div class="col-xs-6 pull-left" style="margin-left: 10px;">总共<span style="color: #f00;"
                                                                                     id="J_dataCount">38</span>条记录
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table table-bordered table-hover dataTable">
                    <thead>
                    <tr>
                      <th>编号</th>
                      <th>用户名(手机号)</th>
                      <th>反馈意见</th>
                      <th>反馈时间</th>
                      <th>状态</th>
                      <th>操作</th>
                    </tr>
                    </thead>
                    <tbody id="view">
                    <tr>
                      <td>
                        44facf7164974a298a40003da30700b7
                      </td>
                      <td>

                        273


                      </td>
                      <td>
                        789789
                      </td>
                      <td>
                        起亚
                      </td>
                      <td>
                        泉州
                      </td>
                      <td>
                        2017-03-13 16:06:55
                      </td>
                      <td>

                        <span class="label label-success">审核通过</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <span class="label label-success">在售</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detailChangeStatus.html',{token:'44facf7164974a298a40003da30700b7'})">
                          下架
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        c64cdc82eb5c4e6483fa480f8612b898
                      </td>
                      <td>

                        个人( 18865551681)


                      </td>
                      <td>
                        LGBYHE6463GHHDRFV
                      </td>
                      <td>
                        日产
                      </td>
                      <td>
                        杭州
                      </td>
                      <td>
                        2017-05-25 10:31:14
                      </td>
                      <td>

                        <span class="label label-danger">未审核</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>


                        <span class="label label-danger">下架</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detail.html',{token:'c64cdc82eb5c4e6483fa480f8612b898'})">
                          审核
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        53769e1fd98e43ab94d55e69e7277e10
                      </td>
                      <td>

                        个人(再见 159 4092 6841)


                      </td>
                      <td>
                        LGBSHSJJDXBBXHXHX
                      </td>
                      <td>
                        奥驰
                      </td>
                      <td>
                        杭州
                      </td>
                      <td>
                        2017-05-25 09:50:03
                      </td>
                      <td>

                        <span class="label label-danger">未审核</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <span class="label label-success">在售</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detail.html',{token:'53769e1fd98e43ab94d55e69e7277e10'})">
                          审核
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        31702e318efc4336bb6864317445e5ae
                      </td>
                      <td>

                        个人(晖哥 15887936599)


                      </td>
                      <td>
                        LJDMAA220E0507084
                      </td>
                      <td>
                        起亚
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-11 18:18:11
                      </td>
                      <td>

                        <span class="label label-success">审核通过</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>


                        <span class="label label-danger">下架</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detailOnlySee.html',{token:'31702e318efc4336bb6864317445e5ae'})">
                          查看
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        058fd89e8340424baa132925ef684241
                      </td>
                      <td>

                        个人(陈爽39 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:49:27
                      </td>
                      <td>

                        <span class="label label-danger">审核未通过</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>


                        <span class="label label-danger">下架</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detailOnlySee.html',{token:'058fd89e8340424baa132925ef684241'})">
                          查看
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        8c33d89437234177b64519065208ccb8
                      </td>
                      <td>

                        个人(陈爽38 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:49:24
                      </td>
                      <td>

                        <span class="label label-danger">审核未通过</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>


                        <span class="label label-danger">已删除</span>

                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detailOnlySee.html',{token:'8c33d89437234177b64519065208ccb8'})">
                          查看
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        e3608c3b92ed4d90bd992a15e73a61e8
                      </td>
                      <td>

                        个人(陈爽37 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:49:21
                      </td>
                      <td>

                        <span class="label label-danger">审核未通过</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <span class="label label-success">在售</span>


                      </td>
                      <td>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        f32050a37a804f788a31ddbee06636fd
                      </td>
                      <td>

                        个人(陈爽36 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:49:19
                      </td>
                      <td>

                        <span class="label label-danger">未审核</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <span class="label label-success">在售</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detail.html',{token:'f32050a37a804f788a31ddbee06636fd'})">
                          审核
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        22613b003a274651b2d85a0c0f681943
                      </td>
                      <td>

                        个人(陈爽35 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:49:17
                      </td>
                      <td>

                        <span class="label label-danger">审核未通过</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>


                        <span class="label label-danger">下架</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detailOnlySee.html',{token:'22613b003a274651b2d85a0c0f681943'})">
                          查看
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        963c6bcc50624aac9680f37526d10835
                      </td>
                      <td>

                        个人(陈爽34 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:49:15
                      </td>
                      <td>

                        <span class="label label-danger">未审核</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <span class="label label-success">在售</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detail.html',{token:'963c6bcc50624aac9680f37526d10835'})">
                          审核
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        911b09cedf4c4e82a9bec1aa8ef8d3df
                      </td>
                      <td>

                        个人(陈爽33 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:49:13
                      </td>
                      <td>

                        <span class="label label-success">审核通过</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>


                        <span class="label label-danger">下架</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detailOnlySee.html',{token:'911b09cedf4c4e82a9bec1aa8ef8d3df'})">
                          查看
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        fa17f87f054a4a9db20b16c6032262d0
                      </td>
                      <td>

                        个人(陈爽32 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:49:11
                      </td>
                      <td>

                        <span class="label label-danger">审核未通过</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <span class="label label-success">在售</span>


                      </td>
                      <td>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        b4b3632201f4422fa3e9579c43ae3765
                      </td>
                      <td>

                        个人(陈爽31 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:48:57
                      </td>
                      <td>

                        <span class="label label-danger">审核未通过</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>


                        <span class="label label-danger">下架</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detailOnlySee.html',{token:'b4b3632201f4422fa3e9579c43ae3765'})">
                          查看
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        70448dbc91f149d38225876617f7973a
                      </td>
                      <td>

                        个人(陈爽30 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:38:38
                      </td>
                      <td>

                        <span class="label label-danger">未审核</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <span class="label label-success">在售</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detail.html',{token:'70448dbc91f149d38225876617f7973a'})">
                          审核
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        bd6ddfde7ba54ed5906c4c674715f92a
                      </td>
                      <td>

                        个人(陈爽28 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:38:28
                      </td>
                      <td>

                        <span class="label label-danger">审核未通过</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>


                        <span class="label label-danger">下架</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detailOnlySee.html',{token:'bd6ddfde7ba54ed5906c4c674715f92a'})">
                          查看
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        1b1b07a77b9e461c8c4894cba02d11f6
                      </td>
                      <td>

                        个人(陈爽27 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:38:25
                      </td>
                      <td>

                        <span class="label label-danger">未审核</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <span class="label label-success">在售</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detail.html',{token:'1b1b07a77b9e461c8c4894cba02d11f6'})">
                          审核
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        74a4d467a5594d7e95c18c879c84dbc0
                      </td>
                      <td>

                        个人(陈爽26 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:38:20
                      </td>
                      <td>

                        <span class="label label-success">审核通过</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <span class="label label-success">在售</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detailChangeStatus.html',{token:'74a4d467a5594d7e95c18c879c84dbc0'})">
                          下架
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        c4bfef1f1981497faeb9b246aa2900d0
                      </td>
                      <td>

                        个人(陈爽25 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:38:16
                      </td>
                      <td>

                        <span class="label label-danger">未审核</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <span class="label label-success">在售</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detail.html',{token:'c4bfef1f1981497faeb9b246aa2900d0'})">
                          审核
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        f595e3cf50da486f8a168d4ecc467c3d
                      </td>
                      <td>

                        个人(陈爽24 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:38:09
                      </td>
                      <td>

                        <span class="label label-danger">未审核</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>

                        <span class="label label-success">在售</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detail.html',{token:'f595e3cf50da486f8a168d4ecc467c3d'})">
                          审核
                        </button>

                      </td>
                    </tr>

                    <tr>
                      <td>
                        02db0956b4764f24a7143f4adddb6417
                      </td>
                      <td>

                        个人(陈爽23 18865502259)


                      </td>
                      <td>

                      </td>
                      <td>
                        北京现代
                      </td>
                      <td>
                        盐城
                      </td>
                      <td>
                        2017-03-08 21:38:06
                      </td>
                      <td>

                        <span class="label label-danger">未审核</span>

                      </td>
                      <td>

                        <span class="label label-danger">无</span>

                      </td>
                      <td>


                        <span class="label label-danger">下架</span>


                      </td>
                      <td>

                        <button type="button" class="btn btn-info btn-xs"
                                onclick="ajaxContent('/pages/car/audit/detail.html',{token:'02db0956b4764f24a7143f4adddb6417'})">
                          审核
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
                  <div class="col-xs-6 pull-right">
                    <div id="widget_pagination">
                      <ul class="pagination pagination-sm no-margin pull-right" id="pager-ext">
                        <li class="first active disabled"><a href="#">第一页</a></li>
                        <li class="prev active disabled"><a href="#">上一页</a></li>
                        <li class="page active"><a href="#">1</a></li>
                        <li class="page"><a href="#">2</a></li>
                        <li class="next"><a href="#">下一页</a></li>
                        <li class="last"><a href="#">最后页</a></li>
                      </ul>
                    </div>
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
  export default {
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
