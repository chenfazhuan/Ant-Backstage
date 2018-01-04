<template>
  <div id="content" class="content-wrapper" style="min-height: 1505px;"><!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        G客户查询
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">G客户查询</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <form id="dataForm" name="splitPage" class="form-condensed form-horizontal" method="post">
            <div class="box">
              <div class="box-body" style="border: 1px solid #000000">
                <div class="form-group form-group-sm">
                  <label class="col-xs-3 col-md-1 control-label">G客户</label>
                  <div class="col-xs-9 col-md-2">
                    <select class="form-control cityBox" id="partner" name="partner">
                      <option value="634d4c75c90c4c81f1f1af14586b073f" selected="selected">G客户</option>
                      <option value="55555">奇葩女神</option>
                      <option value="25612958d1e691bbaceb77174b2e74ad">大搜车子公司</option>
                      <option value="99999">小雪客户</option>
                      <option value="0d93a073e15ed47e52c054d12ed18741">亚伟</option>
                    </select>
                  </div>
                </div>
                <div class="form-group form-group-sm">
                  <label class="col-xs-3 col-md-1 control-label">17位VIN码</label>
                  <div class="col-xs-9 col-md-2">
                    <input type="text" id="vin" name="vin" value="" class="form-control">
                  </div>
                </div>
                <div class="form-group form-group-sm">
                  <label class="col-xs-3 col-md-1 control-label">发动机</label>
                  <div class="col-xs-9 col-md-2">
                    <input type="text" id="engine" name="engine" value="" class="form-control">
                  </div>
                </div>
                <div class="form-group form-group-sm">
                  <label class="col-xs-3 col-md-1 control-label">备注</label>
                  <div class="col-xs-9 col-md-2">
                    <input type="text" id="remark" name="remark" value="" class="form-control">
                  </div>
                </div>
                <div class="form-group form-group-sm">
                  <label class="col-xs-3 col-md-1 control-label">brand_id</label>
                  <div class="col-xs-9 col-md-2">
                    <input type="text" id="brandId" name="brandId" value="" class="form-control">
                  </div>
                </div>
                <div class="form-group form-group-sm">
                  <label class="col-xs-3 col-md-1 control-label">brand_id</label>
                  <div style="display: inline-block;width: 9%" class="col-xs-9 col-md-2">
                    <select class="form-control cityBox" id="model" name="model">
                      <option value="1" selected="selected">1文字模式</option>
                      <option value="0" selected="selected">0图文模式</option>
                    </select>
                  </div>
                </div>
                <div class="form-group form-group-sm">
                  <button type="button" class="btn btn-default" id="query" style="margin-left: 50px">搜索</button>
                </div>
              </div>

              <div class="box-body" style="border: 1px solid #000000">
                <div class="form-group form-group-sm">
                  <label class="col-xs-3 col-md-1 control-label">query_id</label>
                  <div class="col-xs-9 col-md-2">
                    <input type="text" id="queryId" name="queryId" value="" class="form-control">
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
  export default {}
</script>
