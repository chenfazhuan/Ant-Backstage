<template>
  <div id="content" class="content-wrapper" style="min-height: 1505px;"><!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        全部的单
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">全部的单</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <form id="dataForm" name="splitPage" class="form-condensed form-horizontal" method="post">
            <div class="box">
              <div class="box-body">

                <div class="form-group form-group-sm">
                  <div style="display: inline-block;width: 9%" class="col-xs-9 col-md-2">
                    <input type="text" id="queryId" name="queryId" value="" class="form-control" placeholder="query_id">
                  </div>
                  <div style="display: inline-block;width: 9%" class="col-xs-9 col-md-2">
                    <input type="text" id="brandId" name="brandId" value="" class="form-control" placeholder="brand_id">
                  </div>
                  <div style="display: inline-block;width: 9%" class="col-xs-9 col-md-2">
                    <input type="text" id="imgUrl" name="imgUrl" value="" class="form-control" placeholder="img_url">
                  </div>
                  <div style="display: inline-block;width: 9%" class="col-xs-9 col-md-2">
                    <input type="text" id="vinCode" name="vinCode" value="" class="form-control" placeholder="vin_code">
                  </div>
                  <div style="display: inline-block;width: 9%" class="col-xs-9 col-md-2">
                    <input type="text" id="partnerId" name="partnerId" value="" class="form-control"
                           placeholder="合作者订单">
                  </div>
                  <div style="display: inline-block;width: 9%" class="col-xs-9 col-md-2">
                    <select class="form-control cityBox" id="partnerName" name="partnerName">
                      <option value="" selected="selected">--合作者--</option>
                    </select>
                  </div>
                  <div style="display: inline-block;width: 9%" class="col-xs-9 col-md-2">
                    <select class="form-control cityBox" id="model" name="model">
                      <option value="" selected="selected">--模式--</option>
                      <option value="1">文字</option>
                      <option value="2">图文</option>
                    </select>
                  </div>
                  <div style="display: inline-block;width: 9%" class="col-xs-9 col-md-2">
                    <select class="form-control cityBox" id="robot" name="robot">
                      <option value="" selected="selected">--人机--</option>
                      <option value="1">机器人</option>
                      <option value="2">非机器人</option>
                    </select>
                  </div>
                  <div style="display: inline-block;width: 9%" class="col-xs-9 col-md-2">
                    <select class="form-control cityBox" id="isCJD" name="isCJD">
                      <option value="" selected="selected">--是否车鉴定--</option>
                      <option value="1">车鉴定</option>
                      <option value="2">非车鉴定</option>
                    </select>
                  </div>
                  <div style="display: inline-block;width: 9%" class="col-xs-9 col-md-2">
                    <select class="form-control cityBox" id="isChangeVin" name="isChangeVin">
                      <option value="" selected="selected">--是否图转文--</option>
                      <option value="1">图转文</option>
                      <option value="2">非图转文</option>
                    </select>
                  </div>
                </div>

                <div class="form-group form-group-sm">

                  <div>
                    <input style="display: inline-block;width: 10%;margin-left: 10px" type="text" id="phone"
                           name="phone" value="" class="form-control" placeholder="客户手机号">
                    <input style="display: inline-block;width: 10%" type="text" id="brand" name="brand" value=""
                           class="form-control" placeholder="品牌">
                    <div style="display: inline-block;width: 10%" class="col-xs-9 col-md-2">
                      <input type="text" id="startTime" name="startTime" class="form-control datetimepicker"
                             data-format="yyyy-mm-dd hh:ii:00" placeholder="开始时间">
                    </div>
                    <div style="display: inline-block;width: 10%" class="col-xs-9 col-md-2">
                      <input type="text" id="endTime" name="endTime" class="form-control datetimepicker"
                             data-format="yyyy-mm-dd hh:ii:00" placeholder="结束时间">
                    </div>
                    <button type="button" class="btn btn-primary" id="no">搜索</button>

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
                      <th>query_id</th>
                      <th>用户名(合作者)</th>
                      <th>上传图像</th>
                      <th>品牌名称</th>
                      <th>提交查询时间</th>
                      <th>完成查询时间</th>
                      <th>耗时</th>
                      <th>状态</th>
                      <th>操作</th>
                      <th>模式</th>
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
  import paginate from 'vuejs-paginate'

  export default {
    components: {paginate}
  }
</script>
