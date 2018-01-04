<template>
  <div class="content-wrapper">
    <section class="content-header">
      <h1>
        增加账号
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li>
          <router-link to="/SpecialAccount"> 特殊账号管理</router-link>
        </li>
        <li class="active">增加子账号</li>
      </ol>
    </section>

    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <form id="dataForm" name="splitPage" class="form-condensed form-horizontal" method="post">
            <div class="box" style="border: 1px solid #000000">
              <div class="box-body">
                <p>账户信息</p>

                <div class="form-group form-group-sm">
                  <label class="col-xs-3 col-md-1 control-label" style="margin-right: 20px">姓名</label>
                  <div class="col-xs-9 col-md-2">
                    <input type="text" id="name" name="name" class="form-control">
                  </div>
                  <label class="col-xs-3 col-md-1 control-label" style="margin-right: 20px">电话*</label>
                  <p style="color: #CC0000;display:inline-block">(必填*)</p>
                  <div class="col-xs-9 col-md-2">
                    <input type="text" id="phone" name="phone" value="" class="form-control">
                  </div>
                </div>

                <div class="form-group form-group-sm">
                  <label class="col-xs-3 col-md-1 control-label" style="margin-right: 20px">地区</label>
                  <div class="col-xs-9 col-md-2">
                    <input type="text" id="area" name="area" value="" class="form-control">
                  </div>
                  <label class="col-xs-3 col-md-1 control-label" style="margin-right: 20px">密码*</label>
                  <p style="color: #CC0000;display:inline-block">(必填*)</p>
                  <div class="col-xs-9 col-md-2">
                    <input type="password" id="pwd" name="pwd" value="" class="form-control">
                  </div>
                </div>

                <div class="form-group form-group-sm">
                  <label class="col-xs-3 col-md-1 control-label" style="margin-right: 20px">公司名称</label>
                  <div class="col-xs-9 col-md-2">
                    <input type="text" id="company" name="company" value="" class="form-control">
                  </div>
                </div>
              </div>

            </div>
            <!-- /.box  style="display:none;" -->
            <div class="box" style="border: 1px solid #000000">
              <div class="box-header with-border">
                <input value="文字模式" type="button" id="text" style="background-color: #3c8dbc">
                <input value="图文模式" type="button" id="picture" style="background-color: #CCCCCC">
              </div>
              <div id="textModel">
                <div class="box-body" id="textDiv" style="width: 100%;height: auto">
                  <label class="col-xs-3 col-md-1 control-label" style="width: 150px">普通品牌文字价格</label>
                  <div class="col-xs-9 col-md-2">
                    <input type="text" id="textPrice" name="textPrice" value="" class="form-control">
                  </div>
                </div>
                <div class="form-group form-group-sm" id="textBody" style="padding-left: 50px;padding-right: 50px">
                  <div style="display:inline-block">奔驰<input style="margin: 20px" value="99"></div>
                  <div style="display:inline-block">迈凯伦<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">阿斯顿马丁<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">玛莎拉蒂<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">林肯<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">法拉利<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">兰博基尼<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">宾利<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">劳斯莱斯<input style="margin: 20px" value="100"></div>
                </div>
              </div>

              <div id="picModel" style="display: none">
                <div class="box-body" id="picDiv" style="width: 100%;height: auto">
                  <label class="col-xs-3 col-md-1 control-label" style="width: 150px">普通品牌图文价格</label>
                  <div class="col-xs-9 col-md-2">
                    <input type="text" id="picPrice" name="picPrice" value="" class="form-control">
                  </div>
                </div>
                <div class="form-group form-group-sm" id="picBody" style="padding-left: 50px;padding-right: 50px">
                  <div style="display:inline-block">阿斯顿马丁<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">奔驰<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">迈凯伦<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">玛莎拉蒂<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">林肯<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">法拉利<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">兰博基尼<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">宾利<input style="margin: 20px" value="100"></div>
                  <div style="display:inline-block">劳斯莱斯<input style="margin: 20px" value="100"></div>
                </div>
              </div>

            </div>


            <div id="addChildBody" class="box" style="border: 1px solid #000000">
              <div class="box-body">
                <p>子账号管理</p>
                <div class="form-group form-group-sm">
                  <label class="col-xs-3 col-md-1 control-label" style="margin-right: 20px;width: 150px">子账号最大数</label>
                  <div class="col-xs-9 col-md-2">
                    <input type="text" id="childMax" name="childMax" value="" class="form-control">
                  </div>
                </div>

                <div>
                  <p style="display:inline-block;">子账号列表</p>
                </div>
                <div>
                  <label class="col-xs-3 col-md-1 control-label" style="margin-right: 20px;width: 136px">子账号密码*</label>
                  <input type="password" id="childPwd" name="childPwd">
                  <p style="color: #CC0000;display:inline-block">(请输入子账号密码，再添加子账号)</p>
                  <input type="button" id="addChildAccount" style="display:inline-block;" value="添加子账号">
                </div>
                <div class="box">
                  <!-- /.box-header -->
                  <div class="box-body">
                    <div id="example2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                      <div class="row">
                        <div class="col-sm-6"></div>
                        <div class="col-sm-6"></div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <table id="example2" class="table table-bordered table-hover dataTable" role="grid"
                                 aria-describedby="example2_info">
                            <thead>
                            <tr role="row">
                              <th class="sorting_asc" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                  aria-sort="ascending"
                                  aria-label="Rendering engine: activate to sort column descending">
                                <font><font>编号</font></font></th>
                              <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                  aria-label="Browser: activate to sort column ascending"><font><font>电话</font></font>
                              </th>
                              <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                  aria-label="Platform(s): activate to sort column ascending">
                                <font><font>申请时间</font></font></th>
                              <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                  aria-label="Engine version: activate to sort column ascending">
                                <font><font>操作</font></font>
                              </th>
                              <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                  aria-label="CSS grade: activate to sort column ascending">
                                <font><font>修改子账号密码</font></font></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr role="row" class="odd" v-for="(value,key) in childAccounts">
                              <td class="sorting_1"><font><font>{{value.id}}</font></font></td>
                              <td><font><font>{{value.phone}}</font></font></td>
                              <td><font><font>{{value.time}}</font></font></td>
                              <td>
                                <input type="radio" value="1" :name="key" checked="0">可用
                                <input type="radio" value="0" :name="key">冻结
                              </td>
                              <td><input type="password" :value="value.password"></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.box-body -->
                </div>
              </div>
            </div>

            <div class="box" style="border: 1px solid #000000;padding-bottom: 10px">
              <p>账号设置</p>
              <label class="control-label" style="margin-left: 50px">状态:&nbsp;&nbsp;</label>
              <input type="radio" name="pStatus" value="1" id="ok" checked="checked">正常
              <input type="radio" name="pStatus" value="0" id="no">禁用
            </div>


            <div class="form-group form-group-sm">
              <div class="col-xs-offset-4 col-sm-offset-4 col-md-offset-5">
                <button type="button" class="btn btn-default" id="btnSearch">提交</button>
                <router-link to="/SpecialAccount">
                  <button type="button" class="btn btn-default" id="btnBack">取消</button>
                </router-link>
              </div>
            </div>

          </form>
          <div style="height: 40px">
          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
  </div>
</template>
<script>
  import {getAddSpecialAccount} from 'api/recommend'

  export default {
    data() {
      return {
        phone: '',
        childAccounts: '',
        mainAccount: ''
      }
    },
    created() {
      this.phone = this.$route.query.phone;
      this.pageload(this.phone)
    },
    methods: {
      pageload(phone) {
        getAddSpecialAccount(phone).then((res) => {//服务器http请求
          this.childAccounts = res.data.childAccounts
          this.mainAccount = res.data.mainAccount
        })
      }
    }
  }
</script>
