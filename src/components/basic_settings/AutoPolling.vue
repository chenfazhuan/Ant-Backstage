<template>
  <div id="content" class="content-wrapper"><!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        自动查询
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">自动查询</li>
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
                  <p style="margin-left: 10px">底盘号</p>
                  <div style="display: inline-block;width: 10%" class="col-xs-9 col-md-2">
                    <input type="text" id="chassisId" name="chassisId" value="" class="form-control" placeholder="底盘号">
                  </div>
                </div>
                <div class="form-group form-group-sm">
                  <p style="margin-left: 10px">可查: 奥迪、一汽大众、克莱斯勒、Jeep、道奇、保时捷、斯巴鲁、进口大众、英菲尼迪</p>
                  <button style="display: inline-block;margin-left: 10px" type="button"
                          class="btn btn-primary" id="query">查询
                  </button>
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
