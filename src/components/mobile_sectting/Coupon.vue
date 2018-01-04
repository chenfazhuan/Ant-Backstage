<template>
  <div class="content-wrapper">
    <section class="content-header">
      <h1>
        优惠券
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
        </li>
        <li class="active">优惠券</li>
      </ol>
    </section>
    <section class="content container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-primary">
            <div class="box-header">
              <el-button icon="edit" @click="dialogVisible1=true">
                增加
              </el-button>
            </div>
            <div class="box-body table-responsive">
              <el-table
                highlight-current-row
                border
                :data="msg"
                style="width: 100%">

                <el-table-column
                  type="index"
                  label="序列"
                  width="60">
                </el-table-column>

                <el-table-column min-width="100px" label="标题 / 描述" align="center">
                  <template scope="scope">
                    <p style="margin-top: 5px">{{ scope.row.title }}</p>
                    <p>{{ scope.row.title1 }}</p>
                  </template>
                </el-table-column>


                <el-table-column
                  prop="web"
                  align="center"
                  label="金额 / 补偿金额">
                  <template scope="scope">
                    <p style="margin-top: 5px"><span class="label label-primary">¥{{scope.row.m}}</span> / <span
                      class="label label-success">¥{{scope.row.mm}}</span></p>
                    <p>{{scope.row.d}}</p>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  label="状态"
                  width="150">
                  <template scope="scope">
                    <el-select v-show="edit_state" v-model="scope.row.state" placeholder="请选择">
                      <el-option label="显示" value='1'></el-option>
                      <el-option label="隐藏" value='0'></el-option>
                    </el-select>
                    <span v-show="!edit_state&&scope.row.state==0" class="label label-danger">关闭</span>
                    <span v-show="!edit_state&&scope.row.state==1" class="label label-success">可用</span>
                  </template>
                </el-table-column>

                <el-table-column
                  align="center"
                  width="200px"
                  label="编辑">
                  <template scope="scope">
                    <el-button type='primary' size="small" icon="edit" @click="dialogVisible=true">
                      修改
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--修改-->
    <el-dialog v-model="dialogVisible">
      <el-form :model="ruleForm_add" ref="ruleForm_add" label-width="100px">
        <el-form-item label="标题">
          <el-input v-model="ruleForm_add.name"></el-input>
        </el-form-item>

        <el-form-item label="描述">
          <el-input v-model="ruleForm_add.name"></el-input>
        </el-form-item>

        <el-form-item label="金额">
          <el-input v-model="ruleForm_add.name"></el-input>
        </el-form-item>

        <el-form-item label="增益金额">
          <el-input v-model="ruleForm_add.name"></el-input>
        </el-form-item>

        <el-form-item label="抵扣券">
          <el-select v-model="DVoucher" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态">
          <el-radio v-model="radio" label="1">启用</el-radio>
          <el-radio v-model="radio" label="2">禁用</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!--增加-->
    <el-dialog v-model="dialogVisible1">
      <el-form :model="ruleForm_add" ref="ruleForm_add" label-width="100px">
        <el-form-item label="标题">
          <el-input v-model="ruleForm_add.name"></el-input>
        </el-form-item>

        <el-form-item label="描述">
          <el-input v-model="ruleForm_add.name"></el-input>
        </el-form-item>

        <el-form-item label="金额">
          <el-input v-model="ruleForm_add.name"></el-input>
        </el-form-item>

        <el-form-item label="增益金额">
          <el-input v-model="ruleForm_add.name"></el-input>
        </el-form-item>

        <el-form-item label="抵扣券">
          <el-select v-model="DVoucher" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态">
          <el-radio v-model="radio" label="1">启用</el-radio>
          <el-radio v-model="radio" label="2">禁用</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        radio: 1,
        DVoucher: '',
        options: [{
          value: '选项1',
          label: '抵扣券1'
        }, {
          value: '选项2',
          label: '抵扣券2'
        }, {
          value: '选项3',
          label: '抵扣券3'
        }, {
          value: '选项4',
          label: '抵扣券4'
        }, {
          value: '选项5',
          label: '抵扣券5'
        }],
        ruleForm_add: {//增加用户填写时候过滤
          name: '',
          pic: '',
          address: '',
          time: ''
        },
        rules: {//过滤提示
          name: [
            {required: true, message: '请输入标题', trigger: 'blur'}
          ],
          pic: [
            {required: true, message: '请输入价格'}
          ],
          address: [
            {required: true, message: '请输入网页地址'}
          ],
          time: [
            {required: true, message: '请输入时间'}
          ]
        },
        dialogVisible1: false,
        dialogVisible: false,
        state: 0,
        edit_pic: 0,
        edit_title: 0,
        edit_state: 0,
        edit_address: 0,
        edit_time: '2017-09-01 - 2017-10-28',
        msg: [{
          d: '抵扣卷6 x 20',
          m: '2500',
          mm: '1000',
          time: '2017-09-01 - 2017-10-28',
          title: '充300元送580元',
          title1: '即送全模式维保查询20次',
          pic: 'http://mayinvwang.com/Public/Admin/ueditor/php/upload//20170825/15036468891892.png',
          state: '1'
        },
        ]
      }
    },
    methods: {
      choosetime(e) {
        this.edit_time = e
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>
