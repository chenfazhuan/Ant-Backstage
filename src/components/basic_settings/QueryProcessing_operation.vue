<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1 v-if="model==1">
        订单分配
      </h1>
      <h1 v-if="model==2">
        查询失败
      </h1>
      <h1 v-if="model==3">
        详细内容
      </h1>
      <h1 v-if="model==4">
        文字回复
      </h1>
      <h1 v-if="model==5">
        新文字回复
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li>
          <router-link to="/QueryProcessing">
            订单列表
          </router-link>
        </li>
        <li class="active">
          订单操作
        </li>

      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-primary">
            <div class="box-body row">
              <div class="col-md-12" v-if="model==1">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px">
                  <el-form-item label="行驶证或车辆铭牌">
                    <el-input v-model="ruleForm.name" :disabled="true" style="width: 217px"></el-input>
                  </el-form-item>
                  <el-form label-width="150px" :inline="true" :model="ruleForm" class="demo-form-inline">
                    <el-form-item label="车架号" prop="money">
                      <el-input v-model="ruleForm.money" style="width: 217px"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('ruleForm','change')">模糊重单查询</el-button>
                      <el-button @click="resetForm('ruleForm')">准确重单查询</el-button>
                    </el-form-item>
                  </el-form>

                  <el-form-item label="品牌" prop="phone">
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>

                  <el-form-item label="4s客服">
                    <el-select v-model="value2" placeholder="请选择">
                      <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm','change')">修改</el-button>
                    <el-button onclick="window.history.go(-1)">返回</el-button>
                  </el-form-item>
                </el-form>
              </div>

              <div class="col-md-12" v-if="model==2">
                <el-form label-width="150px">
                  <el-form-item label="查询失败原因:">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                      <el-tab-pane label="1.系统维护无法查询" name="first">抱歉,此品牌4S查询系统升级维护中,暂无法查询,如4S查询系统恢复正常,我们将第一时间告知.
                      </el-tab-pane>
                      <el-tab-pane label="2.不连网" name="second">抱歉,此品牌4S系统目前还没联网,暂无法查询,如4S系统联网后,我们将第一时间告知.</el-tab-pane>
                      <el-tab-pane label="3.照片不符" name="third">抱歉,查询此车需要17位车架号,请您上传正确的图片，重新提交一次.</el-tab-pane>
                      <el-tab-pane label="4.照片模糊" name="fourth">抱歉,您上传的照片中车架号不清楚,请您上传更清晰的图片,重新提交一次.</el-tab-pane>
                      <el-tab-pane label="5.品牌选择与照片不符" name="five">抱歉,您选择的品牌与照片信息不符,请您选择正确的品牌或上传正确的照片,重新提交一次.
                      </el-tab-pane>
                      <el-tab-pane label="6.同时需要发动机号" name="six">抱歉,查询此车同时需要车架号和发动机号,请您上传行驶证，重新提交一次.</el-tab-pane>
                      <el-tab-pane label="7.查无记录" name="seven">经查询确认,此车无4S保养维修记录 </el-tab-pane>
                      <el-tab-pane label="8.系统暂时关闭" name="eight">今晚该品牌系统已暂时关闭，请您明天8：30分后再提交查询，给您带来不便敬请谅解！祝您生活愉快！
                      </el-tab-pane>
                    </el-tabs>
                  </el-form-item>
                  <el-form-item label="查询超时原因">
                    <el-select v-model="value2" placeholder="请选择">
                      <el-option
                        key="1"
                        value="非工作时间提交">
                      </el-option>
                      <el-option
                        key="1"
                        value="记录过多">
                      </el-option>
                      <el-option
                        key="1"
                        value="4S圈查询超时">
                      </el-option>
                      <el-option
                        key="1"
                        value="合作商返回错误">
                      </el-option>
                      <el-option
                        key="1"
                        value="合作商返回错误">
                      </el-option>
                      <el-option
                        key="1"
                        value="后台系统问题">
                      </el-option>
                      <el-option
                        key="1"
                        value="修改推送">
                      </el-option>
                      <el-option
                        key="1"
                        value="合作商未收到 重新推送">
                      </el-option>
                      <el-option
                        key="1"
                        value="开发测试">
                      </el-option>

                    </el-select>
                  </el-form-item>

                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm','change')">提交</el-button>
                    <el-button onclick="window.history.go(-1)">返回</el-button>
                  </el-form-item>
                </el-form>
              </div>

              <div class="col-md-12" v-if="model==3">
                <el-form ref="form" label-width="200px">
                  <el-form-item label="用户名(电话号码)">
                    <el-input :disabled="true" style="width: 217px"></el-input>
                  </el-form-item>
                </el-form>
                <el-form ref="form" label-width="200px">
                  <el-form-item label="品牌名称">
                    <el-input :disabled="true" style="width: 217px"></el-input>
                  </el-form-item>
                </el-form>
                <el-form ref="form" label-width="200px" :inline="true">
                  <el-form-item label="缩略图">
                    <el-input :disabled="true" style="width: 217px"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" data-toggle="modal" data-target="#modal-t">查看图片</el-button>
                    <el-button onclick="window.history.go(-1)">返回</el-button>
                  </el-form-item>
                </el-form>
              </div>

              <div class="col-md-12" v-if="model==4">

                <el-form ref="form" label-width="200px">
                  <el-form-item label="用户名(电话号码)">
                    <el-input :disabled="true" style="width: 217px"></el-input>
                  </el-form-item>

                  <el-form-item label="行驶证或车辆铭牌">
                    <el-input :disabled="true" style="width: 217px"></el-input>
                  </el-form-item>


                  <el-form-item label="保存输入的vin码" :inline="true">
                    <el-input style="width: 217px"></el-input>
                    <el-button type="primary" data-toggle="modal" data-target="#modal-t">模糊重单查询</el-button>
                    <el-button onclick="window.history.go(-1)">准确重单查询</el-button>
                  </el-form-item>


                  <el-form-item label="内容">
                    <el-input type="textarea" :autosize="{ minRows: 4}"></el-input>
                  </el-form-item>


                  <el-form-item label="是否自查">
                    <el-radio-group>
                      <el-radio label="是"></el-radio>
                      <el-radio label="否"></el-radio>
                    </el-radio-group>
                  </el-form-item>

                  <el-form-item label="查询超时原因">
                    <el-select v-model="value2" placeholder="请选择">
                      <el-option
                        key="1"
                        value="非工作时间提交">
                      </el-option>
                      <el-option
                        key="1"
                        value="记录过多">
                      </el-option>
                      <el-option
                        key="1"
                        value="4S圈查询超时">
                      </el-option>
                      <el-option
                        key="1"
                        value="合作商返回错误">
                      </el-option>
                      <el-option
                        key="1"
                        value="合作商返回错误">
                      </el-option>
                      <el-option
                        key="1"
                        value="后台系统问题">
                      </el-option>
                      <el-option
                        key="1"
                        value="修改推送">
                      </el-option>
                      <el-option
                        key="1"
                        value="合作商未收到 重新推送">
                      </el-option>
                      <el-option
                        key="1"
                        value="开发测试">
                      </el-option>

                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm','change')">修改</el-button>
                    <el-button onclick="window.history.go(-1)">返回</el-button>
                  </el-form-item>
                </el-form>
              </div>

              <div class="col-md-12" v-if="model==5">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px">

                  <el-form-item label="用户名(合作者)">
                    <el-input v-model="ruleForm.name" :disabled="true" style="width: 217px"></el-input>
                  </el-form-item>

                  <el-form-item label="行驶证或车辆铭牌" prop="money" :inline="true">
                    <img src="../../assets/img/user2-160x160.jpg" class="image" ref="img"
                         style="display: block;margin-bottom: 10px">
                    <el-button type="primary" @click="rotate(-1)">左转</el-button>
                    <el-button @click="rotate(1)">右转</el-button>
                  </el-form-item>

                  <el-form-item label="保存输入的vin码" prop="phone" :inline="true">
                    <el-input style="width: 217px"></el-input>
                    <el-button type="primary">模糊重单查询</el-button>
                    <el-button>准确重单查询</el-button>
                  </el-form-item>

                  <el-form-item label="保存输出的品牌">
                    <el-input style="width: 217px"></el-input>
                    （如果提交品牌正确可不填,如果和实际vin对应品牌不符请更正.）
                  </el-form-item>

                  <el-form style="margin-left: 150px;padding: 10px 0;border-top: 1px solid #ddd;border-bottom: 1px solid #ddd;margin-bottom: 10px; ">
                    <el-form-item style="margin-bottom: 0">
                      <el-radio-group size="small">
                        <el-radio-button label="left">正常</el-radio-button>
                        <el-radio-button label="right">异常</el-radio-button>
                        <el-radio-button label="top">事故</el-radio-button>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item  :inline="true">
                      <el-input type="textarea" :autosize="{ minRows: 4}"></el-input>
                      <el-button class="el-button el-button--danger">删除</el-button>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 0">
                      <el-radio-group size="small">
                        <el-radio-button label="left">正常</el-radio-button>
                        <el-radio-button label="right">异常</el-radio-button>
                        <el-radio-button label="top">事故</el-radio-button>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                      <el-input type="textarea" :autosize="{ minRows: 4}"></el-input>
                      <el-button class="el-button el-button--danger">删除</el-button>
                    </el-form-item>
                  </el-form>


                  <el-form-item label="整体车况评分">
                    <el-rate
                      style="margin-top: 7px"
                      v-model="value3"
                      show-text>
                    </el-rate>
                  </el-form-item>

                  <el-form-item label="内容">
                    <el-input type="textarea" :autosize="{ minRows: 4}" :disabled="true"></el-input>
                  </el-form-item>

                  <el-form-item label="结构部件">
                    <el-radio-group>
                      <el-radio label="正常"></el-radio>
                      <el-radio label="异常"></el-radio>
                    </el-radio-group>
                    <p class="label bg-red" style="display:block;width: 360px">(四梁六柱 有过调整 更换变形的等情况视为结构部件 异常)</p>
                  </el-form-item>
                  <el-form-item label="发动机">
                    <el-radio-group>
                      <el-radio label="正常"></el-radio>
                      <el-radio label="异常"></el-radio>
                    </el-radio-group>
                    <p class="label bg-red" style="display:block;width: 275px">(根据记录里面 发动机实际情况 来选择按钮)</p>
                  </el-form-item>
                  <el-form-item label="安全气囊">
                    <el-radio-group>
                      <el-radio label="正常"></el-radio>
                      <el-radio label="异常"></el-radio>
                    </el-radio-group>
                    <p class="label bg-red" style="display:block;width: 220px">(根据记录里面 有无安全气囊字体)</p>
                  </el-form-item>
                  <el-form-item label="里程数">
                    <el-radio-group>
                      <el-radio label="正常"></el-radio>
                      <el-radio label="异常"></el-radio>
                    </el-radio-group>
                  </el-form-item>

                  <el-form-item label="是否自查">
                    <el-radio-group>
                      <el-radio label="是"></el-radio>
                      <el-radio label="否"></el-radio>
                    </el-radio-group>
                  </el-form-item>

                  <el-form-item label="查询超时原因">
                    <el-select v-model="value2" placeholder="请选择">
                      <el-option
                        key="1"
                        value="非工作时间提交">
                      </el-option>
                      <el-option
                        key="1"
                        value="记录过多">
                      </el-option>
                      <el-option
                        key="1"
                        value="4S圈查询超时">
                      </el-option>
                      <el-option
                        key="1"
                        value="合作商返回错误">
                      </el-option>
                      <el-option
                        key="1"
                        value="合作商返回错误">
                      </el-option>
                      <el-option
                        key="1"
                        value="后台系统问题">
                      </el-option>
                      <el-option
                        key="1"
                        value="修改推送">
                      </el-option>
                      <el-option
                        key="1"
                        value="合作商未收到 重新推送">
                      </el-option>
                      <el-option
                        key="1"
                        value="开发测试">
                      </el-option>

                    </el-select>
                  </el-form-item>

                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm','change')">修改</el-button>
                    <el-button onclick="window.history.go(-1)">返回</el-button>
                  </el-form-item>

                </el-form>


              </div>


            </div>
          </div>
        </div>
      </div>
      <div class="modal fade in" id="modal-t">
        <div class="modal-dialog" style="margin: 152px auto;">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span></button>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default pull-left" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-danger">确定</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>

    </section>
  </div>
