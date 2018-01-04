<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1 v-if="model==1">
        查无记录
        <small></small>
      </h1>
      <h1 v-if="model==2">
        快捷回复
        <small></small>
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
    <section class="content container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-primary">
            <div class="box-body row">
              <div class="col-md-12">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px">
                  <el-form-item label="用户名(合作者)">
                    <el-input v-model="ruleForm.name" :disabled="true" style="width: 217px"></el-input>
                  </el-form-item>


                  <el-form label-width="150px" :inline="true" :model="ruleForm" class="demo-form-inline">
                    <el-form-item label="行驶证或车辆铭牌" prop="money">
                      <img src="../../assets/img/user2-160x160.jpg" class="image" ref="img"
                           style="display: block;margin-bottom: 10px">

                      <el-button type="primary" @click="rotate(-1)">左转</el-button>
                      <el-button @click="rotate(1)">右转</el-button>

                    </el-form-item>
                  </el-form>


                  <el-form-item v-if='model==1' label="vin码" prop="phone">
                    <el-input v-model="ruleForm.name" style="width: 217px"></el-input>
                  </el-form-item>

                  <el-form-item v-if="model==2" label="保存输入的vin码" prop="phone" :inline="true">
                    <el-input v-model="ruleForm.name" style="width: 217px"></el-input>
                    <el-button type="primary">模糊重单查询</el-button>
                    <el-button>准确重单查询</el-button>
                  </el-form-item>

                  <el-form-item v-if='model==2' label="保存输出的品牌" prop="phone">
                    <el-input v-model="ruleForm.name" style="width: 217px"></el-input>
                    （如果提交品牌正确可不填,如果和实际vin对应品牌不符请更正.）
                  </el-form-item>

                  <el-form-item label="内容">
                    <el-input type="textarea" :autosize="{ minRows: 4}"></el-input>
                  </el-form-item>

                  <el-form-item v-if='model==2' label="结构部件">
                    <el-radio-group>
                      <el-radio label="正常"></el-radio>
                      <el-radio label="异常"></el-radio>
                    </el-radio-group>
                    <p class="label bg-red" style="display:block;width: 360px">(四梁六柱 有过调整 更换变形的等情况视为结构部件 异常)</p>
                  </el-form-item>
                  <el-form-item v-if='model==2' label="发动机">
                    <el-radio-group>
                      <el-radio label="正常"></el-radio>
                      <el-radio label="异常"></el-radio>
                    </el-radio-group>
                    <p class="label bg-red" style="display:block;width: 275px">(根据记录里面 发动机实际情况 来选择按钮)</p>
                  </el-form-item>
                  <el-form-item v-if='model==2' label="安全气囊">
                    <el-radio-group>
                      <el-radio label="正常"></el-radio>
                      <el-radio label="异常"></el-radio>
                    </el-radio-group>
                    <p class="label bg-red" style="display:block;width: 220px">(根据记录里面 有无安全气囊字体)</p>
                  </el-form-item>
                  <el-form-item v-if='model==2' label="里程数">
                    <el-radio-group>
                      <el-radio label="正常"></el-radio>
                      <el-radio label="异常"></el-radio>
                    </el-radio-group>
                  </el-form-item>

                  <el-form-item label="输入框中粘贴图片">
                    <el-input type="text" id="testInput" placeholder="截屏后粘贴到输入框中" style="width: 217px"></el-input>
                    <ul class="el-upload-list el-upload-list--picture" id="imgadd">
                    </ul>
                  </el-form-item>

                  <el-form-item v-if='model==2' label="是否自查">
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
    </section>
  </div>
</template>
<script>
  import $ from 'jquery'

  export default {
    data() {
      return {
        r: 0,
        model: 0,
        value2: '',
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
    mounted() {
      this.copypic()
    },
    methods: {
      choose() {
        if (this.$route.query.model == 'norecord') {
          this.model = 1
        } else if (this.$route.query.model == 'quickreply') {
          this.model = 2
        }
      },
      rotate(x) {
        if (x > 0) {
          this.r += 90
        } else {
          this.r -= 90
        }
        this.$refs.img.style.transform = 'rotate(' + this.r + 'deg)';
      },
      copypic() {
        var imgReader = function (item) {
          var blob = item.getAsFile(),
            reader = new FileReader();

          reader.onload = function (e) {
            var li = $(`<li class="el-upload-list__item is-success" style="height: auto;padding-left: 10px"><img style="height: auto" src="${e.target.result}" class=""><a class="el-upload-list__item-name"><i class="el-icon-document"></i></a><label class="el-upload-list__item-status-label"><i class="el-icon-upload-success el-icon-check"></i></label><i class="el-icon-close"></i></li>`)

            $('#imgadd').append(li);
            $('.el-icon-close').click(function () {
              $(this).parent().remove()
            })
          };
          reader.readAsDataURL(blob);
        };
        document.getElementById('testInput').addEventListener('paste', function (e) {
          var clipboardData = e.clipboardData,
            i = 0,
            items, item, types;

          if (clipboardData) {
            items = clipboardData.items;

            if (!items) {
              return;
            }

            item = items[0];
            types = clipboardData.types || [];

            for (; i < types.length; i++) {
              if (types[i] === 'Files') {
                item = items[i];
                break;
              }
            }

            if (item && item.kind === 'file' && item.type.match(/^image\//i)) {
              imgReader(item);
            }
          }
        });
      }
    },
    watch: {
//      '$route': 'choose',//监听路由变化
      $route() {
        this.choose()
        this.copypic()
      }
    },
    created() {
      this.choose();
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