</template>
<script>
  import $ from 'jquery';

  export default {
    data() {
      return {
        r: 0,
        value3: '',
        activeName: 'first',
        model: '',
        value2: '',
        options2: [{
          value: '选项1',
          label: '1'
        }, {
          value: '选项2',
          label: '2'
        }, {
          value: '选项3',
          label: '3'
        }, {
          value: '选项4',
          label: '4'
        }, {
          value: '选项5',
          label: '5'
        }],
        value: '',
        options: [{
          value: '选项1',
          label: '奥迪'
        }, {
          value: '选项2',
          label: '宝马'
        }, {
          value: '选项3',
          label: '大众'
        }, {
          value: '选项4',
          label: 'XXX'
        }, {
          value: '选项5',
          label: 'XXXX'
        }],
        ruleForm: {//修改用户填写时候过滤
          resource: '',
          name: '',
          money: '',
          phone: '',
          operator: '',
          city: ''
        },
        rules: {//过滤提示
          name: [
            {required: true, message: '请输入车商名称', trigger: 'blur'}
          ],
          price: [
            {required: true, message: '请输入价格', trigger: 'blur'}
          ],
          money: [
            {required: true, message: '请输入价格'}
          ],
          resource: [
            {required: true, message: '请选择状态', trigger: 'change'}
          ],
          city: [
            {required: true, message: '请输入城市', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入手机号', trigger: 'blur'}
          ],
          operator: [
            {required: true, message: '请输入操作员', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      rotate(x) {
        if (x > 0) {
          this.r += 90
        } else {
          this.r -= 90
        }
        this.$refs.img.style.transform = 'rotate(' + this.r + 'deg)';
      },
      choose() {
        if (this.$route.query.model == 'distribution') {
          this.model = 1
        } else if (this.$route.query.model == 'failed') {
          this.model = 2
        } else if (this.$route.query.model == 'fontsize') {
          this.model = 3
        } else if (this.$route.query.model == 'fontcall') {
          this.model = 4
        } else if (this.$route.query.model == 'newfont') {
          this.model = 5
        }
      },
      handleClick(tab, event) {
      }
    },
    watch: {
      '$route': 'choose',//监听路由变化
    },
    created() {
      this.choose()
    }
  }

</script>
<style scoped>
  @media (min-width: 992px) {
    .el-textarea {
      width: 50%;
    }
  }
</style>
